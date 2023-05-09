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
        $cargador -> companyName = "Oxxo";
        $cargador -> phone = 523941230009;        

        $cargador -> save();

        $cargador = new Cargador();
        $cargador -> companyName = "PEMEX";
        $cargador -> phone = 521234567890;        

        $cargador -> save();

        $cargador = new Cargador();
        $cargador -> companyName = "Telcel";
        $cargador -> phone = 520987654321;        

        $cargador -> save();
    }
}
