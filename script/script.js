/*
    1. chiedo all' utente il livello del gioco
    2. definisco una funzione che generi dei numeri casuali
    3. definisco una funzione che generei dei quadrati
    4. se l'utente sceglie il lvl 1, stamperò 100 quadratini, lvl2, 81 quadratini e lvl3, 79 quadratini
    5. definisco un evento che al click renda il quadratino di un altro colore
*/

let livello = parseInt(prompt("Inserisci il livello che vuoi giocare: 1, 2 o 3"));
let container = document.querySelector(".container");

if(livello === 1){

    let numeri = bombGenerator();
    console.log(numeri);

    for(let i = 0; i < 100; i++){
        let square = squareGenerator("div","lvl1");
        container.appendChild(square);
        square.addEventListener("click",function(){

            let numero = [i+1];
            square.innerHTML = numero;
            square.classList.add("colore");
            
            var numeroCliccato = parseInt(document.getElementsByClassName("lvl1")[i].textContent);
            let trovato = numeri.includes(numeroCliccato);

            if(trovato){
                console.log("trovato", numeroCliccato);
            }else{
                console.log("non trovato", numeroCliccato);
            }
        });
    }

}else if(livello === 2){
    
    for(let i = 0; i < 81; i++){

        let square = squareGenerator("div","lvl2");
        container.appendChild(square);
        square.addEventListener("click",function(){
            square.innerHTML = [i+1];
            square.classList.add("colore");
        });
    }

}else if(livello === 3){

    for(let i = 0; i < 49; i++){
        let square = squareGenerator("div","lvl3");
        container.appendChild(square);
        square.addEventListener("click",function(){
            square.innerHTML = [i+1];
            square.classList.add("colore");
        });
    }

}

// funzioni
function squareGenerator(squareGen, classAdd){
    let node = document.createElement(squareGen);
    node.classList.add(classAdd);
    return node;
}

function bombGenerator(){
    
    let numeri = [];

    while (numeri.length < 16) {
        
        const numero = Math.floor(Math.random() * 100 + 1);

        if (!(numeri.includes(numero))){
            numeri.push(numero);
        }
    }
    return numeri;
}