/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]



let inputLavoro = document.getElementById("first")
let inputLuogo = document.getElementById("second")
let counterFinale = 0


function finale(inputLavoro, inputLuogo) {

  // scrivo 4 variabili, 2 per gli input, 2 per gli array, per salvare le ricerche;
  let arrayLavoro = [] //qui ci salverò il nome del lavoro
  let arrayLuogo = [] // qui ci salverò il nome del luogo
  let luogo = inputLuogo.value.toLowerCase() // questa variabile serve a prendere il dato con il suo valore , minuscolo;
  let lavoro = inputLavoro.value.toLowerCase() //questa variabile serve a prendere il dato con il suo valore , minuscolo;
  let lista = document.getElementById("lista") //vado a richiamare l'ID "lista" all'interno della variabile lista;
  let nuovaLista = ""

  for (let i = 0; i < jobs.length; i++) {

    let ciclo = jobs[i] // il ciclo "for" inizia con una variabile che contiene tutti gli oggetto chiave - valore dell'array;


    if (ciclo.title.toLowerCase().includes(lavoro) && ciclo.location.toLowerCase().includes(luogo)) {
      //sopra enuncio la condizione "if" e nel primo caso dico "se il titolo lavorativo minuscolo dell'array jobs, contenuto nella variabile ciclo, include ciò che immettiamo nell'input lavoro" allora ...
      //sopra enuncio la condizione "if" e nel primo caso dico "se il luogo lavorativo minuscolo dell'array jobs, contenuto nella variabile ciclo, include ciò che immettiamo nell'input luogo" allora ...


      arrayLuogo.push(ciclo.location) //con questo comando dico di immettere nell"arrayLuogo", vuoto, tutti i luoghi di lavoro dell'array jobs; 
      arrayLavoro.push(ciclo.title) //con questo comando dico di immettere nell"arrayLuogo", vuoto, tutti i titoli lavorativi dell'array jobs;
      counterFinale++ // se la condizone "if" è verificata, il counterFinale somma ++
      console.log(arrayLuogo);
      console.log(arrayLavoro);


      nuovaLista = document.createElement("li") //dico di creare un elemento "li" all'interno del documento HTML, e racchiudo il comando all'interno della variabile nuovaLista;
      nuovaLista.innerHTML = "Titolo di Lavoro" + ":" + " " + arrayLavoro + "<br>" + "Luogo di Lavoro" + ":" + " " + arrayLuogo;
      //questa serie di azioni deve andare in nuovaLista all'interno del HTML e scrivere il testo sopra riportato, aggiungendo spazi e le due variabili arrayLavoro e arrayLuogo;
      lista.appendChild(nuovaLista);  //con questo comando all'ID "lista" aggiungo "come figlio" nuovaLista;

      console.log(nuovaLista);

    }


  }


  if ("".includes(lavoro) && "".includes(luogo)) {

    //enuncio la condizione "if", e dico "se nell'input lavoro non è contenuto alcun testo allora ..."
    //enuncio la condizione "if", e dico "se nell'input luogo non è contenuto alcun testo allora ..."

    let lista = document.getElementById("lista") //vado a richiamare l'ID "lista" all'interno della variabile lista;

    counterFinale = 0;
    lista.innerHTML = "Ricerca nulla, riprova!"
    lista.style.color = "red";
    lista.style.fontWeight = "large";

  }

  let counter = document.getElementById("counter");//vado a richiamare l'ID "counter" all'interno della variabile counter;
  counter.value = counterFinale //il valore di counter è uguale a counterFinale;

}


inputLavoro.addEventListener("click", x1)

function x1() {

  document.getElementById("first").value = ""

  svuotaLista = document.getElementById("lista")
  svuotaLista.innerHTML = ""
  counterFinale = 0

  let counter = document.getElementById("counter");//vado a richiamare l'ID "counter" all'interno della variabile counter;
  counter.value = counterFinale
}



inputLuogo.addEventListener("click", x2)

function x2() {

  document.getElementById("second").value = ""

  svuotaLista = document.getElementById("lista")
  svuotaLista.innerHTML = ""
  counterFinale = 0

  let counter = document.getElementById("counter");//vado a richiamare l'ID "counter" all'interno della variabile counter;
  counter.value = counterFinale
}

