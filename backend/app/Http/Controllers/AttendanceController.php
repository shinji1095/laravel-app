<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function attend(Request $request){
        return "hello"
    }

    public function leave(Request $request){
        $leave  = $request["leave"];
        $lunch  = $requset["lunch"];
        $dinner = $request["dinner"];
        return $request
    }

    public function temp(Request $request){
        return 
    }
}