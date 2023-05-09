<?php

namespace Database\Seeders;

use App\Models\Cliente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClientesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $cliente = new Cliente();
        $cliente -> firstName = "Pablito";
        $cliente -> lastName = "López Perezchica";
        $cliente -> email = "pablito@gmail.com";
        $cliente -> password = "PabloGuapo123";
        $cliente -> birthday = "2001-01-01";
        $cliente -> address = "Cerca del ITA";
        $cliente -> companyName = "PEMEX";
        $cliente -> phone = "44900000000";

        $cliente -> save();

        $cliente = new Cliente();
        $cliente -> firstName = "Briancito";
        $cliente -> lastName = "Esquivel Barba";
        $cliente -> email = "briancito@gmail.com";
        $cliente -> password = "BrianGuapo123";
        $cliente -> birthday = "2001-05-24";
        $cliente -> address = "José Isabel Robles #110, Insurgentes";
        $cliente -> companyName = "Oxxo";
        $cliente -> phone = "4495547097";

        $cliente -> save();

        $cliente = new Cliente();
        $cliente -> firstName = "Saulito";
        $cliente -> lastName = "Mascorro Luevano";
        $cliente -> email = "saulito@gmail.com";
        $cliente -> password = "SaulGuapo123";
        $cliente -> birthday = "2001-01-01";
        $cliente -> address = "Luego le pregunto";
        $cliente -> companyName = "Telcel";
        $cliente -> phone = "4491111111";

        $cliente -> save();
    }
}
