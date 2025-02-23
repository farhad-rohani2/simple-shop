<?php

use Illuminate\Support\Facades\Route;
use Modules\Cart\Http\Controllers\CartController;
use Modules\Cart\Http\Controllers\PaymentController;
use Modules\Cart\Http\Controllers\PostTypeController;
use Modules\Cart\Http\Controllers\PlaceController;

Route::prefix('api/cart')
    ->middleware(['api', 'auth:sanctum'])
    ->group(function () {

        Route::post('', [CartController::class, 'show']);

    });
