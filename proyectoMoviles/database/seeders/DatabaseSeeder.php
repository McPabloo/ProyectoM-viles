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
        $this->call(UsuariosSeeder::class);
        $this->call(CompaniesSeeder::class);
        $this->call(ProveedorsSeeder::class);
        $this->call(CargadorsSeeder::class);
        $this->call(CategoriasSeeder::class);
        $this->call(ClientesSeeder::class);
        $this->call(ProductosSeeder::class);
        $this->call(OrdensSeeder::class);
        $this->call(OrdenDetailsSeeder::class);
    }
}
