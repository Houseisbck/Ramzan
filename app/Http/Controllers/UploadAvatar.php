<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\models\UserAvatar;
use App\models\User;
use Intervention\Image\Facades\Image;

class UploadAvatar extends Controller
{
    public function update1Avatar(Request $request)
    {

        $user = User::find(Auth::user()->id);
        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            if ($user->avatar !== null) {
                $file = $user->avatar;
                if (file_exists(storage_path('/app' . $file))) {
                    unlink(storage_path('/app' . $file));
                }
            }
            Image::make($avatar)->resize(1025, 460)->save(storage_path('/app/public/images/' . $filename));
            $user = Auth::user();
            $user->avatar = '/public/images/' . $filename;
            $user->save();

            return response($user);
        }
    }

    public function updateAvatar(Request $request)
    {

    }
}
