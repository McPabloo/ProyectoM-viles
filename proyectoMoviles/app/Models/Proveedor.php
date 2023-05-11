<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','companyID', 'contactName', 'address',
        'city', 'country', 'phone'
    ];

    public function producto(){
        return $this->hasMany(Producto::class);
    }

    public function orden(){
        return $this->hasMany(Orden::class);
    }

    public function company(){
        return $this->belongsTo(Company::class);
    }
}

