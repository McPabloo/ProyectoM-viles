<?php

namespace Database\Seeders;

use App\Models\Cargador;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CargadorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $cargador = new Cargador();
        $cargador -> companyID = 1;
        $cargador -> phone = "523941230009";        

        $cargador -> save();

        $cargador = new Cargador();
        $cargador -> companyID = 2;
        $cargador -> phone = "521234567890";        

        $cargador -> save();

        $cargador = new Cargador();
        $cargador -> companyID = 3;
        $cargador -> phone = "520987654321";        

        $cargador -> save();
    }
}
