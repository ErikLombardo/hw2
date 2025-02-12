const bodyparts=document.querySelectorAll('.bodypart');
for (const bodypart of bodyparts){
    bodypart.addEventListener('click', esercizi);
}


function OnResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function esercizi(event){
   const id = event.target.dataset.id;
    fetch('Esercizi?id='+id ).then(OnResponse).then(onJson).catch(error => {
        console.error(error);
    });

}
/*
bodyPart:"back"
equipment:"cable"
gifUrl:"https://v2.exercisedb.io/image/I4XMjCBFhqaGoJ"
id:"0007"
name:"alternate lateral pulldown"
target:"lats"



*/


function onJson(json){
    console.log(json);
    const flex_container=document.querySelector('.flex-container-esercizi');
   
flex_container.innerHTML='';
const esercizio=json;


for (var i=0; i<12; i+=4){
    const div_interno=document.createElement('div');
    div_interno.classList.add('gruppo');
    for (var j=0;j<4;j++){
const toshow= document.createElement('div');
toshow.classList.add('elemento');
const muscles=document.createElement('span');
muscles.classList.add('secondari');
if(j==1 || j==2 || j==3){
    const toshowspace=document.createElement('div');
    toshowspace.classList.add('space');
   
        toshow.innerHTML=`
<img  src=${esercizio[i+j].gifUrl}> 
<span class='nome' > ${esercizio[i+j].name} </span>
`;
muscles.textContent= 'Secondary muscles: ' + esercizio[i + j].secondaryMuscles.join(', ');
toshow.appendChild(muscles);
for (let n=0; n<esercizio[i+j].instructions.length; n++){
    const istruzione=document.createElement('div');

    istruzione.innerText=n+': '+ esercizio[i+j].instructions[n];
    istruzione.classList.add('istruzione');
    if(n!=0) 
        istruzione.classList.add('hidden');
    istruzione.dataset.id=n;
    toshow.appendChild(istruzione);
    }

    const frecciaavanti=document.createElement('img');
    frecciaavanti.classList.add('avanti');
    frecciaavanti.addEventListener('click',avanti);
    frecciaavanti.src ='../immagini/frecciaavanti.png';
    toshow.appendChild(frecciaavanti);
    const frecciaindietro=document.createElement('img');
    frecciaindietro.classList.add('indietro');
    frecciaindietro.addEventListener('click',indietro);
    frecciaindietro.src ='../immagini/frecciaindietro.png';
    toshow.appendChild(frecciaindietro);
div_interno.appendChild(toshowspace);
    div_interno.appendChild(toshow);
} else  {
toshow.innerHTML=`
<img  src=${esercizio[i+j].gifUrl}> 
<span class='nome' > ${esercizio[i+j].name} </span>
`;
muscles.textContent= 'Secondary muscles: ' + esercizio[i + j].secondaryMuscles.join(', ');
toshow.appendChild(muscles);
for (let n=0; n<esercizio[i+j].instructions.length; n++){
    const istruzione=document.createElement('div');
    istruzione.innerText=n+': '+esercizio[i+j].instructions[n];
    istruzione.classList.add('istruzione');
    if(n!=0) 
        istruzione.classList.add('hidden');
    istruzione.dataset.id=n;
    toshow.appendChild(istruzione);
    }
    const frecciaavanti=document.createElement('img');
    frecciaavanti.classList.add('avanti');
    frecciaavanti.addEventListener('click',avanti);
    frecciaavanti.src ='../immagini/frecciaavanti.png';
    toshow.appendChild(frecciaavanti);
    const frecciaindietro=document.createElement('img');
    frecciaindietro.classList.add('indietro');
    frecciaindietro.addEventListener('click', indietro);
    frecciaindietro.src ='../immagini/frecciaindietro.png';
    toshow.appendChild(frecciaindietro);
     
    div_interno.appendChild(toshow);
}
    }
    
flex_container.append(div_interno);
}
traduci(flex_container.innerHTML);

}

const freccia=document.querySelector("input[type=image]");
freccia.addEventListener('click', options)


function options(event){
let opzioni=document.querySelector('#target');
let freccia=event.target;
let bordo=document.querySelector('#scegli');

if (opzioni.classList.contains('hidden'))  {
    freccia.src ='../immagini/frecciasu.png';
opzioni.classList.remove('hidden');
bordo.classList.remove('bord');

}   else {
    freccia.src ='../immagini/freccia.png';
  opzioni.classList.add('hidden');
  bordo.classList.add('bord');


}  

}

function avanti(event){

    //mi riferisco solo all'elemento che ha scatenato l'evento e in particolare all'istruzione che non e' hidden ovvero quella corrente
    let  current=event.target.closest('.elemento').querySelector('.istruzione:not(.hidden)');
let next=current.nextElementSibling;
if (next && next.classList.contains('istruzione')){
next.classList.remove('hidden');
current.classList.add('hidden');

}
}

function indietro(event){
     //mi riferisco solo all'elemento che ha scatenato l'evento e in particolare all'istruzione che non e' hidden ovvero quella corrente
     let current=event.target.closest('.elemento').querySelector('.istruzione:not(.hidden)');
     let previous=current.previousElementSibling;
     if (previous && previous.classList.contains('istruzione')){
     previous.classList.remove('hidden');
     current.classList.add('hidden');
     
     }
     }


     function traduci (documento){
        
         let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
         let data = {
             html: documento
         };
         

         fetch("/Traduzione", {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'X-CSRF-TOKEN': csrfToken
             },
             body: JSON.stringify(data)
         }).then(OnResponse).then(onJson2).catch(error => {
             console.error(error);  
         });
        
     }

     function onJson2(json){
         console.log(json);
        let documento=document.querySelector('.flex-container-esercizi');
        documento.innerHTML=json.trans;
        //una volta tradotto ho perso gli event listener quindi devo ripristinarli.
        const avantivett=document.querySelectorAll('img.avanti');
        for (const avantifreccia of avantivett){
         avantifreccia.addEventListener('click', avanti);

        }
        const indietrovett=document.querySelectorAll('img.indietro');
        for (const indietrofreccia of indietrovett){
            indietrofreccia.addEventListener('click', indietro);
        }

     }

     //una volta tradotto ho perso gli event listener quindi devo ripristinarli.
