<?php

namespace Database\Seeders;

use App\Models\Categoria;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoria = new Categoria();
        $categoria -> categoryName = "Abarrotes";
        $categoria -> description = "Productos de abarrotes tipo tienda";

        $categoria -> save();

        $categoria = new Categoria();
        $categoria -> categoryName = "Tecnología";
        $categoria -> description = "Productos tecnologicos";

        $categoria -> save();

        $categoria = new Categoria();
        $categoria -> categoryName = "Fruta y verdura";
        $categoria -> description = "Fruta y verdura de temporada";

        $categoria -> save();
    }
}
