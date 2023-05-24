<?php

namespace App\Http\Controllers;

use App\Models\Proveedor;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProveedorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $proveedor = Proveedor::all();
        return $proveedor;
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
            'companyID' => 'required',
            'contactName' => 'required',
            'address' => 'required',
            'city' => 'required',
            'country' => 'required',
            'phone' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $proveedor = Proveedor::create([
            'companyID' => $request -> companyID,
            'contactName' => $request -> contactName,
            'address' => $request -> address,
            'city' => $request -> city,
            'country' => $request -> country,
            'phone' => $request -> phone,
        ]);
        echo $request->contactName;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $proveedor = Proveedor::find($request->id);
        return $proveedor;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Proveedor $proveedor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $proveedor = Proveedor::findOrFail($request->input('id'));
        $proveedor->contactName = $request -> input('contactName');
        $proveedor->address = $request -> input('address');
        $proveedor->city = $request -> input('city');
        $proveedor->country = $request -> input('country');
        $proveedor->phone = $request -> input('phone');

        $proveedor->save();
        return $proveedor;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $proveedor = Proveedor::find($request->input('id'));
        $proveedor->delete();

        $proveedor = Proveedor::all();
        return $proveedor;
    }
}
