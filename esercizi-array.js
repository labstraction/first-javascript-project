

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


// const testArray5 = ["rosso", "verde", "giallo", "arancione", "magenta", "blu"];

// const testArray6 = [true, "pippo", 204, "verde", 3000, 100, false];

// /// filtrare testArray4 in modo che rimangano solo i numeri positivi

// function isPositive(element){

//   // if (element > 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return element > 0; 
// }

// const filteredArray = testArray4.filter(isPositive);
// console.log('solo positivi', filteredArray);

// const filteredArray2 = testArray4.filter((e) => e > 0);
// console.log("solo positivi lambda", filteredArray2);

// /// filtrare testArray4 in modo che rimangano solo i numeri divisibili per 3

// function divisibleBy3(element){
//   if (element % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log('divisibile per 3', testArray4.filter(divisibleBy3));

// console.log("divisibile per 3 lambda", testArray4.filter((e) => e % 3 === 0));

// /// filtrare testArray4 in modo che rimangano solo i numeri divisibili per 3 e 4

// function divisibleBy3And4(element) {
  
//   const isDivisibleBy3 = element % 3 === 0;
//   const isDivisibleBy4 = element % 4 === 0;

//   if (isDivisibleBy3 && isDivisibleBy4) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log('divisibile per 3 e 4', testArray4.filter(divisibleBy3And4));
// console.log("divisibile per 3 e 4 lambda", testArray4.filter((e) => (e % 3 === 0) && (e % 4 === 0)));

// /// filtrare testArray5 in modo che rimangano solo le stringhe più corte di 6 lettere

// function shorterThen6(element){
//   if (element.length < 6) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("più corta di 6", testArray5.filter(shorterThen6));
// console.log("più corta di 6 lambda", testArray5.filter((e) => e.length < 6));

// /// filtrare testArray5 in modo che rimangano solo le stringhe che contengono la lettera 'n'

// function includesN(element) {
//   if (element.includes('n')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log("include n", testArray5.filter(includesN));
// console.log("include n lambda", testArray5.filter((e) => e.includes('n')));

// /// filtrare testArray6 in modo che rimangano solo i numeri

// function checkIfIsNumber(element){

//   if (typeof element === 'number') {
//     return true;
//   } else {
//     return false;
//   }

// }

// console.log("solo numeri", testArray6.filter(checkIfIsNumber));
// console.log("solo numeri lambda", testArray6.filter((e) => typeof e === 'number'));


// /// mappare testArray4 dividendo tutti i numeri per 3

// function divideBy3(element){

//   const elementDividedBy3 = element / 3;

//   return elementDividedBy3;

// }

// console.log('diviso 3', testArray4.map(divideBy3));
// console.log("diviso 3 lambda", testArray4.map((e) => e / 3 ));

// /// mappare testArray4 facendo la radice quadrata di tutti i numeri

// function squareRoot(element) {
  
//   const sqRootElement = Math.sqrt(element);

//   return sqRootElement;
// }

// console.log('radice quadrata', testArray4.map(squareRoot));
// console.log('radice quadrata lambda', testArray4.map((e) => Math.sqrt(e)))

// /// mappare testArray4 sommando uno solo ai numeri dispari

// function addOneToOddNumbers(element) {
//   if (element % 2 === 0) {
//     return element;
//   } else {
//     const newElement = element + 1;
//     return newElement;
//   }
// }


// console.log('aggiungo uno ai dispari', testArray4.map(addOneToOddNumbers));

// /// operatore ternario condizione ? cosa succede se è vero : cosa succede se è falso
// console.log('aggiungo uno ai dispari lambda', testArray4.map((e) => e % 2 === 0 ? e : e + 1));

// /// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola

// function strangeCase(element){

//   const firstChar = element[0];
//   const firstCharUpper = firstChar.toUpperCase();

//   const lastChar = element[element.length - 1];
//   const lastCharUpper = lastChar.toUpperCase();

//   const remainingString = element.substring(1, element.length - 1);

//   const newElement = firstCharUpper + remainingString + lastCharUpper;

//   return newElement;
// }

// console.log('strange case', testArray5.map(strangeCase));
// console.log("strange case lambda", testArray5.map((e) => e[0].toUpperCase() + e.substring(1, e.length - 1) + e[e.length - 1].toUpperCase()));

// /// mappare testArray5 aggiungendo in fondo ad ogni stringa la lunghezza della stessa

// function appendLength(element) {
//   const newElement = element + element.length;
//   return newElement;
// }

// console.log('aggiungi lunghezza', testArray5.map(appendLength))
// console.log("aggiungi lunghezza lambda", testArray5.map((e) => e + e.length));



// /// filtrare tutti gli elementi di testArray4 in modo che rimangano quelli a indice pari

// function filterByIndex(element, index) {
//   if (index % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log('tieni indice pari', testArray4.filter(filterByIndex));
//console.log("tieni indice pari lambda", testArray4.filter((e, i) => i % 2 === 0));

// /// mappare testArray4 in modo che ad ogni elemento venga sommato (se esiste) il successivo

// // const test = [3, 1, 5]
// // //            0, 1, 2


// function addNext(element, index, array) {
  
//   const nextIndex = index + 1;

//   if(nextIndex < array.length){
//     const nextElement = array[nextIndex];
//     const result = element + nextElement;
//     return result;
//   } else {
//     return element;
//   }

// }

// console.log('add next', testArray4.map(addNext))
console.log('add next lambda', testArray4.map((e, i, a) => (i + 1 < a.length) ? e + a[i+1] : e ));

//// reducing


function sumAll(array){

  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    const element = array[i];

    result = result + element;

  }
  return result;
}

function multiplyAll(array){

    let result = 1;

    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      result = result * element;
    }
    return result;
}

console.log('somma tutti', sumAll(testArray4));


const test = [3, 1, 5];

function reducerSumAll(previous, current) {
  const result = previous + current;
  return result;
}

function reducerMultiplyAll(previous, current){
  const result = previous * current;
  return result;
}

console.log('somma tutti reduce', test.reduce(reducerSumAll, 0));
console.log('somma tutti lambda', test.reduce((p, c) => p + c, 0))
console.log("moltiplica tutti reduce", test.reduce(reducerMultiplyAll, 1));
console.log("moltiplica tutti lambda",test.reduce((p, c) => p * c, 1));


function reduceHigherThan2(previous, current){
  if(current > 2){
    previous.push(current);
  }
  return previous;
}

function filterHigherThan2(element) {
  if (element > 2) {
    return true;
  } else {
    return false;
  }
}

console.log('filtra con reduce', test.reduce(reduceHigherThan2, []));
console.log("filtra con filter", test.filter(filterHigherThan2));


function reducerSumAllEvenIndex(previous, current, index){
  if (index % 2 === 0) {
    const result = previous + current;
    return result;
  } else {
    return previous;
  }
}

console.log("somma indice pari", test.reduce(reducerSumAllEvenIndex, 0));
