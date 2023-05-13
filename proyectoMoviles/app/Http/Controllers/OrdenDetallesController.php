<?php

namespace App\Http\Controllers;

use App\Models\OrdenDetalles;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class OrdenDetallesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $ordenDetalles = OrdenDetalles::all();
        return $ordenDetalles;
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
            'productID' => 'required',
            'quantity' => 'required',
            'discount' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $ordenDetalles = OrdenDetalles::create([
            'productID' => $request -> productID,
            'quantity' => $request -> quantity,
            'discount' => $request -> discount,
        ]);
        echo $request->productID;
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $ordenDetalles = OrdenDetalles::find($request->id);
        return $ordenDetalles;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrdenDetalles $ordenDetalles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $ordenDetalles = OrdenDetalles::findOrFail($request->id);
        $ordenDetalles->productID = $request -> productID;
        $ordenDetalles->quantity = $request -> quantity;
        $ordenDetalles->discount = $request -> discount;

        $ordenDetalles->save();
        return $ordenDetalles;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        $ordenDetalles = OrdenDetalles::find($request->id);
        $ordenDetalles->delete();

        $ordenDetalles = OrdenDetalles::all();
        return $ordenDetalles;
    }
}
