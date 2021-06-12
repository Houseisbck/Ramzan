<?php

use App\Http\Controllers\AppController;

Route::get('/', [AppController::class, 'index']);
Route::get('/register', [AppController::class, 'index']);
Route::get('/mypage', [AppController::class, 'index']);

