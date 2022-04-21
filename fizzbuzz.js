//chiedo all'utente di inserire un numero
//se il numero è divisibile per 3, scrivo in console FIZZ
//se il numero è divisibile per 5, scrivo in console BUZZ
//se il numero è divisibile per entrambi, scrivo in console FIZZBUZZ

// const numeroInStringa = prompt("inserisci un numero");

// const numero = parseFloat(numeroInStringa);

// const isDivisibilePerTre = numero % 3 === 0;

// const isDivisibilePerCinque = numero % 5 === 0;

// // const isDivisibilePerQuindici = numero % 15 === 0;

// if (isDivisibilePerTre && isDivisibilePerCinque) {
//     console.log("FIZZBUZZ");
// } else if (isDivisibilePerCinque){
//     console.log("BUZZ");
// } else if (isDivisibilePerTre) {
//     console.log("FIZZ");
// }



const numeroInStringa = prompt("inserisci un numero");

const numero = parseFloat(numeroInStringa);

const isDivisibilePerTre = numero % 3 === 0;

const isDivisibilePerCinque = numero % 5 === 0;

let result = '';

if (isDivisibilePerTre) {
    // result = result + 'FIZZ';
    result += 'FIZZ'
}
if (isDivisibilePerCinque) {
    // result = result + "BUZZ";
    result += "BUZZ";
}

console.log(result);


let es = 5

// es = es + 8;
es += 8;

// es = es - 4;
es -= 4;

// es = es * 2;
es *= 2;

let i = 0;

// i = i + 1;
// i += 1;
i++;

i--;
