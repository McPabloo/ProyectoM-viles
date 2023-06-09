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
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string("productName");
            $table->string("image");
            $table->unsignedBigInteger("categoryID");
            $table->foreign('categoryID')->references('id')->on('categorias');
            $table->unsignedBigInteger("supplierID");
            $table->foreign('supplierID')->references('id')->on('proveedors');
            $table->integer("stock");
            $table->integer("price");
            $table->boolean("discontinued");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
