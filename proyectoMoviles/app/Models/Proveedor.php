<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','companyName', 'contactName', 'address',
        'city', 'country', 'phone', 'homePage'
    ];

    public function producto(){
        return $this->hasMany(producto::class);
    }

    public function orden(){
        return $this->hasMany(Orden::class);
    }
}

