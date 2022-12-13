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


// Route::resource('task',TaskController::class);
Route::get('v1/task',[TaskController::class,'index']);
Route::get('v1/task/{id}',[TaskController::class,'show']);
Route::post('v1/task/store',[TaskController::class,'store']);
Route::put('v1/task/update/{id}',[TaskController::class,'update']);
Route::delete('v1/task/delete/{id}',[TaskController::class,'destroy']);
