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

        dd($request);
    }
}
