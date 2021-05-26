<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');

Route::get("temp", "AttendanceController@temp")

# Ajax通信
Route::prefix("ajax")->group(function(){
    Route::post("attend", "AttendanceController@attend")
    Route::post("leave", "AttendanceController@leave")

})
});
