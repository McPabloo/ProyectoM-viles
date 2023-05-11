<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdenDetalles extends Model
{
    use HasFactory;

    protected $fillable = [
        'id', 'productID', 'quantity', 'discount',
    ];

    public function cliente(){
        return $this->hasMany(Cliente::class);
    }

    public function producto(){
        return $this->hasMany(Producto::class);
    }
}


