<?php

use Illuminate\Support\Facades\Route;
use Modules\Cart\Http\Controllers\CartController;
use Modules\Cart\Http\Controllers\PaymentController;
use Modules\Cart\Http\Controllers\PostTypeController;
use Modules\Cart\Http\Controllers\PlaceController;

//Route::get('payCallback/{uuid}', [PaymentController::class, 'payCallback'])->name('cart.payCallback');
//Route::get('admin', )->middleware(['auth:sanctum', 'verified']);


Route::group(['prefix' => 'admin'], function () {
    Route::view('auth', 'admin-panel::list-products');

    Route::view('', 'admin-panel::list-products');
    Route::view('add-product', 'admin-panel::list-products');
    Route::view('edit-product/{id}', 'admin-panel::list-products');

    Route::view('orders', 'admin-panel::list-products');
    Route::view('add-order', 'admin-panel::list-products');
    Route::view('edit-order/{id}', 'admin-panel::list-products');
});
