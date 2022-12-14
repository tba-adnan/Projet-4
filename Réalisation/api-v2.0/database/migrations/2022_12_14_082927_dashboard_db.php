<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {



        Schema::create('group', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('logo'); 
            $table->timestamps();
        });

        
        Schema::create('brief', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_affected'); 
            $table->unsignedBigInteger('group_id');
            $table->foreign('group_id')->references('id')->on('group')->onDelete('cascade');
        });


        Schema::create('student', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('nickname');
            $table->string('email');
            $table->string('phone');
            $table->date('birth');
            $table->decimal('icn'); 
            $table->string('image'); 
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('group')->onDelete('cascade');
            $table->timestamps();
        });


        Schema::create('training_year', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('school_year'); 
            $table->unsignedBigInteger('year_id');
            $table->foreign('year_id')->references('id')->on('group')->onDelete('cascade');
            // $table->timestamps();
        });







    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
