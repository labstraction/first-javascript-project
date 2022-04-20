// CONDIZIONALI (IF)

// const numeroInStringa = prompt("inserisci il numero");

// const numero = parseFloat(numeroInStringa);

// const isEven = numero % 2 === 0;

// const isOdd = numero % 2 === 1;


// if (isEven) {
//     console.log("il numero è pari");
// } else if (isOdd){
//     console.log("il numero è dispari");
// } else {
//     console.log("il numero non è ne pari ne dispari");
// }


 
// if (isEven) {
//     console.log("il numero è pari");
// } else {
//     console.log("il numero è dispari")
// }


//CALCOLATRICE

// const primoNumeroInStringa = prompt("inserisci il primo numero")

// const primoNumero = parseFloat(primoNumeroInStringa);

// const secondoNumeroInStringa = prompt("inserisci il secondo numero")

// const secondoNumero = parseFloat(secondoNumeroInStringa);

// const operazione = prompt("inserisci l'operazione, puoi inserire: '+', '-', 'x', ':'");

// const isAddizione = operazione === "+";

// const isSottrazione = operazione === "-";

// const isMoltiplicazione = operazione === "x";

// const isDivisione = operazione === ":";

// if (isAddizione) {
//     const risultato = primoNumero + secondoNumero;
//     console.log("risultato: " + risultato);
// } else if(isSottrazione){
//     const risultato = primoNumero - secondoNumero;
//     console.log("risultato: " + risultato);
// } else if (isMoltiplicazione) {
//     const risultato = primoNumero * secondoNumero;
//     console.log("risultato: " + risultato);
// } else if(isDivisione){
//     const risultato = primoNumero / secondoNumero;
//     console.log("risultato: " + risultato);
// } else {
//     console.log("operazione non ammessa")
// }



const numero = 6;

const isDivisibilePerDue = numero % 2 === 0;

const isDivisibilePerTre = numero % 3 === 0;

const isDivisibilePerQuattro = numero % 4 === 0;


// if (isDivisibilePerDue) {
//   console.log("il numero è divisibile per 2");
// } else if (isDivisibilePerTre) {
//   console.log("il numero è divisibile per 3");
// } else if (isDivisibilePerQuattro) {
//   console.log("il numero è divisibile per 4");
// } else {
//   console.log("il numero non è divisibile per nessuno dei divisori selezionati");
// }

// if (isDivisibilePerDue) {
//   console.log("il numero è divisibile per 2");
// }
// if (isDivisibilePerTre) {
//   console.log("il numero è divisibile per 3");
// }
// if (isDivisibilePerQuattro) {
//   console.log("il numero è divisibile per 4");
// }

if (isDivisibilePerDue || isDivisibilePerTre || isDivisibilePerQuattro){

  if (isDivisibilePerDue) {
    console.log("il numero è divisibile per 2");
  }
  if (isDivisibilePerTre) {
    console.log("il numero è divisibile per 3");
  }
  if (isDivisibilePerQuattro) {
    console.log("il numero è divisibile per 4");
  }

} else {
    console.log(
      "il numero non è divisibile per nessuno dei divisori selezionati"
    );
}



