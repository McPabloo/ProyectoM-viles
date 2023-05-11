<?php

namespace Database\Seeders;

use App\Models\Producto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $producto = new Producto();
        $producto -> productName = "Gel ego 350ml";
        $producto -> categoryID = 1;
        $producto -> supplierID = 1;
        $producto -> stock = 40;
        $producto -> price = 29;
        $producto -> discontinued = false;

        $producto -> save();


        $producto = new Producto();
        $producto -> productName = "Laptop HP";
        $producto -> categoryID = 2;
        $producto -> supplierID = 3;
        $producto -> stock = 10;
        $producto -> price = 21000;
        $producto -> discontinued = false;

        $producto -> save();


        $producto = new Producto();
        $producto -> productName = "Bolsa zanahoria";
        $producto -> categoryID = 3;
        $producto -> supplierID = 1;
        $producto -> stock = 50;
        $producto -> price = 75;
        $producto -> discontinued = false;

        $producto -> save();



    }
}
