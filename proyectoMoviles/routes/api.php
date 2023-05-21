<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\CargadorController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\OrdenController;
use App\Http\Controllers\OrdenDetallesController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\ProveedorController;


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

//token
Route::get('/create_token', [CargadorController::class,'create_token']);


//Cargador routes

Route::get('/cargador_index', [CargadorController::class, 'index']); //done
Route::post('/create_cargador', [CargadorController::class, 'store']); //done
Route::post('/delete_cargador', [CargadorController::class, 'destroy']); //done
Route::post('/update_cargador', [CargadorController::class, 'update']); //done
Route::get('/show_cargador/{id}', [CargadorController::class, 'show']); //done


//routes Category

Route::get('/category_index', [CategoriaController::class, 'index']); //done
Route::post('/create_category', [CategoriaController::class, 'store']); //done
Route::post('/delete_category/{id}', [CategoriaController::class, 'destroy']); //done
Route::put('/update_category/{id}', [CategoriaController::class, 'update']); //done
Route::get('/show_category/{id}', [CategoriaController::class, 'show']); //done


//routes Cliente

Route::get('/cliente_index', [ClienteController::class, 'index']); //done
Route::post('/create_cliente', [ClienteController::class, 'store']); //done
Route::post('/delete_cliente/{id}', [ClienteController::class, 'destroy']); //done
Route::put('/update_cliente/{id}', [ClienteController::class, 'update']); //done
Route::get('/show_cliente/{id}', [ClienteController::class, 'show']); //done


//routes Company

Route::get('/company_index', [CompanyController::class, 'index']);//done
Route::post('/create_company', [CompanyController::class, 'store']);//done
Route::post('/delete_company', [CompanyController::class, 'destroy']);//done
Route::post('/update_company', [CompanyController::class, 'update']);//done
Route::get('/show_company/{id}', [CompanyController::class, 'show']);//done


//routes Orden

Route::get('/orden_index', [OrdenController::class, 'index']);//done
Route::post('/create_orden', [OrdenController::class, 'store']);//done
Route::post('/delete_orden/{id}', [OrdenController::class, 'destroy']);//done
Route::put('/update_orden/{id}', [OrdenController::class, 'update']);//done
Route::get('/show_orden/{id}', [OrdenController::class, 'show']);//done


//routes Orden detalles

Route::get('/ordendetalles_index', [OrdenDetallesController::class, 'index']);//done
Route::post('/create_ordendetalles', [OrdenDetallesController::class, 'store']);//done
Route::post('/delete_ordendetalles/{id}', [OrdenDetallesController::class, 'destroy']);//done
Route::put('/update_ordendetalles/{id}', [OrdenDetallesController::class, 'update']);//done
Route::get('/show_ordendetalles/{id}', [OrdenDetallesController::class, 'show']);//done


//routes Producto

Route::get('/producto_index', [ProductoController::class, 'index']);//done
Route::post('/create_producto', [ProductoController::class, 'store']);//done
Route::post('/delete_producto', [ProductoController::class, 'destroy']);//done
Route::post('/update_producto', [ProductoController::class, 'update']);//done
Route::get('/show_producto/{id}', [ProductoController::class, 'show']);//done


//routes Proveedor

Route::get('/proveedor_index', [ProveedorController::class, 'index']);//done
Route::post('/create_proveedor', [ProveedorController::class, 'store']);//done
Route::post('/delete_proveedor/{id}', [ProveedorController::class, 'destroy']);//done
Route::put('/update_proveedor/{id}', [ProveedorController::class, 'update']);//done
Route::get('/show_proveedor/{id}', [ProveedorController::class, 'show']);//done


//routes Usuario

Route::get('/usuario_index', [UsuarioController::class, 'index']);//done
Route::post('/create_usuario', [UsuarioController::class, 'store']);//done
Route::post('/delete_usuario', [UsuarioController::class, 'destroy']);//done
Route::post('/update_usuario', [UsuarioController::class, 'update']);//done
Route::get('/show_usuario/{id}', [UsuarioController::class, 'show']);//done


Route::post('/login', [UsuarioController::class, 'login']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


