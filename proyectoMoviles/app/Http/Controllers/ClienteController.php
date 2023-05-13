<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $cliente = Cliente::all();
        return $cliente;
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
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'password' => 'required',
            'birthday' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'companyName' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $cliente = Cliente::create([
            'firstName' => $request -> firstName,
            'lastName' => $request -> lastName,
            'email' => $request -> email,
            'password' => $request -> password,
            'birthday' => $request -> birthday,
            'address' => $request -> address,
            'phone' => $request -> phone,
            'companyName' => $request -> companyName,
        ]);
        echo $request->firstName;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $cliente = Cliente::find($request->id);
        return $cliente;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cliente $cliente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $cliente = Cliente::findOrFail($request->id);
        $cliente->firstName = $request -> firstName;
        $cliente->lastName = $request -> lastName;
        $cliente->email = $request -> email;
        $cliente->password = $request -> password;
        $cliente->birthday = $request -> birthday;
        $cliente->address = $request -> address;
        $cliente->phone = $request -> phone;
        $cliente->companyName = $request -> companyName;

        $cliente->save();
        return $cliente;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        $cliente = Cliente::find($request->id);
        $cliente->delete();

        $cliente = Cliente::all();
        return $cliente;
    }
}
