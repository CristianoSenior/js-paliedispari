// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

var parolaUtente = document.getElementById("parola");

var bottoneEsegui = document.getElementById("esegui");

bottoneEsegui.addEventListener("click",
function(){
// leggo la parola
var parola = parolaUtente.value;
console.log(parola);
var nuova = parola.split("");
console.log(nuova);
//giro la parola (cercare)
nuova= nuova.reverse();
console.log(nuova);
// la riunisco
nuova= nuova.join("");
console.log(nuova);

// var palindromaForse = "palindroma";
// paragonare le due parole
// se sono uguali ...
if ( nuova == parola ) {
  console.log("palindroma");
    // se sono diverse
}else {
  console.log("non palindroma");
}
}
)
