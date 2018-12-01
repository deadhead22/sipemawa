<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListLaporan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_laporan', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama_pelapor');
            $table->string('no_tps');
            $table->string('tingkat');
            $table->string('fakultas');
            $table->string('prodi');
            $table->integer('jumlahcalon');
            $table->integer('suarakotakkosong');
            $table->integer('suaracalon1');
            $table->integer('suaracalon2');
            $table->integer('suaracalon3');
            $table->integer('suaraterpakai');
            $table->integer('suarasah');
            $table->integer('suaraabstain');
            $table->integer('sisasurat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
