<!DOCTYPE html>
<html>
<head>
 <title>registrazione! Iniziamo il tuo percorso</title>
 <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Permanent+Marker&family=Russo+One&display=swap" rel="stylesheet">
    <script src="{{asset('js/registrati.js')}}" defer></script>
     <link rel="stylesheet" href="{{asset('css/header.css')}}">
       <link rel="stylesheet" href="{{asset('css/registrati.css')}}">
     <meta name="viewport"
          content="width=device-width, initial-scale=1">
          <meta name="csrf-token" content="{{ csrf_token() }}">
          </head>

          <body class="noscroll">
   
              <header>
                
                 <div id="logo">
            <img src="{{asset('immagini/logo gnomo.png')}}" /> 
        </div>

        <span id="titolo">
            Muscolandia
        </span>


   
       <div id="container_barra">

            <a href="{{url('mhw1')}}" class="elementi_barra">
                Home
            </a>
            <a href="{{url('mhw2')}}" class="elementi_barra">
                Allenatori
            </a>
            <a href="{{url('mhw3')}}" class="elementi_barra">
                Esercizi
            </a>
            <a href="" class="elementi_barra">
                Consigli
            </a>
        </div>

        <div id="container_barra_cell">
            <div>
                <a href="{{url('mhw1')}}">
                    <img src="{{asset('immagini/collegamenti/home.png')}}">
                </a>
                <a href="{{url('mhw2')}}">
                    <img src="{{asset('immagini/collegamenti/coach.png')}}">
                </a>
            </div>
            <div>
                <a href="{{url('mhw3')}}">
                    <img src="{{asset('immagini/collegamenti/esercizi.png')}}">
                </a>
                <a href="">
                    <img src="{{asset('immagini/collegamenti/domande.png')}}">
                </a>
            </div>
        </div>

              </header> 
       <div class="spaziointro"></div>
           <article> 
           <div id="contenuto">
         <div id="dati">
         <div id="registriamoci">
         <div id="centra">
         <span id="iniziamo"> Inserisci le credenziali!!!</span>
         </div>
         <form name="registrazione" method="post">
  <div>  
   <input type="text" name="nome" id="nome" placeholder="Nome">
   <input type="text" name="cognome" id="cognome" placeholder="Cognome">
   </div>
     <div> 
   <input type="text" name="email" id="email" placeholder="Email">
   <input type="radio" name="genere" value='m' class="genere"> Maschio 
   <input type="radio" name="genere" value='f' class="genere"> Femmina
    </div>
    <div> 
    <span class="nascita"> Data di nascita </span>
   <input type="date" name="nascita" id="nascita">
   </div>
    <div> 
    <input type="text" name="username" id="Username" placeholder="Username">
    <input type="radio" name="tipo" value='allenatore' class="tipo"> Allenatore
   <input type="radio" name="tipo" value='atleta'  class="tipo"> Atleta
      </div>
    <div> 
    <input type="password" name="password" id="password" placeholder="Password">
    <input type="password" name="password_confirm" id="password_confirm" placeholder="Conferma Password">
      </div>
      <div id="errore">
     
            </div>
   <input type="image" src="{{asset('registrazione/invia.png')}}" id="invia">
    </form>
    </div>
    </div>
    </article> 
    
    </body>
    </html>
