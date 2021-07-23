<?php

use App\Http\Controllers\UploadController;
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

Route::post('/uploadAvatar', [UploadController::class, 'updateAvatar'])->name('updateAvatar');

Route::post('/deleteAvatarImage', [DeleteContoller::class, 'deleteAvatar'])->name('deleteAvatar');

Route::get('/getUserAvatar/{id}', [UploadController::class, 'getUserAvatar'])->name('getUserAvatar');

Route::get('/user/{id}', [AppController::class, 'getUser'])->name('user');

Route::get('/id', [AppController::class, 'getSessionId'])->name('id');
