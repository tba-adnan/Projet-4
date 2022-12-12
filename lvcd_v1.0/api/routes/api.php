<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

/*
|---------------------------------------------------------------store-----------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/task',[TaskController::class,'index']);
// Route::post('/task',[TaskController::class,'store']);
// route::get('/task/{id}',[TaskController::class,'show']);
// route::put('update/{id}',[TaskController::class,'update']);
// route::delete('delete/{id}',[TaskController::class,'destroy']);

// Route::resource('task',TaskController::class);
Route::get('task',[TaskController::class,'index']);
Route::get('task/{id}',[TaskController::class,'show']);
Route::post('task/store',[TaskController::class,'store']);
Route::put('task/update/{id}',[TaskController::class,'update']);
Route::delete('task/delete/{id}',[TaskController::class,'destroy']);
