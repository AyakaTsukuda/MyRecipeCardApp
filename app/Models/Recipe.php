<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
    ];

    protected $with = [
        'ingredients',
        'steps'
    ];


    public function ingredients(){
        return $this->hasMany(Ingredient::class);
    }

    public function steps(){
        return $this->hasMany(Step::class);
    }
}
