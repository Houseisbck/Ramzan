<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\models\UserAvatar;
use App\models\User;
use Intervention\Image\Facades\Image;

class UploadAvatar extends Controller
{
    public function updateAvatar(Request $request)
    {
        $user = Auth::user();

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
    
            Image::make($avatar)->resize(1025, 460)->save(storage_path('/app/public/images/' . $filename));

            $userAvatar = UserAvatar::create([
                'user_id' => $user->id,
                'path' => '/public/images/' . $filename,
                'path_miniature'
            ]);

            return response($userAvatar);
        }
    }
}