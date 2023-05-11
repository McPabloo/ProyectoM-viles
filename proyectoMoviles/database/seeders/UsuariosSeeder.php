<?php

namespace Database\Seeders;

use App\Models\User;
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
        $user = new User();
        $user -> firstname = "Alexa";
        $user -> lastname = "Carrillo";
        $user -> phone = "449222222222";
        $user -> address = "Juan Pablo #300";
        $user -> password = "Alexa123";
        $user -> email = "alexa@gmail.com";
        $user -> birthday = "2004-09-15";
        $user -> hiredate = "2019-07-06";
        $user -> notes = "Muy buen trabajador";

        $user ->save();


        $user = new User();
        $user -> firstname = "Gustavo";
        $user -> lastname = "Guzman";
        $user -> phone = "4491111111";
        $user -> address = "Morelos #180";
        $user -> password = "Gustavo123";
        $user -> email = "gustavo@gmail.com";
        $user -> birthday = "2001-02-15";
        $user -> hiredate = "2019-07-06";
        $user -> notes = "Muy buen trabajador";

        $user ->save();


        $user = new User();
        $user -> firstname = "Manuel";
        $user -> lastname = "Mendez";
        $user -> phone = "44900000000";
        $user -> address = "Polo norte #015";
        $user -> password = "Manuel123";
        $user -> email = "Manuel@gmail.com";
        $user -> birthday = "2004-09-15";
        $user -> hiredate = "2019-07-06";
        $user -> notes = "Muy buen trabajador";

        $user ->save();
    }
}
