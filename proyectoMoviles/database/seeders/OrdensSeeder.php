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
        $orden -> customerID = "";
    }
}
