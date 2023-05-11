<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompaniesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $company = new Company();
        $company -> companyName = "Oxxo";
        $company -> location = "México";

        $company -> save();

        $company = new Company();
        $company -> companyName = "PEMEX";
        $company -> location = "México";

        $company -> save();

        $company = new Company();
        $company -> companyName = "Telcel";
        $company -> location = "México";

        $company -> save();

    }
}
