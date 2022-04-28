const corso1 = {
  nome: 'programmatore front-end',
  ore: 300,
  terminato: false,
} 

const voti1 = [8, 5, 10, 9]

const studente1 = {
  nome: 'Mirco',
  cognome: 'Faro',
  eta: 28,
  sposato: false,
  corso: corso1,
  voti: voti1
}


const voti2 = [4, 6, 10, 9];

const studente2 = {
  nome: "Paolo",
  cognome: "Foppiano",
  eta: 24,
  sposato: false,
  corso: corso1,
  voti: voti2,
}; 

// const studente2 = ['Paolo', 'Foppiano', 24, false];

const studenti = [studente1, studente2]

for (let i = 0; i < studenti.length; i++) {
  const studente = studenti[i];
  console.log(studente.nome + ' ' + studente.cognome);
}


// const automobile1 = {
//   modello: 'Golf',
//   produttore: 'Volkswagen',
//   anno: 2004,
//   cilindrata: 2000,
//   automatico: false
// }