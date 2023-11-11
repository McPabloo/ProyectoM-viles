<?php

namespace App\Http\Controllers;

use App\Models\Orden;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\User;
use App\Models\Cargador;

class OrdenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $ordenes = Orden::join('users', 'ordens.employeeID', '=', 'users.id')
            ->select('ordens.id', 'users.firstName', 'users.lastName', 'users.email', 'ordens.orderDate')
            ->get();

        return $ordenes;

    }

    public function shipper()
    {
        //
        $shippers = Cargador::all();

        return $shippers;

    }

    public function customer()
    {
        //
        $clientes = Cliente::all(['id', 'firstName'])->pluck('firstName', 'id');

        return $clientes;

    }

    public function employee()
    {
        //
        $empleados = User::all(['id', 'firstName'])->pluck('firstName', 'id');

        return $empleados;

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
            'customerID' => 'required',
            'employeeID' => 'required',
            'orderDate' => 'required',
            'shipperID' => 'required',
            'orderDetailsID' => 'required',
            'shipAddress' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $orden = Orden::create([
            'customerID' => $request -> customerID,
            'employeeID' => $request -> employeeID,
            'orderDate' => $request -> orderDate,
            'shipperID' => $request -> shipperID,
            'orderDetailsID' => $request -> orderDetailsID,
            'shipAddress' => $request -> shipAddress,
        ]);
        echo $request->shipAddress;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $orden = Orden::find($request->id);
        return $orden;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orden $orden)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $orden = Orden::findOrFail($request->id);
        $orden->customerID = $request -> customerID;
        $orden->employeeID = $request -> employeeID;
        $orden->orderDate = $request -> orderDate;
        $orden->shipperID = $request -> shipperID;
        $orden->orderDetailsID = $request -> orderDetailsID;
        $orden->shipAddress = $request -> shipAddress;

        $orden->save();
        return $orden;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        $orden = Orden::find($request->id);
        $orden->delete();

        $orden = Orden::all();
        return $orden;
    }
}
