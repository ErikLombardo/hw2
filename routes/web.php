<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller_Utenti;
use App\Http\Controllers\Controller_Allenatori;
use App\Http\Controllers\Controller_API;




Route::get('/', function () {
    return view('mhw1');
});
Route::get('/mhw1', function () {
    return view('mhw1'); 
});

Route::get('/mhw2', function () {
    return view('mhw2'); 
});

Route::get('/mhw3', function () {
    return view('mhw3'); 
});

Route::get('/registrati', function () {
    return view('registrati'); 
});


Route::post('Accesso', [Controller_Utenti::class, 'Accesso']);
Route::get('IsLogged', [Controller_Utenti::class, 'IsLogged']);
Route::post('Register', [Controller_Utenti::class, 'Register']);
Route::get('Logout', [Controller_Utenti::class, 'Logout']);
Route::get('CanAddTrainer', [Controller_Utenti::class, 'CanAddTrainer']);


Route::post('RegisterTrainer', [Controller_Allenatori::class, 'RegisterTrainer']);
Route::get('Ricerca', [Controller_Allenatori::class, 'Ricerca']);
Route::get('GetAllenatori', [Controller_Allenatori::class, 'GetAllenatori']);

Route::get('Esercizi', [Controller_API::class, 'RichiediEsercizi']);
Route::post('Traduzione', [Controller_API::class, 'TraduciEsercizi']);
?>
