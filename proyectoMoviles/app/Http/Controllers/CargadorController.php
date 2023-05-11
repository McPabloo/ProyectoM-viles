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
            'companyName' => 'required',
            'phone' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $cargador = Cargador::create([
            'companyID' => $request -> companyName,
            'phone' => $request -> phone,
        ]);
        echo $request->$cargador;
    }

    /**
     * Display the specified resource.
     */
    public function show(Cargador $cargador)
    {
        //
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
    public function update(Request $request, Cargador $cargador)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cargador $cargador)
    {
        //
    }
}
