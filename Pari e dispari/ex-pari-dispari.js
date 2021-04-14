/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//dichiaro le variabili legate alla scelta dell'utente
var userBet = prompt("Digita pari o dispari")
userBet = userBet.toLowerCase();
var pari = "pari";
var dispari = "dispari";
//creo una funzione per gestire gli alert relativi alla scelta pari o dispari dell'utente
function getUserBet (bet, even, odd) {
    while ((bet != even) && (bet != odd)) {
        alert("La scelta effettuata non è scritta correttamente, digita 'pari' o 'dispari' prestando attenzione nel digitarle correttamente")
        bet = prompt("Digita 'pari' o 'dispari'");
    }
}

//dichiaro una variabile che consenta di ottenere la scelta corretta dell'utente
var getUserBet = getUserBet(userBet, pari, dispari);

function getComputerBet (user, even, odd) {
    if (user === even) {
        return odd;
    } else if (user === odd) {
        return even;
    }
}
var computerBet = getComputerBet(userBet, pari, dispari)

document.getElementById("user-bet").innerHTML = userBet;
console.log(userBet);
document.getElementById("computer-bet").innerHTML = computerBet;
console.log(computerBet);

//dichiaro le variabili legate alla scelta del numero da parte dell'utente
var maxNum = 5;
var userChoice = prompt("Scegli un numero compreso tra 1 e 5");
var userNumber = parseInt(userChoice);
function getUserChoice (choice, numMax) {
    while (choice > numMax) {
        alert("Il numero scelto è troppo alto");
        choice = prompt("Scegli un numero compreso tra 1 e 5");
    }
}

document.getElementById("user-number").innerHTML = userNumber;
console.log(userNumber);


//dichiaro una variabile che consenta di ottenere la scelta corretta del numero da parte dell'utente
var getUserChoice = getUserChoice(userChoice, maxNum);

//creo una funzione che mi consenta di ottenere un numero random da attribuire alla scelta del computer
function getRandomNumber(num) {
    num = Math.floor(Math.random() * (5 - 0) + 1);

    return num;
}

//dichiaro una variabile che stampi il numero random generato dalla funzione
var randomNumber
var computerNumber = getRandomNumber(randomNumber);

document.getElementById("computer-number").innerHTML = computerNumber; 
console.log(computerNumber);

//creo una funzione che consenta di stabilire se la variabile precedentemente creata sia pari oppure dispari
function getEvenOdd(tot, even, odd) {
    if (tot % 2 === 0) {
        return even;
    } else if (tot % 2 !== 0) {
        return odd
    }
}

//dichiaro delle variabili necessarie per ottenere il calcolo della funzione
var total = userNumber + computerNumber;
var evenOdd = getEvenOdd(total, pari, dispari)
console.log(evenOdd);
document.getElementById("number-outcome").innerHTML = total; 
console.log(total);


//imposto le condizioni che il programma deve rispettare per stabilire chi sia il vincitore
if (userBet === evenOdd) {
    console.log("Il risultato è " + evenOdd + ", l'utente vince!")
    document.getElementById("ex-outcome").innerHTML = "Il risultato è " + evenOdd + ", l'utente vince!"; 
} else {
    console.log("Il risultato è " + evenOdd + ", vince il computer")
    document.getElementById("ex-outcome").innerHTML = "Il risultato è " + evenOdd + ", vince il computer!"; 
} 








