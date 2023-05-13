<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $company = Company::all();
        return $company;
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
            'location' => 'required',
        ]);

        if ($validator->fails()){
            return $validator -> errors();
        }

        $company = Company::create([
            'companyName' => $request -> companyName,
            'location' => $request -> location,
        ]);
        echo $request->companyName;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $company = Company::find($request->id);
        return $company;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $company = Company::findOrFail($request->id);
        $company->companyName = $request -> companyName;
        $company->location = $request -> location;

        $company->save();
        return $company;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        //
        $company = Company::find($request->id);
        $company->delete();

        $company = Company::all();
        return $company;
    }
}
