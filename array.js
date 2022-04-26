
// const arrayOfNumbers = [1, 5, 3, 8, 6];

// const arrayOfBigNumbers = [100000, 5342432, 334533, 834434324, 34433436];


///aggiungere elementi all'array

// arrayOfNumbers.push(9);

// arrayOfNumbers.unshift(37);

// const element = arrayOfNumbers.pop()

// console.log(element);

// const element2 = arrayOfNumbers.shift();

// console.log(element2);

// console.log(arrayOfNumbers);


// accedere agli elementi dell'array

// const elementInPosition2 = arrayOfNumbers[2];

// console.log(elementInPosition2);

// console.log(arrayOfNumbers[0]);

// arrayOfNumbers[4] = 666;

// console.log(arrayOfNumbers);



// ciclare l'array;

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   const element = arrayOfNumbers[i];
//   console.log("l'elemento dell'array a indice " + i + " è " + element);
// }


// for (const element of arrayOfNumbers) {
//   console.log("forof", element);
// }



// function max(array) {
//   let selectedElement = array[0];
//   for (const element of array) {
//     if (selectedElement < element) {
//       selectedElement = element;
//     }
//   }
//   return selectedElement;
// }


function cloneAndaddOneToArray(array) {
  
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const elementPlusOne = element + 1;
    newArray.push(elementPlusOne);    
  }

  return newArray;
}



// function andaddOneToArray(array) {

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const elementPlusOne = element + 1;
//     array[i] = elementPlusOne;
//   }

//   return array;
// }

// function findEvenNumbers(array){

//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 2 === 0) {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// }


// function sumAll(array) {

//   let risultato = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     risultato = risultato + element;
//   }
  
//   return risultato;
// }


// console.log(sumAll(arrayOfNumbers))


// const arrayOfStrings = ['pippo', 'pluto', 'paperino'];

// console.log(arrayOfStrings);

// function ArrayToUppercase(array) {
  
//   const newArray = [];

//   for (const element of array) {
//     const uppercaseString = element.toUpperCase()
//     newArray.push(uppercaseString);
//   }

//   return newArray;
// }

// console.log(ArrayToUppercase(arrayOfStrings));


const arrayOfArray = [[2, 6, 4],
                      [8, 5, 1], 
                      [9, 3, 6]];


// for (let i = 0; i < arrayOfArray.length; i++) {
//   const riga = arrayOfArray[i];
//   for (let j = 0; j < riga.length; j++) {
//     const cella = riga[j];
//     console.log(cella);
//   }
// }

console.log(arrayOfArray);

function cloneAndAddOneBidimensional(array) {
  
  const newArray = [];
  
  for (const riga of array) {
    
    const newRiga = [];

    for (const cella of riga) {
      const cellaPlusOne = cella + 1;
      newRiga.push(cellaPlusOne);
    }
    newArray.push(newRiga);
  }
  return newArray;
}

console.log(cloneAndAddOneBidimensional(arrayOfArray));
