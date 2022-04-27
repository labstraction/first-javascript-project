
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


// function cloneAndaddOneToArray(array) {
  
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const elementPlusOne = element + 1;
//     newArray.push(elementPlusOne);    
//   }

//   return newArray;
// }



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


// const arrayOfArray = [[2, 6, 4],
//                       [8, 5, 1], 
//                       [9, 3, 6]];


// for (let i = 0; i < arrayOfArray.length; i++) {
//   const riga = arrayOfArray[i];
//   for (let j = 0; j < riga.length; j++) {
//     const cella = riga[j];
//     console.log(cella);
//   }
// }

// console.log(arrayOfArray);

// function cloneAndAddOneBidimensional(array) {
  
//   const newArray = [];
  
//   for (const riga of array) {
    
//     const newRiga = [];

//     for (const cella of riga) {
//       const cellaPlusOne = cella + 1;
//       newRiga.push(cellaPlusOne);
//     }
//     newArray.push(newRiga);
//   }
//   return newArray;
// }

// console.log(cloneAndAddOneBidimensional(arrayOfArray));


////// filtering

// const testArray = [2, 6, 8, 7, 21, 2001, 5000, 3, 12];


// function keepEven(array){

//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//     const isElementEven = element % 2 === 0;

//     if(isElementEven){
//       newArray.push(element);
//     }

//   }

//   return newArray;
// }

// console.log(keepEven(testArray));

// function keepGreaterThan10(array) {
  
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     const isGreaterThan10 = element > 10;

//     if (isGreaterThan10) {
//       newArray.push(element);
//     }
    
//   }

//   return newArray;
// }

// console.log(keepGreaterThan10(testArray));


// function filter(array, filterFunction){

//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     const isElementToAdd = filterFunction(element)

//     if (isElementToAdd) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
//   // return number % 2 === 0;
// }

// function isGreaterThan10(number){
//   return number > 10;
// }


// function isSmallerThan10(number) {
//   return number < 10;
// }

// console.log('my filter isEven', filter(testArray, isEven));
// console.log('my filter isGreaterThan10', filter(testArray, isGreaterThan10));
// console.log('my filter isSmallerThan10', filter(testArray, isSmallerThan10));
// console.log('my filter isOdd', filter(testArray, (number) => number % 2 === 1))

// console.log('javascript filter isEven', testArray.filter(isEven));
// console.log("javascript filter isGreaterThan10", testArray.filter(isGreaterThan10));
// console.log('javascript filter isSmallerThan10', testArray.filter(isSmallerThan10));
// console.log("javascript filter isOdd", testArray.filter((number) => number % 2 === 1));



/// mapping

const testArray = [2, 6, 8, 7, 21, 2001, 5000, 3, 12];

function addOneToAllElements(array) {
  
  const newArray = [];

  for (let i = 0; i < array.length; i++) {

    const element = array[i];
    
    const newElement = element + 1

    newArray.push(newElement);

  }

  return newArray;
}

function divideAllElements(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const newElement = element / 2;

    newArray.push(newElement);
  }

  return newArray;
}

function map(array, mappingFunction) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      const newElement = mappingFunction(element);

      newArray.push(newElement);
    }

    return newArray;
}


console.log('add One', addOneToAllElements(testArray))
console.log("divide", divideAllElements(testArray));


function addOne(element) {
  return element + 1;
}

function divide(element) {
  return element / 2;
}

console.log('my map add one', map(testArray, addOne));
console.log("my map divide", map(testArray, divide));
console.log("my map square", map(testArray, (element) => element * element))


console.log("javascript map add one", testArray.map(addOne));
console.log("javascript map divide", testArray.map(divide));
console.log("javascript map square", testArray.map((element) => element * element))