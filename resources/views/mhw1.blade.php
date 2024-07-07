<!DOCTYPE html>
<html>
<head>
    <title> Gnomo Muscoloso </title>
       <script src="{{ asset('js/login.js') }}" defer></script>
         <meta charset="UTF-8">
        <link rel="stylesheet" href="{{asset('css/login.css')}}">
    <link rel="stylesheet" href="{{asset('css/mhw1.css')}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Permanent+Marker&family=Russo+One&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="{{asset('css/header.css')}}">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">
         <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

 <body>
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


        <div id="container_accesso">
  
        </div>

    </header>
    <div id="spaziointro"></div>
    <article>

         
          <span id="intro"> Vai in palestra!!!</span>

          <div id="spaziointrocell"></div>
          <div id="opzioni">

              <img src="{{asset('immagini/cerca_logo.png')}}" /> 
              <span class="opzionisingole">
                  Cerca tutto
              </span>

              <img src="{{asset('immagini/gym_logo.png')}}" />
              <span class="opzionisingole">
                  Palestre

              </span>

              <img src="{{asset('immagini/nutrizionista_logo.png')}}" />
              <span class="opzionisingole">
                  Nutrizionisti
              </span>

              <img src="{{asset('immagini/fisioterapist_logo.png')}}" />
              <span class="opzionisingole">
                  Fisioterapisti
              </span>

              <img src="{{asset('immagini/osteopata_logo.png')}}" />
              <span class="opzionisingole">
                  Osteopati
              </span>

          </div>
          <section>
              <div id="ricerca">
                  <img src="{{asset('immagini/lente_logo.png')}}">
                  <input type="text" placeholder="cerca robe" id="input_barra"></input>
                  <button id="dentro_ricerca">
                      Cerca
                  </button>
              </div>
          </section>
          <section>
              <div id="inizio">
              
                  <span id="bebetter">
                      Hai sempre ammirato i migliori al mondo?<br>
                      <span id="bebetter_contenuto">
                          Ricevi una guida personalizzata
                          e forse lo <span id="OPLA"> Diventerai</span>
                      </span>
                  </span>
                  <button id="bottone">
                      Inizia!!
                  </button>

              </div>

          </section>

         


          <div class="spazio"></div>
          <section>
              <span class="intestazione">
                  I migliori Powerlifer di sempre
              </span>
              <div class="flex-container">

                  <img src="{{asset('immagini/powerlifter/1.jpg')}}" />
                  <img src="{{asset('immagini/powerlifter/2.webp')}}" />
                  <img src="{{asset('immagini/powerlifter/3.jpg')}}" />
                  <img src="{{asset('immagini/powerlifter/4.jpg')}}" />
              </div>
          </section>
          <div class="spazio"></div>
          <section>
              <span class="intestazione">
                  I migliori Weightlifter di sempre
              </span>
              <div class="flex-container">

                  <img src="{{asset('immagini/weightlifter/1.jpg')}}" />
                  <img src="{{asset('immagini/weightlifter/2.jpg')}}" />
                  <img src="{{asset('immagini/weightlifter/3.jpg')}}" />
                  <img src="{{asset('immagini/weightlifter/4.jpeg')}}" />
              </div>
          </section>

          <div class="spazio"></div>

          <section>
              <span class="intestazione">
                  I migliori Strongman di sempre
              </span>
              <div class="flex-container">

                  <img src="{{asset('immagini/strongman/1.jpg')}}" />
                  <img src="{{asset('immagini/strongman/2.jpg')}}" />
                  <img src="{{asset('immagini/strongman/3.jpg')}}" />
                  <img src="{{asset('immagini/strongman/4.jpg')}}" />


              </div>
          </section>
          <div class="spazio"></div>
          <section>
              <span class="intestazione">
                  I migliori Bodybuilder di sempre
              </span>
              <div class="flex-container">

                  <img src="{{asset('immagini/bodybuilder/1.png')}}" />
                  <img src="{{asset('immagini/bodybuilder/2.jpg')}}" />
                  <img src="{{asset('immagini/bodybuilder/3.jpg')}}" />
                  <img src="{{asset('immagini/bodybuilder/4.jpg')}}" />

              </div>
          </section>
          <div class="spazio"></div>

          <section>
              <div id="russi">
                  <span class="intestazione">
                      I Russi, BOH ???
                  </span>
                  <div class="flex-container">

                      <img src="{{asset('immagini/russi/1.png')}}" />
                      <img src="{{asset('immagini/russi/2.png')}}" />
                      <img src="{{asset('immagini/russi/3.png')}}" />
                      <img src="{{asset('immagini/russi/4.png')}}" />

                  </div>

              </div>
          </section>

              <div class="spazio"></div>
              <section>
                  <span class="intestazione">
                  I Calisthenici...
                  </span>
                  <div class="flex-container">

                      <img src="{{asset('immagini/calisthenici/1.webp')}}" />
                      <img src="{{asset('immagini/calisthenici/2.jpg')}}" />
                      <img src="{{asset('immagini/calisthenici/3.jpg')}}" />
                      <img src="{{asset('immagini/calisthenici/4.jpg')}}" />

                  </div>
              </section>

              <footer>
                  <div id="info_allenatori">
                      <span class="allenatore"> Coltivo disperazione</span>
                      <span class="cellulare">  1547895541</span> <br>
                      <span class="allenatore"> Mattia Piras</span>
                      <span class="cellulare"> 3849541277</span> <br >
                  </div>
              </footer>
      </article>
  </body>
</html>
