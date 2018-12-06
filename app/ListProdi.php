<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListProdi extends Model
{
    public $table = "list_prodi";

    protected $fillable = [
        'fakultas', 'prodi'
    ];
}
