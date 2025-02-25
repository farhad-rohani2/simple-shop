<?php

use Illuminate\Support\Facades\Route;
use Modules\ProductCategories\Http\Controllers\ProductCategoryController;

Route::prefix('api')->group(function () {
    Route::resource('ProductCategories', ProductCategoryController::class);
})->middleware(['auth:sanctum']);
