<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("users")->insert([
            "name"      => "江藤真士",
            "hashID"    => "aaa"    ,
            "academic"  => "M1"     ,
            "studentID" => 21966008 
        ]);
    }
}
