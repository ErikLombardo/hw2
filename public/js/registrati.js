const form = document.querySelector('form');
form.addEventListener('submit', controllo);

function controllo(event) {

    let validazione = true;


    if (
        form.nome.value.length == 0 ||
        form.cognome.value.length == 0 ||
        form.email.value.length == 0 ||
        form.genere.value.length == 0 ||
        form.nascita.value.length == 0 ||
        form.username.value.length == 0 ||
        form.tipo.value.length == 0 ||
        form.password.value.length == 0 ||
        form.password_confirm.value.length == 0
    ) {
        document.querySelector('#errore').innerText = 'Riempi tutti i campi';
        event.preventDefault();
        validazione = false;
    }
    let Pwd_coincidono = true;
    if (form.password.value != form.password_confirm.value) {
        document.querySelector('#errore').innerText = 'Le password non coincidono';
        event.preventDefault();
        Pwd_coincidono = false;
    }
    let password = form.password.value;
    let lunghezza = true;

    if (password.length < 8) {
        document.querySelector('#errore').innerText = 'La password deve essere lunga almeno 8 caratteri';
        event.preventDefault();
        lunghezza = false;
    }
    let caratteriSpeciali = "!@#$%^&*()_+-=[]{};:',.<>?";
    let carattere = false;
    for (var i = 0; i < password.length; i++) {
        // Controlla se il carattere corrente è un carattere speciale
        if (caratteriSpeciali.indexOf(password[i]) !== -1) {
            carattere = true;
            break;// Se è un carattere speciale, restituisci true
        }
    }

    if (carattere == false) {
        document.querySelector('#errore').innerText = 'La password deve contenere almeno un carattere speciale';
        event.preventDefault();
    }


    let cifre = "123456789";
    let cifra = false;
    for (var i = 0; i < password.length; i++) {
        // Controlla se il carattere corrente è una cufra
        if (cifre.indexOf(password[i]) !== -1) {
            cifra = true;
            break; // Se è una cifra, restituisci true
        }
    }

    if (cifra == false) {
        document.querySelector('#errore').innerText = 'La password deve contenere almeno una cifra';
        event.preventDefault();
    }


    if (validazione == true && Pwd_coincidono == true && lunghezza == true && carattere == true && cifra == true) {
        event.preventDefault();
        let form_data = new FormData(form);
        let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch("/Register", {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            },
            body: form_data
        }).then(OnResponse).then(VediErroreRegistrazione);
    }

}


function OnResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function VediErroreRegistrazione(json) {
    console.log(json);
    if (json.errore == "") {
        window.location.href = '/mhw1';
    } else {
        document.querySelector('#errore').innerText = json.errore;
    }

}
