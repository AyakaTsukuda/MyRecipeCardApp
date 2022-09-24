<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;


class ItemController extends Controller
{

    public function getSearchItem(Request $request){
        if(!isset($request->word)) return [];

        $items = Item::where('name', 'LIKE', $request->word.'%')
                    ->orderBy('name')
                    ->get();

        return $items;
    }


}
