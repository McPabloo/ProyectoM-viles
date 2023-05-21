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
            'name' => 'required',
            'companyID' => 'required',
            'phone' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $cargador = Cargador::create([
            'name' => $request -> name,
            'companyID' => $request -> companyID,
            'phone' => $request -> phone,
        ]);
        echo $request->name;
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
    public function update(Request $request)
    {
        //
        $cargador = Cargador::findOrFail($request->input('id'));
        $cargador->name = $request -> input('name');
        $cargador->companyID = $request -> input('companyID');
        $cargador->phone = $request -> input('phone');

        $cargador->save();
        return $cargador;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $cargador = Cargador::find($request->input("id"));
        $cargador->delete();

        $cargador = Cargador::all();
        return $cargador;
    }

    public function create_token()
    {
        return csrf_token();
    }
}
