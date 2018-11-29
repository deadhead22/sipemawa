<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListFakultas extends Model
{
    public $table = "list_fakultas";

    protected $fillable = [
        'fakultas'
    ];
}
