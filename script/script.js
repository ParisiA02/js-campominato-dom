/*
    1. chiedo all' utente il livello del gioco
    2. definisco una funzione che generei dei quadrati
    3. se l'utente sceglie il lvl 1, stamperò 100 quadratini, lvl2, 81 quadratini e lvl3, 79 quadratini
    4. definisco un evento che al click renda il quadratino di un altro colore
    5. definisco una funzione che generi 16 numeri senza duplicati
    6. confronto il numero generato casualmente con quello assegnato al quadratino
        6.1 se è presente nell' array stampo in pagina che l'utente ha perso
    7. gestisco la possibilà di cliccare più volte lo stesso bottone con un contatore che genera un altert quando il click è > 1
*/

let livello = parseInt(prompt("Inserisci il livello che vuoi giocare: 1, 2 o 3"));
let container = document.querySelector(".container");
let punteggio = 0;

if(livello === 1){

    let numeri = bombGenerator(100);
    console.log(numeri);

    for(let i = 0; i < 100; i++){
        let click = 0;
        let square = squareGenerator("div","lvl1");
        container.appendChild(square);

        square.addEventListener("click",function(){

            if(click < 1){

                let numero = [i+1];
                square.innerHTML = numero;
                let numeroCliccato = parseInt(document.getElementsByClassName("lvl1")[i].textContent);
                let trovato = numeri.includes(numeroCliccato);

                if(trovato){
                    square.classList.add("bomb");
                    console.log("HAI PERSO!");
                }else{
                    square.classList.add("safe");
                    punteggio += 1;
                    console.log("il tuo punteggio è", punteggio);                
                }
                click += 1;
            }else{
                alert("pulsante già cliccato");
            }
        });
    }

}else if(livello === 2){

    let numeri = bombGenerator(81);
    console.log(numeri);

    for(let i = 0; i < 81; i++){
        let click = 0;
        let square = squareGenerator("div","lvl2");
        container.appendChild(square);
        square.addEventListener("click",function(){

            if(click < 1){
                
                let numero = [i+1];
                square.innerHTML = numero;
                let numeroCliccato = parseInt(document.getElementsByClassName("lvl2")[i].textContent);
                let trovato = numeri.includes(numeroCliccato);

                if(trovato){
                    square.classList.add("bomb");
                    console.log("HAI PERSO!");
                }else{
                    square.classList.add("safe");
                    punteggio += 1;
                    console.log("il tuo punteggio è", punteggio);
                }

                click += 1;

            }else{
                alert("pulsante già cliccato");
            }
        });
    }

}else if(livello === 3){

    let numeri = bombGenerator(49);
    console.log(numeri);
    for(let i = 0; i < 49; i++){
        let click = 0;
        let square = squareGenerator("div","lvl3");
        container.appendChild(square);
        square.addEventListener("click",function(){

            if(click < 1){
                let numero = [i+1];
                square.innerHTML = numero;
                let numeroCliccato = parseInt(document.getElementsByClassName("lvl3")[i].textContent);
                let trovato = numeri.includes(numeroCliccato);

                if(trovato){
                    square.classList.add("bomb");
                    console.log("HAI PERSO!");
                }else{
                    square.classList.add("safe");
                    punteggio += 1;
                    console.log("il tuo punteggio è", punteggio);
                }

                click += 1;

            }else{
                alert("pulsante già cliccato");
            }
        });
    }
}

// funzioni
function squareGenerator(squareGen, classAdd){
    let node = document.createElement(squareGen);
    node.classList.add(classAdd);
    return node;
}

function bombGenerator(num){
    let numeri = [];
    while (numeri.length < 16) {
        const numero = Math.floor(Math.random() * num + 1);

        if (!(numeri.includes(numero))){
            numeri.push(numero);
        }
    }
    return numeri;
}