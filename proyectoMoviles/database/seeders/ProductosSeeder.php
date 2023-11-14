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
        $producto -> productName = "Gel ego 250ml";
        $producto -> image = "https://www.egoparahombres.com.mx/content/dam/brands/ego/mexico/1643060-67410593-ego-for-men-gel-black-24x250ml.png";
        $producto -> categoryID = 1;
        $producto -> supplierID = 1;
        $producto -> stock = 40;
        $producto -> code = 'ml';
        $producto -> price = 29;
        $producto -> discontinued = false;

        $producto -> save();


        $producto = new Producto();
        $producto -> productName = "Laptop HP";
        $producto -> image = "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/G/6G1Q0LA-1_T1679652939.png";
        $producto -> categoryID = 2;
        $producto -> supplierID = 3;
        $producto -> stock = 10;
        $producto -> code = 'pzs';
        $producto -> price = 21000;
        $producto -> discontinued = false;

        $producto -> save();


        $producto = new Producto();
        $producto -> productName = "Bolsa zanahoria";
        $producto -> image = "https://s.cornershopapp.com/product-images/5862113.jpg?versionId=T3HnY0AHFpUn8hQt6WmS9PvZimyEFv_n";
        $producto -> categoryID = 3;
        $producto -> supplierID = 1;
        $producto -> stock = 50;
        $producto -> code = 'kg';
        $producto -> price = 75;
        $producto -> discontinued = false;

        $producto -> save();



    }
}
