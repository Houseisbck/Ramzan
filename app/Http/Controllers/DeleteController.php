<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\models\UserAvatar;
use App\models\User;

class DeleteController extends Controller
{
    public function deleteAvatar(Request $request)
    {

        $user = Auth::user();

        $objectAvatar = json_decode($request->objectAvatar);

        UserAvatar::where('id', $objectAvatar->id)->where('user_id', $user->id)->delete();

        $deleteAvatarPath = (storage_path('/app' . $objectAvatar->path));

        $deleteAvatarPathMin = (storage_path('/app' . $objectAvatar->path_miniature));

        unlink($deleteAvatarPath);

        unlink($deleteAvatarPathMin);

        $userAvatar = UserAvatar::where('user_id', $user->id)->latest('updated_at')->get();

        return response($userAvatar);
    }
}
