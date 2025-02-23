<?php

use Illuminate\Support\Facades\Route;
use Modules\Cart\Http\Controllers\CartController;
use Modules\Cart\Http\Controllers\PaymentController;
use Modules\Cart\Http\Controllers\PostTypeController;
use Modules\Cart\Http\Controllers\PlaceController;

//Route::get('payCallback/{uuid}', [PaymentController::class, 'payCallback'])->name('cart.payCallback');
//Route::get('admin', )->middleware(['auth:sanctum', 'verified']);
Route::view('admin', 'admin-panel::list-products')->middleware([
//    'auth:sanctum',
//    'verified'
]);
