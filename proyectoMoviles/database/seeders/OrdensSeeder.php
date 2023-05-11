<?php

namespace Database\Seeders;

use App\Models\Orden;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrdensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $orden = new Orden();
        $orden -> customerID = 1;
        $orden -> employeeID = 1;
        $orden -> orderDate = "2023-11-23";
        $orden -> shipperID = 1;
        $orden -> orderDetailsID = 1;
        $orden -> shipAddress = "Margaritas";

        $orden -> save();


        $orden = new Orden();
        $orden -> customerID = 1;
        $orden -> employeeID = 1;
        $orden -> orderDate = "2023-11-23";
        $orden -> shipperID = 1;
        $orden -> orderDetailsID = 1;
        $orden -> shipAddress = "Margaritas";

        $orden -> save();


        $orden = new Orden();
        $orden -> customerID = 1;
        $orden -> employeeID = 1;
        $orden -> orderDate = "2023-11-23";
        $orden -> shipperID = 1;
        $orden -> orderDetailsID = 1;
        $orden -> shipAddress = "Margaritas";

        $orden -> save();
    }
}
