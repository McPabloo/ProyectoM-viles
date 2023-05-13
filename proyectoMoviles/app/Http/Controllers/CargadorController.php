<?php

namespace App\Http\Controllers;

use App\Models\Cargador;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CargadorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $cargador = Cargador::all();
        return $cargador;
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
            'phone' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $cargador = Cargador::create([
            'companyID' => $request -> companyID,
            'phone' => $request -> phone,
        ]);
        echo $request->companyID;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $cargador = Cargador::find($request->id);
        return $cargador;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cargador $cargador)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $cargador = Cargador::findOrFail($request->id);
        $cargador->companyID = $request -> companyID;
        $cargador->phone = $request -> phone;

        $cargador->save();
        return $cargador;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        $cargador = Cargador::find($request->id);
        $cargador->delete();

        $cargador = Cargador::all();
        return $cargador;
    }

    public function create_token()
    {
        return csrf_token();
    }
}
