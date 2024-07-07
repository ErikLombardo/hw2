function ShowCreateZone(event) {

    let creazione = document.querySelector('[data-id="creazione"]');
    creazione.classList.remove('hidden');
    const not_scrolling = document.querySelector('body');
    not_scrolling.classList.add('noscroll');
}


function HideCreateZone(event) {
    let delet = document.querySelector('[data-id="creazione"]');
    delet.classList.add('hidden');
    const not_scrolling = document.querySelector('body');
    not_scrolling.classList.remove('noscroll');
    let errore = document.querySelector('#no_values')
    if (!errore.classList.contains('hidden')) {
        errore.classList.add('hidden');

    }

}
const remove = document.querySelector('#remove');
remove.addEventListener('click', HideCreateZone);


function ShowOrNotContact(event) {
    let delet = event.target.closest('.NewAllenatore').querySelector('.info');

    if (delet.classList.contains('hidden')) {
        delet.classList.remove('hidden');

    } else {
        delet.classList.add('hidden');

    }

}

const Contacts = document.querySelectorAll('.contatta');
for (const contact of Contacts) {
    contact.addEventListener('click', ShowOrNotContact);
}




function NewTrainer(event) {
   
    var form = document.forms['NuovoAllenatore'];
    console.log(form);
    const file = document.querySelector("input[type=file]").files[0];
    if (form.nomeallenatore.value.length == 0 ||
        form.discipline.value.length == 0 ||
        form.descrizione.value.length == 0 ||
        form.trimestre.value.length == 0 ||
        form.semestre.value.length == 0 ||
        form.annuale.value.length == 0 ||
        form.email.value.length == 0 ||
        form.cellulare.value.length == 0 ||
        form.sede.value.length == 0 ||
        form.info.value.length == 0 ||
        !file
    ) {
        console.log("sono validazione");
        let errore = document.querySelector('#no_values');
        errore.innerText = "Riempi tutti i campi";
        if (errore.classList.contains('hidden')) {
            errore.classList.remove('hidden');
        }
        event.preventDefault();
    }
    else {
        event.preventDefault();
        let form_data = new FormData(form);
        form_data.append('logo', file);
        let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        fetch("/RegisterTrainer", {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            },
            body: form_data
        }).then(OnResponse).then(VediErrore);



    }

}


function VediErrore(json) {

    console.log(json);
    let err = document.querySelector('#no_values');
    err.innerText = json.messaggio;
    if (err.classList.contains('hidden')) {
        err.classList.remove('hidden');
    }
    if (err.textContent.trim() === '') {
        let nuovo = document.querySelector('[data-id="contenuto"]');
        nuovo.innerHTML = '';
        Visualizza_allenatori();
        HideCreateZone(event);
        Aggiungi(event);
        console.log("sono l'if");
    }

}

const submit = document.querySelector('#enter');
submit.addEventListener('click', NewTrainer);



function ShowModalContact(event) {
    /*creo le copie altrimenti non riuscirei ad aprire il bottone contatta dal cell due volte di fila*/
    let div = document.createElement('div');
    let divprincipale = div.cloneNode(true);
    let article = document.querySelector('article');
    article.classList.add('noscroll');
    divprincipale.classList.add('modal-view');
    let info1 = event.target.closest('.NewAllenatore').querySelector('.info');
    let info = info1.cloneNode(true);
    info.classList.remove('hidden');
    let img = document.createElement('img');
    img.src = '../immagini/littlex.png';
    img.addEventListener('click', chiudi);
    info.appendChild(img);
    divprincipale.appendChild(info);
    divprincipale.setAttribute("data-id", "rimuovi");
    let puntodoveaggiungere = event.target.closest('section');
    puntodoveaggiungere.insertAdjacentElement("afterend", divprincipale);


}


function chiudi(event) {
    let darimuovere = document.querySelector('[data-id="rimuovi"]');
    darimuovere.remove();
    let article = document.querySelector('article');
    article.classList.remove('noscroll');

}
const bottonicell = document.querySelectorAll('.contattacell');
for (const singolobotton of bottonicell) {
    singolobotton.addEventListener('click', ShowModalContact);
}
//api exercise.db

document.addEventListener('DOMContentLoaded', Visualizza_allenatori);


document.addEventListener('DOMContentLoaded', Aggiungi);

function Aggiungi(event) {
    console.log("SONO aggiungi");
    fetch("/CanAddTrainer").then(OnResponse).then(Risposta);

}

function Risposta(json){
    console.log(json);
   
    
    if (json.risposta === true) {
        let aggiunta = document.querySelector('#aggiungi');
        let nuovo = document.createElement('input');
        nuovo.type = "image";
        nuovo.src = "../immagini/aggiungi.png";
        nuovo.id = "add";
        aggiunta.append(nuovo);
        let bord = document.querySelector('#border');
        if (bord) {
            bord.id = "";
        }
        nuovo.addEventListener('click', ShowCreateZone);
    }

    if (json.risposta === false) {
        let add = document.querySelector('#add');
        console.log("sono false");
        console.log(add);
        if (add) {
            add.remove();
        }
    }


}

function Visualizza_allenatori(event) {
    fetch("/GetAllenatori").then(OnResponse).then(Visualizza_allenatore);


}

function Visualizza_allenatore(json) {
    console.log(json);


    for (let element of json) {
        let div = document.createElement('div');
        div.classList.add("NewAllenatore", "withspace");
        div.innerHTML = `
                       <img src="${element.logo}">
                        <div class="intestazione"> <span class="nomeallenatore">${element.nomeallenatore} </span>  </div> <button class="contatta"> Contatta </button> <button class="contattacell"> Contatta </button>
                        <div class="discipline"> <span class="disciplineallenatore">${element.discipline} </span></div>
                        <div class="descrizione">${element.descrizione} </br> </div>
        <div class="tariffe">
            <span class="cadenza"> trimestre:       </span><span class="tariffa"> ${element.trimestre} </span></br ></br >
                            <span class="cadenza">semestre:     </span> <span class="tariffa">  ${element.semestre} </span></br ></br >
                            <span class="cadenza"> annuale:     </span>  <span class="tariffa"> ${element.annuale} </span></br >
                        </div >


                       <div class="info hidden">
                            <div>
                                <span> Email: ${element.email} </span></br>
                                <span>Cellulare:${element.cellulare} </span></br >
                                <span> Sede: ${element.sede} </span></br>
                                <div class="other_info">
                                  ${element.info}

                                </div>
                            </div>
                        </div>
         `;
        const nuovobottone = div.querySelector('.contatta');
        nuovobottone.addEventListener('click', ShowOrNotContact);
        const nuovobottonecell = div.querySelector('.contattacell');
        nuovobottonecell.addEventListener('click', ShowModalContact);
      
        var lastone = document.querySelector('[data-id="contenuto"]');
        lastone.appendChild(div);
        

    }


}

function OnResponse(response) {
    console.log("response");
    console.log("sono response");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}


const FormRicerca = document.forms['Ricerca'];
FormRicerca.addEventListener("submit", GestisciRicerca);

function GestisciRicerca(event) {

    let argomento = FormRicerca.WhatToSearch.value;
    const nuovo = document.querySelector('[data-id="contenuto"]');
    event.preventDefault();
    nuovo.innerHTML = '';
    if (argomento.length != 0) {
        fetch("Ricerca?Ricerca=" + argomento).then(OnResponse).then(Visualizza_allenatore);
    } else {
        Visualizza_allenatori();
    }

}
