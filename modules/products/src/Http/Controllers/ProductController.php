<?php

namespace Modules\Products\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Products\Http\Requests\ProductRequest;
use Modules\Products\Http\Resources\ProductResource;
use Modules\Products\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Product::class);

        return ProductResource::collection(Product::all());
    }

    public function store(ProductRequest $request)
    {
        $this->authorize('create', Product::class);

        $resource = Product::create($request->validationData());
        return new ProductResource($resource);
    }

    public function show(Product $product)
    {
        $this->authorize('view', $product);

        return new ProductResource($product);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $this->authorize('update', $product);

        $product->update($request->validated());

        return new ProductResource($product);
    }


    public function destroy(Product $product)
    {
        $this->authorize('delete', $product);

        $product->delete();

        return response()->json();
    }
}
