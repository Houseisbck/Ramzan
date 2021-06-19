<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::get('/', function () {
    return view('appPhp');
});

Route::get('/page/{id}', [AppController::class, 'getPage'])->name('page');

Route::get('/user/{id}', [AppController::class, 'getUser'])->name('user');


// Route::prefix('auth')->group(function () {
//     Route::get('init', 'AppController@init');
//     Route::post('login', 'AppController@login');
//     Route::post('register', 'AppController@register');
//     Route::post('logout', 'AppController@logout');
//     Route::get('/mypage/{id}', 'PagesController@getPage')->name('mypage');
// });
