<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

// Route::get('/', function () {
//     return view('auth/register');
// });
// Route::get('/', [AppController::class, 'index']);
// Route::post('/login', [AppController::class, 'index']);
// Route::get('/mypage', [AppController::class, 'index']);

Route::get('/', function () {
    return view('appPhp');
});

Route::get('/page/{id}', [AppController::class, 'getPage'])->name('page');

// Route::prefix('auth')->group(function () {
//     Route::get('init', 'AppController@init');
//     Route::post('login', 'AppController@login');
//     Route::post('register', 'AppController@register');
//     Route::post('logout', 'AppController@logout');
//     Route::get('/mypage/{id}', 'PagesController@getPage')->name('mypage');
// });
