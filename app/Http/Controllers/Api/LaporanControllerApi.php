<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Laporan;

class LaporanControllerApi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Laporan::all();
        return response()->json($result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $laporan = new Laporan();
        $laporan->nama_pelapor = $request->nama_pelapor;
        $laporan->no_tps = $request->no_tps;
        $laporan->tingkat = $request->tingkat;
        $laporan->fakultas = $request->fakultas;
        $laporan->prodi = $request->prodi;
        $laporan->jumlahcalon = $request->jumlahcalon;
        $laporan->suarakotakkosong = $request->suarakotakkosong;
        $laporan->suaracalon1 = $request->suaracalon1;
        $laporan->suaracalon2 = $request->suaracalon2;
        $laporan->suaracalon3 = $request->suaracalon3;
        $laporan->suaraterpakai = $request->suaraterpakai;
        $laporan->suarasah = $request->suarasah;
        $laporan->suaraabstain = $request->suaraabstain;
        $laporan->sisasurat = $request->sisasurat;
        $laporan->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $laporan = Laporan::find($id);
        return $laporan;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $laporan = Laporan::find($id);
        $laporan->name = $request->laporan;
        $laporan->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $laporan = Laporan::find($id);
        $laporan->delete();
        //
    }
}
