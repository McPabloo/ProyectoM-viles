<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orden extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','customerID', 'employeeID', 'orderDate',
        'shipperID', 'shipAddress',  
    ];

    public function cliente(){
        return $this->hasMany(Cliente::class);
    }

    public function user(){
        return $this->hasMany(User::class);
    }

    public function cargador(){
        return $this->hasMany(Cargador::class);
    }

    
}


