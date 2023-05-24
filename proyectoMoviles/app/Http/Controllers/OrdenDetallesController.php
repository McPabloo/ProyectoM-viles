<?php

namespace App\Http\Controllers;

use App\Models\OrdenDetalles;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class OrdenDetallesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
{
    $userID = $request->input('userID');

    
    // Realiza la consulta con el valor de userID
    $ordenesDetalles = DB::table('orden_detalles')
        ->join('ordens', 'orden_detalles.orden_id', '=', 'ordens.id')
        ->join('productos', 'orden_detalles.productID', '=', 'productos.id')
        ->select('productos.image','orden_detalles.id', 'productos.productName', 'productos.price')
        ->where('ordens.employeeID', '=', $userID)
        ->get();

    return $ordenesDetalles;
}

public function precio(Request $request)
{
    $userID = $request->input('userID');

    // Realiza la consulta con el valor de userID y obtiene la suma de los precios
    $totalPrice = DB::table('orden_detalles')
        ->join('ordens', 'orden_detalles.orden_id', '=', 'ordens.id')
        ->join('productos', 'orden_detalles.productID', '=', 'productos.id')
        ->where('ordens.employeeID', '=', $userID)
        ->sum('productos.price');

    return $totalPrice;
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
            'idprod' => 'required',
            'idorden' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $ordenDetalles = OrdenDetalles::create([
            'productID' => $request -> input('idprod'),
            'quantity' => 1,
            'discount' => 0,
            'orden_id' => $request -> input('idorden'),
        ]);
        
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
