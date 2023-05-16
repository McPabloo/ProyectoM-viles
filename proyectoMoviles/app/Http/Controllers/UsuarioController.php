<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $usuario = User::all();
        return $usuario;
    }

    public function login(Request $request)
    {   
        $nickname = $request->input('nickname');
        $password = $request->input('password');

        $carrito = User::where('email', $nickname)->where('password', $password)->get();
        
        return $carrito;
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
            'notes' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $usuario = User::create([
            'firstName' => $request -> firstName,
            'lastName' => $request -> lastName,
            'email' => $request -> email,
            'password' => $request -> password,
            'birthday' => $request -> birthday,
            'address' => $request -> address,
            'phone' => $request -> phone,
            'hireDate' => Carbon::now(),
            'notes' => $request -> notes,
        ]);
        echo $request->firstName;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $usuario = User::find($request->id);
        return $usuario;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $usuario = User::findOrFail($request->id);
        $usuario->firstName = $request -> firstName;
        $usuario->lastName = $request -> lastName;
        $usuario->email = $request -> email;
        $usuario->password = $request -> password;
        $usuario->birthday = $request -> birthday;
        $usuario->address = $request -> address;
        $usuario->phone = $request -> phone;
        $usuario->hireDate = $request -> hireDate;
        $usuario->notes = $request -> notes;

        $usuario->save();
        return $usuario;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        $usuario = User::find($request->id);
        $usuario->delete();

        $usuario = User::all();
        return $usuario;
    }
}
