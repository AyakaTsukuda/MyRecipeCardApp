<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ingredient;
use App\Models\Step;


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
