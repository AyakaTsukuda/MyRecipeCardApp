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
                'created_at' => now()
            ],
            [
                'name' => '長ネギ',
                'created_at' => now()
            ],
            [
                'name' => 'にら',
                'created_at' => now()
            ],
            [
                'name' => 'にんにく',
                'created_at' => now()
            ],
            [
                'name' => 'しょうが',
                'created_at' => now()
            ],
            [
                'name' => '豆板醤',
                'created_at' => now()
            ],
            [
                'name' => '唐辛子',
                'created_at' => now()
            ],
            [
                'name' => '鶏ガラスープの素',
                'created_at' => now()
            ],
            [
                'name' => '水溶き片栗粉',
                'created_at' => now()
            ],
            [
                'name' => 'ラー油',
                'created_at' => now()
            ],
            [
                'name' => '山椒',
                'created_at' => now()
            ]
        ]);
    }
}
