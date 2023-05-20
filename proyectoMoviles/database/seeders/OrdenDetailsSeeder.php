<?php

namespace Database\Seeders;

use App\Models\Ordendetalles;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrdenDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $ordenDetails = new OrdenDetalles();
        $ordenDetails -> productID = 1;
        $ordenDetails -> quantity = 3;
        $ordenDetails -> discount = 0;
        $ordenDetails -> orden_id = 1;

        $ordenDetails -> save();


        $ordenDetails = new OrdenDetalles();
        $ordenDetails -> productID = 2;
        $ordenDetails -> quantity = 1;
        $ordenDetails -> discount = 1000;
        $ordenDetails -> orden_id = 1;

        $ordenDetails -> save();


        $ordenDetails = new OrdenDetalles();
        $ordenDetails -> productID = 3;
        $ordenDetails -> quantity = 2;
        $ordenDetails -> discount = 0;
        $ordenDetails -> orden_id = 1;

        $ordenDetails -> save();

    }
}
