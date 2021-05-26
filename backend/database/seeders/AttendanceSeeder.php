<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrival = now();
        $leave   = now();
        DB::table("attendances")->insert([
        "roomID"       => 5531,
        "arrival"      => $arrival ,
        "leave"        => $leave   ,
        "riskForLunch" => ""       ,
        "riskForDinner"=> ""       ,
        "userID"       => 1
        ]);
    }
}
