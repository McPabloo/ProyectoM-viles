<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ordens', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("customerID");
            $table->foreign('customerID')->references('id')->on('clientes');
            $table->unsignedBigInteger("employeeID");
            $table->foreign('employeeID')->references('id')->on('users');
            $table->string("orderDate");
            $table->unsignedBigInteger("shipperID");
            $table->foreign('shipperID')->references('id')->on('cargadors');
            $table->string("shipAddress");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordens');
    }
};
