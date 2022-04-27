

// const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1.45, 200000, -23.9];

// const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];

// const testArray3 = [[  1,     4,   8, 12],
//                     [ 34,   2.1, -23,  4],
//                     [1.1, -2000,   2, 88]];


// function min(array) {
//   let number = array[0];

//   // for (let i = 1; i < array.length; i++) {
//   //   const element = array[i];
//   //   if (number > element) {
//   //     number = element;
//   //   }
//   // }

//   for (const element of array) {
//     if (number > element) {
//       number = element;
//     }
//   }

//   return number;

// }

// console.log("min", min(testArray1)) /// -123


// function sumEven(array) {

//   let result = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     const isElementEven = element % 2 === 0;

//     if (isElementEven) {
//       result = result + element;
//     }
    
//   }
//   return result;

// }

// console.log('sumEven', sumEven(testArray1)) /// 200008


// function moreThan5Chars(array) {
  
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//     if (element.length > 5) {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// }

// console.log('moreThan5Chars', moreThan5Chars(testArray2)) ///['giallo', 'arancione', 'magenta']


// function firstUpperCase(array) {
  
//   const newArray = []

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     const firstChar = element[0];
//     const firstCharUppercase = firstChar.toUpperCase();
//     const remainigElement = element.substring(1);
//     const newElement = firstCharUppercase + remainigElement;

//     newArray.push(newElement);
    
//   }
//   return newArray;
// }


// console.log('firstUpperCase', firstUpperCase(testArray2)); ///["Rosso", "Verde", "Giallo", "Arancione", "Magenta", "Blu"];


// function superSumAll(array) {

//   let result = 0;

//   for (let i = 0; i < array.length; i++) {
//     const riga = array[i];
//     for (let j = 0; j < riga.length; j++) {
//       const element = riga[j];
//       result = result + element;
//     }
//   }

//   return result;

//   // let sum = 0;

//   // for (let i = 0; i < array.length; i++) {
//   //   for (let j = 0; j < array[i].length; j++) {
//   //     sum += array[i][j]
//   //   }
//   // }

//   // return sum;

// }

// console.log('superSumAll', superSumAll(testArray3)); /// somma degli elementi dell'array


// function divide(array, divider = 2) {

//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const newElement = element / divider;
//     newArray.push(newElement);
//   }
  
//   return newArray;
// }

// console.log('divide', divide(testArray1, 3)); /// un clone con tutti i valori diviso 3
// console.log('divide with default', divide(testArray1)); /// un clone con tutti i valori diviso 2
// console.log("divide with 10", divide(testArray1, 10)); /// un clone con tutti i valori diviso 10


// function filterByMax(array, max) {
  
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element < max) {
//       newArray.push(element);
//     }
//   }
//   return newArray;

// }

// console.log('filterByMax', filterByMax(testArray1, 10)) /// clone con tutti i valori minori di 10


// function reverse(array){
//   // const newArray = [];

//   // for (let i = array.length - 1; i >= 0; i--) {
//   //   const element = array[i];
//   //   newArray.push(element);
//   // }

//   // return newArray;
//   //-----------------------
//   //return array.reverse()
//   //-------------------------
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     newArray.unshift(element);
//   }

//   return newArray;
// } 

// console.log("test1", testArray1);
// console.log('reverse test1', reverse(testArray1));
// console.log("reverse test2", reverse(testArray2));/// mi da l'array con i valori invertiti


// function flatArray(array) {
//   // const newArray = [];

//   // for (let i = 0; i < array.length; i++) {
//   //   const row = array[i];
//   //   for (let j = 0; j < row.length; j++) {
//   //     const element = row[j];
//   //     newArray.push(element);
//   //   }
//   // }

//   // return newArray;

//   return array.flat();
// }

// function sumAll(array) {

//   let risultato = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     risultato = risultato + element;
//   }
  
//   return risultato;
// }

// console.log(flatArray(testArray3)); ///[1, 4, 8, 12, 34, 2.1, -23, 4, 1.1, -2000, 2, 88];



// function superSumAll2(array) {
//   const flattenArray = array.flat();
//   const result = sumAll(flattenArray);
//   return result;
// }

// console.log("superSumAll2", superSumAll2(testArray3));



const testArray4 = [2, 4, 7, -9, 1000, -45, 2, 12, 333, -1000, 123, 34];

const testArray5 = ["rosso", "verde", "giallo", "arancione", "magenta", "blu"];

const testArray6 = [true, "pippo", 204, "verde", 3000, 100, false];


/// filtrare testArray4 in modo che rimangano solo i numeri positivi

/// filtrare testArray4 in modo che rimangano solo i numeri divisibili per 3

/// filtrare testArray4 in modo che rimangano solo i numeri divisibili per 3 e 4

/// filtrare testArray5 in modo che rimangano solo le stringhe più corte di 6 lettere

/// filtrare testArray5 in modo che rimangano solo le stringhe che contengono la lettera 'n'

/// filtrare testArray6 in modo che rimangano solo i numeri

/// mappare testArray4 dividendo tutti i numeri per 3

/// mappare testArray4 facendo la radice quadrata di tutti i numeri

/// mappare testArray4 sommando uno solo ai numeri dispari

/// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola

/// mappare testArray5 aggiungendo in fondo ad ogni stringa la lunghezza della stessa

