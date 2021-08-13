<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\models\UserAvatar;

class UpdateController extends Controller
{
    public function updateAvatar(Request $request)
    {
        $user = Auth::user();

        $objectAvatar = json_decode($request->objectAvatar);

        $userAvatar = UserAvatar::where('id', $objectAvatar->id)->get()->update(['update_at' => '2021-08-13 02:47:45']);

        dd($userAvatar->update());

        return response($userAvatar);
    }
}
