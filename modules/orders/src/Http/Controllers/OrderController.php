<?php

namespace Modules\Orders\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Orders\Http\Requests\OrderRequest;
use Modules\Orders\Http\Resources\OrderResource;
use Modules\Orders\Models\Order;

class OrderController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Order::class);

        $orders = Order::with('user')->get();

        return OrderResource::collection($orders);
    }

    public function store(OrderRequest $request)
    {
        $this->authorize('create', Order::class);

        $order = Order::create($request->validated());

        return new OrderResource($order);
    }

    public function show(Order $order)
    {
        $this->authorize('view', $order);

        return new OrderResource($order);
    }

    public function update(OrderRequest $request, Order $order)
    {
        $this->authorize('update', $order);

        $order->update($request->validated());

        return new OrderResource($order);
    }

    public function destroy(Order $order)
    {
        $this->authorize('delete', $order);

        $order->delete();

        return response()->json();
    }
}
