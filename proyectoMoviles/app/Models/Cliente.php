<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','firstName', 'lastName', 'email', 
        'password', 'birthday', 'address', 
        'phone','companyName',
    ];
}

