<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrival = new DateTime("2021-05-20 10:00:00");
        $leave   = new DateTime("2021-05-20 16:00:00")
        DB::table("users")->insert({
        "roomID" => 5531,
        "arrival" => $arrival,
        "leave"  =>  $leave,
        "riskForLunch" => "",
        "riskForDinner"=> "",
        "userID" => 1
        })
    }
}
