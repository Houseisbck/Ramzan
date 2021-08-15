<?php

use App\Http\Controllers\AvatarController;
use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::get('/', function () {
    return view('appPhp');
});

Route::prefix('/page')->group(function () {
    Route::get('/{id}', [AppController::class, 'getPage'])->name('page');
});

Route::post('/uploadAvatar', [AvatarController::class, 'uploadAvatar'])->name('uploadAvatar');

Route::post('/deleteAvatarImage', [AvatarController::class, 'deleteAvatar'])->name('deleteAvatar');

Route::post('/updateAvatarImage', [AvatarController::class, 'updateAvatar'])->name('updateAvatar');

Route::get('/getUserAvatar/{id}', [AvatarController::class, 'getUserAvatar'])->name('getUserAvatar');

Route::get('/user/{id}', [AppController::class, 'getUser'])->name('user');

Route::get('/id', [AppController::class, 'getSessionId'])->name('id');
