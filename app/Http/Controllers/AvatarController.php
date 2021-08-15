<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\models\UserAvatar;
use App\models\User;
use Intervention\Image\Facades\Image;


class AvatarController extends Controller
{
    public function uploadAvatar(Request $request)
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

            $src = storage_path('/app/public/images/' . $filename);

            $imgDefaultResized = imagecreatefromstring(file_get_contents($src));

            $imgMiniatureResized = imagecreatetruecolor($selection->width, $selection->height);

            $imgMiniatureCopyResized = imagecopyresized($imgMiniatureResized, $imgDefaultResized, 0, 0, $selection->left, $selection->top, $selection->width, $selection->height, $selection->width, $selection->height);

            $imgMiniatureSrc = (storage_path('/app/public/images/' . 'min' . $filename));

            $imgMiniature = imagejpeg($imgMiniatureResized, $imgMiniatureSrc);

            UserAvatar::create([
                'user_id' => $user->id,
                'path' => '/public/images/' . $filename,
                'path_miniature' => '/public/images/' . 'min' . $filename
            ]);

            $userAvatar = UserAvatar::where('user_id', $user->id)->latest('updated_at')->get();

            return response($userAvatar);
        }
    }

    public function getUserAvatar(Request $request, int $id)
    {

        $user = User::where('id', $id)->first();

        $userAvatar = UserAvatar::where('user_id', $user->id)->latest('updated_at')->get();

        return response($userAvatar);
    }

    public function updateAvatar(Request $request)
    {
        $user = Auth::user();

        UserAvatar::whereNotNull('id')->update(['is_active' => false]);

        $objectAvatar = json_decode($request->objectAvatar);

        UserAvatar::where('id', $objectAvatar->id)->update(['is_active' => true]);

        $userAvatars = UserAvatar::where('user_id', $user->id)->orderBy('is_active', 'desc')->orderBy('created_at', 'desc')->get();

        return $userAvatars;
    }

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
