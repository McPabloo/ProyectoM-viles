<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\CargadorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Cargador routes

Route::get('/cargador_index', [CargadorController::class, 'index']);
Route::post('/create_cargador', [CargadorController::class, 'store']);


//routes Category



//routes Cliente



//routes Company



//routes Orden



//routes Orden detalles



//routes Producto



//routes Proveedor



//routes Usuario


Route::post('/login', [UsuarioController::class, 'login']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


