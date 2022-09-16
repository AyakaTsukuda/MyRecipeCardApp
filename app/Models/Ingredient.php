<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipe_id',
        'item_id',
        'quantity',
        'unit',
        'seasoning_flag'
    ];

    protected $with = [
        'item',
        'recipe'
    ];

    public function item(){
        return $this->hasOne(Item::class);
    }

    public function recipe(){
        return $this->belongsTo(Recipe::class);
    }
}
