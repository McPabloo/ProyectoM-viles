<?php

namespace Database\Seeders;

use App\Models\Proveedor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProveedorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $suppliers = new Proveedor();
        $suppliers -> companyID = 1;
        $suppliers -> contactName = "Alonso";
        $suppliers -> address = "Lomas del rey #560";
        $suppliers -> city = "Aguascalientes";
        $suppliers -> country = "México";
        $suppliers -> phone = "4495523226";

        $suppliers -> save();


        $suppliers = new Proveedor();
        $suppliers -> companyID = 2;
        $suppliers -> contactName = "Miranda";
        $suppliers -> address = "Arnulfo Piñon #119";
        $suppliers -> city = "Aguascalientes";
        $suppliers -> country = "México";
        $suppliers -> phone = "4494441112";

        $suppliers -> save();


        $suppliers = new Proveedor();
        $suppliers -> companyID = 3;
        $suppliers -> contactName = "Lupercio";
        $suppliers -> address = "Humberto Mariano #90";
        $suppliers -> city = "Aguascalientes";
        $suppliers -> country = "México";
        $suppliers -> phone = "4499998877";

        $suppliers -> save();
    }
}
