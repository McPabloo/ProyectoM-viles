<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','companyName', 'location',
    ];

    public function cargador(){
        return $this->hasMany(cargador::class);
    }

    public function proveedor(){
        return $this->hasMany(proveedor::class);
    }

}
