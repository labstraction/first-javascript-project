//scrivere un ciclo for che scriva a console i numeri da 10 a 50

// for (let i = 10; i < 51; i++) {
//   console.log("il valore di i: " + i);
// }

//scrivere un ciclo for che scriva a console i numeri pari da 8 a 128

// for (let i = 8; i < 129; i = i + 1) {
//   if (i % 2 === 0) {
//     console.log("il valore di i: " + i);
//   }
// }

// for (let i = 8; i < 129; i = i + 2) {
//   console.log("il valore di i: " + i);
// }

//scrivere un ciclo for che scriva a console i numeri da 100 a 0

// for (i = 100; i > -1; i = i - 1) {
//   console.log("il valore di i: " + i);
// }

//scrivere un ciclo for che sommi i numeri da 0 a 100

// let risultato = 0;

// for (let i = 0; i < 101; i++) {
//     // console.log("risultato prima della somma " + risultato);
//     // console.log("i " + i);
//     risultato = risultato + i;
//     // console.log("risultato dopo la somma " + risultato);
//     // console.log("----------------------------------------------");
// }

// console.log("il risultato finale è: " + risultato)

//ripetere gli stessi esercizi con il ciclo while e do...while

// let counter = 10

// while (counter <  51) {
//     console.log(counter);
//     counter++;
// }

// let counter1 = 10;

// do {
//     console.log(counter1)
//     counter1++
// } while (counter1 <= 50);

// _______________________________________________

// let counter = 8

// while (counter < 129) {
//     console.log(counter);
//     counter = counter + 2;
// }

// let counter1 = 8;

// do {
//     console.log(counter1);
//     counter1 = counter1 + 2
// } while (counter1 < 129);

// _______________________________________________

// let counter = 101;

// while (counter > 0) {
//   counter--;
//   console.log(counter);
// }

// let counter1 = 100;

// while (counter > -1) {
//   console.log(counter);
//   counter--;
// }

// let counter2 = 101;

// do {
//   counter2 = counter2 - 1;
//   console.log(counter2)
// } while (counter2 > 0);


// let counter3 = 100;

// do {
//   console.log(counter3);
//   counter3 = counter3 - 1;
// } while (counter3 > -1);

// ________________________________________________

// let result = 0;
// let counter = 1;

// while (counter <= 100) {
//   // result += counter;
//   result = result + counter;
//   counter++;
// }

// console.log(result);


// let result1 = 0;
// let counter1 = 1;

// do {
//   result1 += counter1;
//   counter1++;
// } while (counter1 <= 100);

// console.log(result1);

// _________________________________________________

//scivere un ciclo while che si interrompa quando l'utente scrive 'esci'
//nella finestra di dialogo



while(prompt('scrivi "esci" per uscire dal ciclo')!=='esci'){}


while (true) {
  let exit = prompt('inserire "esci":');
  if (exit === 'esci') {
    break;
  }
}
