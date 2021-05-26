<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('attendances')){
            Schema::create('attendances', function (Blueprint $table) {
                $table->id();
                $table->integer('room');
                $table->time('timeAttend');
                $table->time('timeLeave');
                $table->string('riskLunch');
                $table->string('riskDinner');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendances');
    }
}
