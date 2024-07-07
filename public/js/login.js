

function login(event) {
	let noscroll = document.querySelector('body');
	noscroll.classList.add('noscroll');
	let creazione = document.querySelector('article');
	let modale = document.createElement('div');
	modale.classList.add('modalview');
	let logindiv = document.createElement('div');
	logindiv.id = 'login';
	logindiv.innerHTML = `
	 <img src="../login/login gnomo.jpeg">
<img src="../login/x.png" id="close">
     <form name="login" method="POST" id="credenziali">
<div id="contenuto">
<img src="../login/exit.png" id="closecell">
<span id="Ghisa"> Pronto a dare il via alla tua trasformazione?
</br> Accedi ora!!! Primo accesso? <a href="registrati">Registrati</a></br></br> </span>
<div id="errore">
</div>
<span class="Username"> Username </span>
<input type="text" name="username" class="Username">
<span class="Password"> Password </span>
<input type="password" name="password"  class="Password"> 
<span class="Smemorato"> hai dimenticato la tua password? </span>
<img id="send" src="../login/submit.png">
</form>
</div>
`;

   

   

	modale.appendChild(logindiv);
	creazione.insertAdjacentElement("afterbegin", modale);
	let eliminacell = logindiv.querySelector('#closecell');
	let elimina = logindiv.querySelector('#close');
	eliminacell.addEventListener('click', hide);
	elimina.addEventListener('click', hide);
	let err = document.querySelector('#send');
	err.addEventListener('click', risultato);
	
}




function OnResponse(response) {
    console.log(response);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
}

 function risultato(event) {
     console.log("sono risultato");
   
	let form = document.querySelector('form');
	let form_data = new FormData(form);
     let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
     fetch('/Accesso', {
         method: 'POST',
         headers: {
             'X-CSRF-TOKEN': csrfToken
         },
         body: form_data
     }).then(OnResponse).then(Errore);
    
}

function Errore(json) {
	console.log(json);
	if (json == true) {

		window.location.href = '/mhw1'; //cambia la location su javascript
	} else {
		document.querySelector('#errore').innerText = 'Credenziali non valide.';
	}

}


function hide(event) {

	let kill = document.querySelector('.modalview');
	kill.remove();
	let noscroll = document.querySelector('body');
	noscroll.classList.remove('noscroll');
}





function Opzioni(event) {
	let access = document.querySelector('.Login_options_group');
	let options=access.querySelector('div');
	if (options.classList.contains("hidden")) {
		options.classList.remove("hidden");
	} else {
		options.classList.add("hidden");
	}
}




function logout(event) {
	
	fetch("/Logout").then(LoggedOut);
}

function LoggedOut(response) {
	if (response.ok) {
		window.location.href = "index.php";
    }
}

document.addEventListener('DOMContentLoaded', DisplayAccesso);

function DisplayAccesso(event) {

	fetch("/IsLogged").then(OnResponse).then(Display);
}

function Display(json) {
	console.log(json);
	let container = document.querySelector('#container_accesso');
	if (json.messaggio == "accedi") {
		let button = document.createElement('button');
		button.id = "accesso";
		button.innerText = 'Accedi';
		container.append(button);
		button.addEventListener('click', login);

	} else if (json.messaggio == "atleta") {
		let img = document.createElement('img');
		img.src = "../immagini/atleta.png";
		let div = document.createElement('div');
		div.classList.add("Login_options_group", "colore_atleta");
		let utente = document.createElement('span');
		utente.id = "utente";
		utente.innerText = json.username;
		let div2 = document.createElement('div');
		div2.classList.add("hidden");
		let span = document.createElement('span');
		let span1 = document.createElement('span');
		let span2 = document.createElement('span');
		span.classList.add("login_options");
		span1.classList.add("login_options");
		span2.classList.add("login_options");
		span.innerText = "Profilo";
		let br = document.createElement('br');
		span.append(br);
		span1.innerText = "La mia scheda";
		let br1 = document.createElement('br');
		span1.append(br1);
		span2.innerText = "Logout";
		let br2 = document.createElement('br');
		span2.append(br2);
		div2.append(span);
		div2.append(span1);
		div2.append(span2);
		div.append(utente);
		div.append(div2);
		container.append(img);
		container.append(div);
		div.addEventListener("mouseenter", Opzioni);
		div.addEventListener("mouseleave", Opzioni);
		span2.addEventListener("click", logout);
	} else if (json.messaggio == "allenatore") {
		let img = document.createElement('img');
        img.src = "../immagini/allenatore.png";
		let div = document.createElement('div');
		div.classList.add("Login_options_group", "colore_allenatore");
		let utente = document.createElement('span');
		utente.id = "utente";
		utente.innerText = json.username;
		let div2 = document.createElement('div');
		div2.classList.add("hidden");
		let span = document.createElement('span');
		let span1 = document.createElement('span');
		let span2 = document.createElement('span');
		span.classList.add("login_options");
		span1.classList.add("login_options");
		span2.classList.add("login_options");
		span.innerText = "Profilo";
		let br = document.createElement('br');
		span.append(br);
		span1.innerText = "I miei atleti";
		let br1 = document.createElement('br');
		span1.append(br1);
		span2.innerText = "Logout";
		let br2 = document.createElement('br');
		span2.append(br2);
		div2.append(span);
		div2.append(span1);
		div2.append(span2);
		div.append(utente);
		div.append(div2);
		container.append(img);
		container.append(div);
		div.addEventListener("mouseenter", Opzioni);
		div.addEventListener("mouseleave", Opzioni);
		span2.addEventListener("click", logout);
	}


}
