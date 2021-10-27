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
    numeriRandom.push(numCasuale);
   
}
 console.log(numeriRandom);
alert('Memorizza questi 5 numeri: ' + numeriRandom)


 setTimeout(function(){ 
     for(let i = 0; i < 5; i++){
        numPromt = parseInt(prompt('Inserisci i numeri che  ricordi'));
            if(numPromt == numeriRandom[i]){
                numeriUser.push(numPromt)
            }
     }
     alert("Hai indovinato " + numeriUser.length + " numeri. I numeri che hai indovinato: " + numeriUser)
    }, 30000);
 
