<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CargadorController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//token
Route::get('/create_token', [CargadorController::class,'create_token']);
