/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
//dichiaro le variabili legate ai numeri scelti dall'utente e dal computer
var userChoice = prompt("Scegli un numero compreso tra 1 e 5");
var userNumber = parseInt(userChoice);
var randomNumber

if (userNumber > 5) {
    alert("Il numero scelto è troppo alto")
}
//creo una funzione che mi consenta di ottenere un numero random
function getRandomNumber(num) {
    num = Math.floor(Math.random() * (5 - 0) + 1);

    return num;
}
//creo una variabile che stampi il numero random generato dalla funzione
var computerNumber = getRandomNumber(randomNumber);

console.log(userNumber);
console.log(computerNumber);

var total = userNumber + computerNumber;
console.log(total);
function getEvenOdd(tot, even, odd) {
    if (tot % 2 === 0) {
        return even;
    } else if (tot % 2 !== 0) {
        return odd
    }
}

var pari = "pari";
var dispari = "dispari";
var evenOdd = getEvenOdd(total, pari, dispari)

console.log(evenOdd);

var userBet = prompt("Digita pari o dispari")
userBet = userBet.toLowerCase()

if ((userBet !== pari) || (userBet !== dispari)) {
    alert("La scelta effettuata non è scritta correttamente")
}
console.log(userBet)

if (userBet === evenOdd) {
    console.log("Il risultato è " + evenOdd + ", l'utente vince!")
} else {
    console.log("Il risultato è " + evenOdd + ", vince il computer")
}