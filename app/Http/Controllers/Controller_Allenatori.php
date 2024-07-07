<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Allenatori;
use App\Models\Associa;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
class Controller_Allenatori extends Controller
{
    public function RegisterTrainer(Request $request){
        if (Session::has('user_id')){
        $request->validate([
            'annuale' => 'required',
            'cellulare' => 'required',
            'descrizione' => 'required',
            'discipline' => 'required',
            'email' => 'required|email',
            'info' => 'required',
            'nomeallenatore' => 'required',
            'sede' => 'required',
            'semestre' => 'required',
            'trimestre' => 'required',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $errore1=DB::table("allenatori")
        ->Where('email', $request->input('email'))
        ->first();
        $errore2=DB::table("allenatori")
        ->Where('cellulare', $request->input('cellulare'))
        ->first();
        if($errore1){
            return response()->json(['messaggio' =>'Allenatore esistente, Email in uso']);
        }
        if($errore2){
            return response()->json(['messaggio' => 'Allenatore esistente, Cellulare in uso']);
        }

        
            $file = $request->file('logo');
            $fileName = $file->getClientOriginalName();
              $errore3=DB::table("allenatori")
        ->Where('logo', 'like', '%storage/Uploads/' . $fileName)
        ->first();
        if($errore3){
            return response()->json(['messaggio' => 'Allenatore esistente, Logo in uso']);
        }

             $file->storeAs('public/Uploads', $fileName);

          
            $allenatore = new Allenatori();
               $allenatore-> logo = '../storage/Uploads/'. $fileName;
                 $allenatore->nomeallenatore= $request->input('nomeallenatore');
                 $allenatore->discipline = $request->input('discipline');
                $allenatore-> descrizione =$request->input('descrizione');
                $allenatore->trimestre = $request->input('trimestre');
              $allenatore->   semestre = $request->input('semestre');
               $allenatore->  annuale = $request->input('annuale');
              $allenatore->  email= $request->input('email');
              $allenatore->   cellulare = $request->input('cellulare');
             $allenatore->    sede = $request->input('sede');
              $allenatore->  info = $request->input('info');
            

            $allenatore->save();

            
            $allenatoreId = $allenatore->id;

           
            $utenteId = Session::get('user_id'); 

            $associa = new Associa();
                $associa->profilo = $utenteId;
                $associa->allenatore = $allenatoreId;
            

            $associa->save();

            return response()->json(['messaggio' => '']);
        }else {
	return response()->json(['messaggio' => 'Errore durante il caricamento del file'], 500);
        }        
    }

    public function Ricerca(){
         if (Request()->has('Ricerca')){
             $risultati=DB::table('Allenatori')
             ->Where('nomeallenatore', 'like', '%'.Request('Ricerca').'%')
             ->orWhere('sede', 'like', '%'.Request('Ricerca').'%')
             ->get();
             return response()->json($risultati);
         }
            
    }

    public function GetAllenatori(){
    $allenatori = Allenatori::all();
    return response()->json($allenatori);
    }
}
