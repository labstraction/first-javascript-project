

const testArray1 = [-6, 2, 5, 137, 9, 12, -123, 1.45, 200000, -23.9];

const testArray2 = ['rosso', 'verde', 'giallo', 'arancione', 'magenta', 'blu'];

const testArray3 = [[  1,     4,   8, 12],
                    [ 34,   2.1, -23,  4],
                    [1.1, -2000,   2, 88]];


function min(array) {
  
}

console.log(min(testArray1)) /// -123


function sumEven(array) {
  
}

console.log(sumEven(testArray1)) /// 200008



function moreThan5Chars(array) {
  
}

console.log(moreThan5Chars(testArray2)) ///['giallo', 'arancione', 'magenta']


function FirstUpperCase(array) {
  
}


console.log(FirstUpperCase(testArray2)); ///["Rosso", "Verde", "Giallo", "Arancione", "Magenta", "Blu"];


function SuperSumAll(array) {

}


console.log(SuperSumAll(testArray3)); /// somma degli elementi dell'array


function divide(array, divider) {
  
}



console.log(divide(testArray1, 3)) /// un clone con tutti i valori diviso 3

console.log(divide(testArray1)) /// un clone con tutti i valori diviso 2


function filterByMax(array, max) {
  
}


console.log(filterByMax(testArray1, 10)) /// clone con tutti i valori minori di 10


function reverse(array){

} 


console.log(reverse(testArray1));
console.log(reverse(testArray2));/// mi da l'array con i valori invertiti


function flatArray(array) {
  
}

console.log(flatArray(testArray3)); ///[1, 4, 8, 12, 34, 2.1, -23, 4, 1.1, -2000, 2, 88];
