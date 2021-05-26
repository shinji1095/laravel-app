<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintAttendancesTable extends Migration
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
                //外部キー制約
                $table->integer("userID");
                $table->foreign("userID")
                ->reference("id")
                ->on("users")
                ->onDelete("cascade");
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
        // Schema::table('attendances', function (Blueprint $table) {
        //     $table->dropForeign('articles_user_id_foreign');
        // });
    }
}
