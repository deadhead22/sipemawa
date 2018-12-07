<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DataTPS extends Model
{
    public $table = "list_tps";

    protected $fillable = [
        'fakultas'
    ];
}
