<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cargador extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','name','companyID', 'phone',
    ];

    public function company(){
        return $this->belongsTo(Company::class);
    }
}


