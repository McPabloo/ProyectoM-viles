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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("customerID");
            $table->foreign('customerID')->references('id')->on('clients');
            $table->unsignedBigInteger("employeeID");
            $table->foreign('employeeID')->references('id')->on('users');
            $table->string("orderDate");
            $table->unsignedBigInteger("shipperID");
            $table->foreign('shipperID')->references('id')->on('shippers');
            $table->unsignedBigInteger("orderDetailsID");
            $table->foreign('orderDetailsID')->references('id')->on('order_details');
            $table->string("shipAddress");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
