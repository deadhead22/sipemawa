<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    public $table = "list_laporan";

    protected $fillable = [
        'nama_pelapor', 'no_tps', 'tingkat', 'fakultas', 'prodi',
        'jumlahcalon', 'suratkotakkosong', 'suaracalon1', 'suaracalon2', 'suaracalon3',
        'suratterpakai','suarasah','suaraabstain','sisasurat'
    ];
}
