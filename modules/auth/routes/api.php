<?php

use Illuminate\Support\Facades\Route;
use Modules\Auth\Http\Controllers\AuthController;
use Modules\ProductCategories\Http\Controllers\ProductCategoryController;

Route::group([ 'prefix' => 'api/auth', 'controller' => AuthController::class], function () {
    Route::post('login', 'login');
    Route::post('logout', 'logout')->middleware('auth:sanctum');
    Route::post('register', 'register');
    Route::get('check', 'check')->middleware('auth:sanctum');
});

Route::middleware(['auth:sanctum','api'])->get('api/user', function (Request $request) {
    return \App\Models\User::get();
});
