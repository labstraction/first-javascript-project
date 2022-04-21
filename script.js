
// string

console.log('ciao mondo!');

// alert("Ciao mondo");

console.log("Ciao Cinzia");

console.log("7");

console.log("andrea" + "è" + "in" + "ritardo")

// number

console.log(7);

console.log('somma', 10 + 5);

console.log("sottrazione", 10 - 5);

console.log("moltiplicazione", 10 * 5);

console.log("divisione", 10 / 5);

console.log("potenza", 5 ** 2);

console.log("modulo", 5 % 2)

console.log("Math round", Math.round(3.56))

// complicazioni

console.log("ciao" + 7);

console.log("7" + 7);

console.log(7 + "7");


// boolean

console.log(true);

console.log(false);

// tavola verità del NOT
console.log("non true", !true);
console.log("non false", !false);

// tavola verità dell'AND
console.log("true && true", true && true);
console.log("true && false", true && false);
console.log("false && true", false && true);
console.log("false && false", false && false);

// tavola verità dell'OR
console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("false || false", false || false);


// operatore di ugualianza
console.log("true === true", true === true);
console.log("false === false", false === false);

console.log("true === false", true === false);
console.log("false === true", false === true);

console.log("'pippo' === 'pippo'", 'pippo' === 'pippo')
console.log("'pippo' === 'pluto'", "pippo" === "pluto");

console.log("7 === 7", 7 === 7);
console.log("7 === 12", 7 === 12);

// operatore di diversità

const brontolone = 5;
const puffetta = 9;

const sonoDiversi = !(brontolone === puffetta)
const sonoDiversi2 = brontolone !== puffetta;

// operatori di maggiore e minore

const minore = brontolone < puffetta;
const maggiore = brontolone > puffetta;

const minoreOUguale = brontolone <= puffetta;
const maggioreOUgule = brontolone >= puffetta;

// complicazioni

console.log("'7' === 7", '7' === 7);
console.log("'7' == 7", "7" == 7);


// undefined

let grandePuffo;

console.log('log di grandePuffo', grandePuffo);

// null

let quattrocchi = null;

console.log("log di quattrocchi", quattrocchi);

// NaN

let numeroSbagliato = "cinque";

let numero = parseInt(numeroSbagliato);

console.log('numero sbagliato', numero)

//infinity

const infinitoPositivo = +Infinity;

const infinitoNegativo = -Infinity;

// variabili
// let

let pippo = 7;

console.log(pippo);

console.log(pippo + 3);

let pluto = 5;

console.log(pippo + pluto);

let paperino = "ciao";

console.log(paperino);

console.log(paperino + pluto);

pluto = "mondo";

console.log(paperino + pluto);

//var

var paperoga = 12;

var paperone = 15;

console.log(paperoga + paperone);

console.log(paperino + paperoga);


// const

const topolino = "viva";

const topolina = "javascript";

console.log(topolino + topolina);


// errore di riassegnazione di una costante
// topolina = "l'Italia";
// console.log(topolino + topolina);

const stringa1 = prompt("inserisci la prima stringa");
const stringa2 = prompt("inserisci la seconda stringa");

// console.log(stringa1 + stringa2);

alert(stringa1 + stringa2);


// camel case

let laMiaVariabileDiEsempio;

const LA_MIA_IMPORTANTISSIMA_COSTANTE = 3.14;