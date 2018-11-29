<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('list_fakultas')->insert([
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',                
            ],
            [
                'fakultas' => 'Fakultas Pendidikan Psikologi',                
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',                
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam',                
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial',                
            ],
            [
                'fakultas' => 'Fakultas Teknik',                
            ],
            [
                'fakultas' => 'Fakultas Ilmu Keolahragaan',                
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',                
            ],
        ]);
    }
}
