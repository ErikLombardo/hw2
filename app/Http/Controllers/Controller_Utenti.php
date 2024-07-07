<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Utenti;
use App\Models\Associa;
use Illuminate\Support\Facades\Hash;

class Controller_Utenti extends Controller{

public function Accesso(Request $request){        
    
            $username = $request->input('username');
            $password = $request->input('password');

            
            $user = DB::table('Utenti')
                ->where('username', $username)
                ->first();

              

            if ($user && Hash::check($password, $user->password) ) {
                
                Session::put('user_id', $user->id);
                Session::put('username', $user->username);
                Session::put('tipo', $user->tipo);

                return response()->json(true);
            } else {
                return response()->json(false);
            }
}

public function Logout(){
Session::flush();
}

public function Register(Request $request){
  

        $errore1 = DB::table('Utenti')
        ->where('username', $request->input('username'))
        ->first();

        if ($errore1){
             return response()->json(['errore' => 'Username in uso']);
        }

        $errore2= DB::table('Utenti')
        ->where('email', $request->input('email'))
        ->first();

           if ($errore2){
             return response()->json(['errore' => 'Account esistente']);
        }
        

        $utente = new Utenti();
        $utente->nome = $request->input('nome');
        $utente->cognome = $request->input('cognome');
        $utente->email = $request->input('email');
        $utente->genere = $request->input('genere');
        $utente->nascita = $request->input('nascita');
        $utente->username = $request->input('username');
        $utente->tipo = $request->input('tipo');
        $utente->password = bcrypt($request->input('password')); 

        $utente->save();

        return response()->json(['errore' => ""]);

}


public function Islogged(){
      $risposta = [];

        if (Session::has('user_id')) {
            if (Session::get('tipo') == "atleta") {
                $risposta['messaggio'] = "atleta";
                $risposta['username'] = Session::get('username');
            } elseif (Session::get('tipo') == "allenatore") {
                $risposta['messaggio'] = "allenatore";
                $risposta['username'] = Session::get('username');
            }
        } else {
            $risposta['messaggio'] = "accedi";
        }

        return response()->json($risposta);
    }

    public function CanAddTrainer(){
      $risposta=[];
      $risposta['risposta']=false;
      if(Session::has('user_id')){
          $Add= DB::table('associa')
        ->where('profilo', Session::get('user_id') )
        ->first();  

        if(!$Add){
             $risposta['risposta']=true;
        }else{
             $risposta['risposta']=false;
        }
      }
       return response()->json($risposta);
    }


}
?>
