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
            $table->foreign('categoryID')->references('id')->on('categorias')->onDelete('SET NULL');
            $table->unsignedBigInteger("supplierID");
            $table->foreign('supplierID')->references('id')->on('proveedors')->onDelete('SET NULL');
            $table->integer("stock");
            $table->integer("price");
            $table->string("code");
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
