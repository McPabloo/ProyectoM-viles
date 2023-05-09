<?php

namespace Database\Seeders;

use App\Models\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $usuario = new Usuario();
        $usuario -> nombre = "Alexa";
        $usuario -> contraseña = "Alexa123";
        $usuario -> telefono = "449222222222";
        $usuario -> direccion = "Juan Pablo #300";
        $usuario -> email = "alexa@gmail.com";
        $usuario -> fecha_cumpleaños = "2004-09-15";
        $usuario -> tipo = "cliente";

        $usuario ->save();


        $usuario = new Usuario();
        $usuario -> nombre = "Gustavo";
        $usuario -> contraseña = "Gustavo123";
        $usuario -> telefono = "4493336655";
        $usuario -> direccion = "Morelos #126";
        $usuario -> email = "gustavo@gmail.com";
        $usuario -> fecha_cumpleaños = "1995-05-10";
        $usuario -> tipo = "cliente";


        $usuario ->save();
        $usuario = new Usuario();
        $usuario -> nombre = "Manuel";
        $usuario -> contraseña = "Manuel123";
        $usuario -> telefono = "4490001234";
        $usuario -> direccion = "Licenciazo Garza Sada #810";
        $usuario -> email = "manuel@gmail.com";
        $usuario -> fecha_cumpleaños = "2002-10-25";
        $usuario -> tipo = "cliente";

        $usuario ->save();
    }
}
