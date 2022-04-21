// ciclo while

// let counter = 10;

// while (counter < 10) {
//     console.log("sono nel ciclo while al giro " + counter);
//     counter = counter + 1;
// }


// const vocaleSegreta = 'u';

// while (true) {
//     const vocaleScelta = prompt("ciao bimbo giocoso, prova ad indovinare la vocale segreta");

//     const isVocaleSceltaUgualeAVocaleSegreta = vocaleScelta === vocaleSegreta;

//     if (isVocaleSceltaUgualeAVocaleSegreta) {
//         console.log("bravo bimbo, sei un campione!");
//         break;
//     } else {
//         console.log("bimbo asino, non sei proprio buono a niente!");
//     }
// }


// ciclo do...while

// let counter1 = 10;

// do {
//   console.log("sono nel ciclo do...while al giro " + counter1);
//   counter1 = counter1 + 1;
// } while (counter1 < 10);


// ciclo for



// for (let counter = 0; counter < 10; counter = counter + 1) {
//     console.log("sono nel ciclo for al giro " + counter);
// }


// for(let i = 0; i < 10; i++){
//     console.log("sono nel ciclo for al giro " + i);
// }

// scope delle variabili

// let pippo = 6;

// if (pippo < 10) {
//     console.log("ciao" + pippo);
// }

// let pippo = 6;

// if (pippo < 10) {
//     let pluto = 10;
//     if (pluto > 5) {
//        console.log(pluto) ;
//        let paperino = 20;
//     }
//     console.log(paperino);
// }

//cicli nei cicli

for (let riga = 1; riga < 4; riga++) {
    // console.log("sto leggendo la riga: " + riga);
    for (let colonna = 1; colonna < 4; colonna++) {
        // console.log("sto leggendo la colonna: " + colonna);
        console.log('sto leggendo la cella: ' + riga + ', ' + colonna)
    }
}


for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        // for(let k = 0; k < 4; k++){

        // }
    }
}