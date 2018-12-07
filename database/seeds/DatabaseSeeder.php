<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1,50) as $index) {
            DB::table('list_tps')->insert([
                [
                    'no_tps' => 'TPS '.$index,
                    'tingkat' => ' ',
                    'fakultas' => ' ',
                    'prodi' => ' ',
                    'created_at' => Carbon::now(),      
                    'updated_at' => Carbon::now(),
                ],
            ]);
        }
        
        DB::table('list_fakultas')->insert([
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Pendidikan Psikologi',                
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',                
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam',                
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial',                
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',                
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Keolahragaan',                
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',                
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
        ]);

        DB::table('list_prodi')->insert([
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'prodi' => 'S1 Bimbingan dan Konseling',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'prodi' => 'S1 Manajemen Pendidikan',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'prodi' => 'S1 Pendidikan Guru PAUD',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'prodi' => 'S1 Pendidikan Guru Sekolah Dasar',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'prodi' => 'S1 Pendidikan Khusus',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'prodi' => 'S1 Pendidikan Masyarakat',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Pendidikan',
                'prodi' => 'S1 Teknologi Pendidikan',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Pendidikan Psikologi',      
                'prodi' => 'S1 Psikologi',          
                'created_at' => Carbon::now()->subHours(5),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Bahasa Arab',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Bahasa Indonesia',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Bahasa Inggris',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Bahasa Jepang',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Bahasa Jerman',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Bahasa Mandarin',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Bahasa Perancis',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Musik',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Pendidikan Tari',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Sastra Indonesia',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Bahasa dan Seni',            
                'prodi' => 'S1 Sastra Inggris',    
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Biologi',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Fisika',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Ilmu Komputer',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Kimia',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Matematika',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Pendidikan Biologi',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Pendidikan Fisika',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Pendidikan Kimia',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Pendidikan Matematika',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 
                'prodi' => 'S1 Statistika',            
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'D3 Hubungan Masyarakat',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'D3 Perjalanan Wisata',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Ilmu Komunikasi',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Pendidikan Agama Islam',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Pendidikan Geografi',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Pendidikan Ilmu Pengetahuan Sosial',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Pancasila dan Kewarganegaraan',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Sejarah',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Pendidikan Sosiologi',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Fakultas Ilmu Sosial', 
                'prodi' => 'S1 Sosiologi',           
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(), 
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'D3 Teknologi Elektronika',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'D3 Teknologi Konstruksi Bangunan Gedung',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'D3 Teknologi Mesin',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Informatika',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Konstruksi Bangunan',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Teknik Elektro',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Teknik Elektronika',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Teknik Mesin',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Rekayasa Keselamatan Kebakaran',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'D3 Bisnis Jasa Makanan',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'D3 Manajemen Pelabuhan',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'D3 Perdagangan Mode',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'D3 Tata Rias',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Kesejahteraan Keluarga',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Desain Fashion',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Seni Kuliner',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Teknik',              
                'prodi' => 'S1 Pendidikan Vokasional Tata Rias',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Keolahragaan',    
                'prodi' => 'S1 Ilmu Keolahragaan',
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Keolahragaan',      
                'prodi' => 'S1 Kepelatihan Kecabangan Olahraga',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Keolahragaan',      
                'prodi' => 'S1 Olahraga Rekreasi',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Keolahragaan',      
                'prodi' => 'S1 Pendidikan Jasmani',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ilmu Keolahragaan',      
                'prodi' => 'S1 Pendidikan Kepelatihan Olahraga',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'D3 Administrasi Perkantoran',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'D3 Akuntansi',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'D3 Manajemen Pemasaran',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'S1 Akuntansi',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'S1 Manajemen',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'S1 Pendidikan Administrasi Perkantoran',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'S1 Pendidikan Bisnis',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
            [
                'fakultas' => 'Fakultas Ekonomi',      
                'prodi' => 'S1 Pendidikan Ekonomi',         
                'created_at' => Carbon::now(),      
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
