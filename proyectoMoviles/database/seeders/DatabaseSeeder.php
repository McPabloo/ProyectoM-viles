<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //Calls to seeders
        $this->call(CargadorsSeeder::class);
        $this->call(CategoriasSeeder::class);
        $this->call(ClientesSeeder::class);
    }
}
