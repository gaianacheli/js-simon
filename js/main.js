//generare 5 numeri casuali in un alert()
//timer 30 secondi
//promt()
//dichiarare quanti e quali numeri sono stati indovinati
let numeriRandom = [];
let numeriUser = [];
let numCasuale;
let numPromt;


for (let i = 0; i < 5; i++){
    numCasuale = Math.round(Math.random() * 100);
    console.log(numCasuale);
    numeriRandom.push(numCasuale);
}

alert('Memorizza questi 5 numeri: ' + numeriRandom)