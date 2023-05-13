<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $producto = Producto::all();
        return $producto;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->all(),[
            'categoryID' => 'required',
            'supplierID' => 'required',
            'stock' => 'required',
            'price' => 'required',
            'discontinued' => 'required',
            'productName' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $producto = Producto::create([
            'categoryID' => $request -> categoryID,
            'supplierID' => $request -> supplierID,
            'stock' => $request -> stock,
            'price' => $request -> price,
            'discontinued' => $request -> discontinued,
            'productName' => $request -> productName,
        ]);
        echo $request->productName;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $producto = Producto::find($request->id);
        return $producto;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $producto = Producto::findOrFail($request->id);
        $producto->categoryID = $request -> categoryID;
        $producto->supplierID = $request -> supplierID;
        $producto->stock = $request -> stock;
        $producto->price = $request -> price;
        $producto->discontinued = $request -> discontinued;
        $producto->productName = $request -> productName;

        $producto->save();
        return $producto;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        $producto = Producto::find($request->id);
        $producto->delete();

        $producto = Producto::all();
        return $producto;
    }
}
