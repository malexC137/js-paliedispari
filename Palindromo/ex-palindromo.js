/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/
//Dichiaro una variabile legata alla parola che digiterà l'utente
var word = prompt("Inserisci una parola palindroma")
word = word.toLowerCase()

/*Creo una funzione che mi consenta di stampare la parola al contrario*/
function reverseString(str) {
    //trasformo la stringa inserita dall'utente in una array col metodo split
    var splitWord = str.split("");
    //inverto l'ordine degli elementi dell'array creata
    var reverseWord = splitWord.reverse();
    //trasformo la mia array in una stringa
    var joinWord = reverseWord.join("");

    return joinWord;
}
//Applico la funzione alla parola inserita dall'utente
var reversedWord = reverseString(word);
console.log(reversedWord);

//Stabilisco le condizioni che la parola inserita deve rispettare per essere considerata palindroma
if (word === reversedWord) {
    console.log("YES!La parola inserita è palindroma");
} else {
    console.log("NO!La parola inserita non è palindroma!");
}

