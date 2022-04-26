// esercizio 1
// fare un ciclo for che parta da 0 e arrivi fino a 100
// ad ogni giro stampare il valore di i,
// stampare FIZZ se i è divisibile per 3, BUZZ se i è divisibile per 5
// e FIZZBUZZ se è divisibile sia per 3 che per 5

// for (let i = 0; i < 100; i++) {
//   const isDivisibilePer3 = i % 3 === 0;
//   const isDivisibilePer5 = i % 5 === 0;

//   if (isDivisibilePer3 && isDivisibilePer5) {
//     console.log(i, "FIZZBUZZ");
//   } else if (isDivisibilePer3) {
//     console.log(i, "FIZZ");
//   } else if (isDivisibilePer5) {
//     console.log(i, "BUZZ");
//   }
// }

// for (let i = 0; i < 101; i++) {
//   const isDivisibilePer3 = i % 3 === 0;
//   const isDivisibilePer5 = i % 5 === 0;

//   let result = "";

//   if (isDivisibilePer3) {
//     result = result + "FIZZ";
//   }

//   if (isDivisibilePer5) {
//     result = result + "BUZZ";
//   }

//   console.log(i, result);
// }

// esercizio 2
// creare un programma che stampi a console questa scacchiera:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// console.log("#  #  #  #\n  #  #  #  # \n#  #  #  #\n  #  #  #  #\n#  #  #  #\n  #  #  #  # \n#  #  #  #\n  #  #  #  #");

//   console.log(
// `# # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #`
//   );

// const teacher = 'giorgio';

// const age = 50;

// console.log("il docente " + teacher + " ha " + age + " anni");

// console.log(`il docente ${teacher} ha ${age} anni`);

// for (let i = 0; i < 8; i++) {
//   if (i % 2 === 0) {
//     console.log("# # # #")
//   } else{
//     console.log(" # # # #")
//   }
// }

// for(let r = 0; r < 8; r++){
//   let stringaDiRiga = "";

//   for(let c = 0; c < 8; c++){

//     const isRigaPari = r % 2 === 0;
//     const isColonnaPari = c % 2 === 0;

//     if (isRigaPari && isColonnaPari) {
//       stringaDiRiga = stringaDiRiga + "#";
//     } else if (!isRigaPari && !isColonnaPari){
//       stringaDiRiga = stringaDiRiga + "#";
//     } else {
//       stringaDiRiga = stringaDiRiga + " ";
//     }
//   }

//   console.log(stringaDiRiga);
// }

// for (let r = 0; r < 8; r++) {
//   let stringaDiRiga = "";

//   for (let c = 0; c < 8; c++) {

//     const sommaDiRigaEColonna = r + c;
//     const isSommaPari = sommaDiRigaEColonna % 2 === 0;

//     if (isSommaPari) {
//       stringaDiRiga = stringaDiRiga + '#'
//     } else {
//       stringaDiRiga = stringaDiRiga + ' '
//     }

//   }

// }

// for (let r = 0; r < 8; r++) {
//   let stringaDiRiga = "";

//   for (let c = 0; c < 8; c++) {
//     if (r % 2 === c % 2) {
//       stringaDiRiga = stringaDiRiga + "#";
//     } else {
//       stringaDiRiga = stringaDiRiga + " ";
//     }
//   }

//   console.log(stringaDiRiga);
// }

// esercizio 3
// creare un programma che stampi a console questa configurazione:
// #
// ##
// ###
// ####
// #####
// ######

// esercizio 4
// creare un programma che stampi a console questa configurazione:
//     #
//    ###
//   #####
//  #######
// #########
