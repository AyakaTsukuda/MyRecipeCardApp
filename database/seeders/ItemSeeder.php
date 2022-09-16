<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            [
                'name' => 'とうふ',
                'type_id' => 1,
                'created_at' => now()
            ],
            [
                'name' => '長ネギ',
                'type_id' => 1,
                'created_at' => now()
            ],
            [
                'name' => 'にんにく',
                'type_id' => 2,
                'created_at' => now()
            ],
            [
                'name' => 'しょうが',
                'type_id' => 2,
                'created_at' => now()
            ],
            [
                'name' => '豆板醤',
                'type_id' => 2,
                'created_at' => now()
            ],
            [
                'name' => '唐辛子',
                'type_id' => 2,
                'created_at' => now()
            ],
            [
                'name' => '鶏ガラスープの素',
                'type_id' => 2,
                'created_at' => now()
            ],
            [
                'name' => '水溶き片栗粉',
                'type_id' => 2,
                'created_at' => now()
            ],
            [
                'name' => 'ラー油',
                'type_id' => 2,
                'created_at' => now()
            ],
            [
                'name' => '山椒',
                'type_id' => 2,
                'created_at' => now()
            ]
        ]);
    }
}
