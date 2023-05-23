<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $categoria = Categoria::all();
        return $categoria;
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
            'categoryName' => 'required',
            'description' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $categoria = Categoria::create([
            'categoryName' => $request -> categoryName,
            'description' => $request -> description,
        ]);
        echo $request->categoryName;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $categoria = Categoria::find($request->id);
        return $categoria;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $categoria = Categoria::findOrFail($request->input('id'));
        $categoria->categoryName = $request -> input('categoryName');
        $categoria->description = $request -> input('description');

        $categoria->save();
        return $categoria;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $categoria = Categoria::find($request->input('id'));
        $categoria->delete();

        $categoria = Categoria::all();
        return $categoria;
    }
}
