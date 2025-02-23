<?php

namespace Modules\ProductCategories\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\ProductCategories\Http\Requests\ProductCategoryRequest;
use Modules\ProductCategories\Http\Resources\ProductCategoryResource;
use Modules\ProductCategories\Models\ProductCategory;

class ProductCategoryController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', ProductCategory::class);

        return ProductCategoryResource::collection(ProductCategory::all());
    }

    public function store(ProductCategoryRequest $request)
    {
        $this->authorize('create', ProductCategory::class);

        return new ProductCategoryResource(ProductCategory::create($request->validated()));
    }

    public function show(ProductCategory $productCategory)
    {
        $this->authorize('view', $productCategory);

        return new ProductCategoryResource($productCategory);
    }

    public function update(ProductCategoryRequest $request, ProductCategory $productCategory)
    {
        $this->authorize('update', $productCategory);

        $productCategory->update($request->validated());

        return new ProductCategoryResource($productCategory);
    }

    public function destroy(ProductCategory $productCategory)
    {
        $this->authorize('delete', $productCategory);

        $productCategory->delete();

        return response()->json();
    }
}
