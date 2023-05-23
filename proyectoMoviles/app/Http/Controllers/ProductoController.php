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
            'image' => $request -> image,
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
    public function update(Request $request)
    {
        //
        $producto = Producto::findOrFail($request->input('id'));
        $producto->categoryID = $request -> input('categoryID');
        $producto->supplierID = $request -> input('supplierID');
        $producto->stock = $request -> input('stock');
        $producto->price = $request -> input('price');
        $producto->discontinued = $request -> input('discontinued');
        $producto->productName = $request -> input('productName');
        $producto->image = $request -> input ('image');

        $producto->save();
        return $producto;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $producto = Producto::find($request->input('id'));
        $producto->delete();

        $producto = Producto::all();
        return $producto;
    }
}
