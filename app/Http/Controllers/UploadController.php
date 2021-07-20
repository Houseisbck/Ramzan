<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\models\UserAvatar;
use App\models\User;
use Intervention\Image\Facades\Image;

class UploadController extends Controller
{
    public function updateAvatar(Request $request)
    {

        $user = Auth::user();

        if ($request->hasFile('avatar')) {
            $selection = $request->selection;
            $selection = json_decode($selection);
            $canvas = $request->canvas;
            $canvas = json_decode($canvas);
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();

            Image::make($avatar)->resize($canvas->width, $canvas->height)->save(storage_path('/app/public/images/' . $filename));

            $imgDefaultResized = imagecreatefromjpeg(storage_path('/app/public/images/' . $filename));

            $imgMiniatureResized = imagecreatetruecolor($selection->width, $selection->height);

            $imgMiniatureCopyResized = imagecopyresized($imgMiniatureResized, $imgDefaultResized, 0, 0, $selection->left, $selection->top, $selection->width, $selection->height, $selection->width, $selection->height);

            $imgMiniatureSrc = (storage_path('/app/public/images/' . 'min' . $filename));

            $imgMiniature = imagejpeg($imgMiniatureResized, $imgMiniatureSrc);

            UserAvatar::create([
                'user_id' => $user->id,
                'path' => '/public/images/' . $filename,
                'path_miniature' => '/public/images/' . 'min' . $filename
            ]);

            $userAvatar = UserAvatar::where('user_id', $user->id)->get();

            return response($userAvatar);
        }
    }

    public function getUserAvatar(Request $request)
    {
        $user = Auth::user();

        $userAvatar = UserAvatar::where('user_id', $user->id)->get();

        return response($userAvatar);
    }
}
