const corso1 = {
  nome: "programmatore front-end",
  ore: 300,
  terminato: false,
};

const voti1 = [8, 5, 10, 9];

const studente1 = {
  nome: "Mirco",
  cognome: "Faro",
  genere: "m",
  eta: 28,
  sposato: false,
  corso: corso1,
  voti: voti1,
};

const voti2 = [4, 6, 10, 9];

const studente2 = {
  nome: "Paolo",
  cognome: "Foppiano",
  genere: "m",
  eta: 24,
  sposato: false,
  corso: corso1,
  voti: voti2,
};

const studente3 = {
  nome: "Cinzia",
  cognome: "Ariotti",
  genere: "f",
  eta: 25,
  sposato: false,
  corso: corso1,
  voti: [3, 10, 9, 7],
};

const studente4 = {
  nome: "Leslie",
  cognome: "Fritas",
  genere: "f",
  eta: 27,
  sposato: true,
  corso: corso1,
  voti: [6, 9, 10, 6],
};

const studente5 = {
  nome: "Polina",
  cognome: "Boretc",
  genere: "f",
  eta: 27,
  sposato: false,
  corso: corso1,
  voti: [3, 10, 7, 7],
};

const studente6 = {
  nome: "Christopher",
  cognome: "Limone",
  genere: "m",
  eta: 27,
  sposato: false,
  corso: {
    nome: "Programmatore Mobile",
    ore: 250,
    terminato: true,
  },
  voti: [9, 8, 7, 6],
};

// const studente2 = ['Paolo', 'Foppiano', 24, false];

const studenti = [
  studente1,
  studente2,
  studente3,
  studente4,
  studente5,
  studente6,
];

function printSingleStudent(student){
  console.log(student.nome + " " + student.cognome);
  console.log("Età: " + student.eta);
  console.log("Corso: " + student.corso.nome);
  console.log("-------------------------------------");
  console.log("");
}

function printStudents(studentArray) {
  for (let i = 0; i < studentArray.length; i++) {
    const studente = studentArray[i];
    printSingleStudent(studente)
    // console.log(studente.nome + " " + studente.cognome);
    // console.log("Età: " + studente.eta);
    // console.log("Corso: " + studente.corso.nome);
    // console.log("-------------------------------------");
    // console.log("");
  }
}

function isFemale(student){
  // if (student.genere === 'f') {
  //   return true;
  // } else {
  //   return false;
  // }
  return student.genere === 'f';
}

function printFemaleStudents(studentArray) {
  // const femaleStudents = [];

  // for (let i = 0; i < studentArray.length; i++) {
  //   const student = studentArray[i];
  //   if (student.genere === 'f') {
  //     femaleStudents.push(student)
  //   }
  // }

  // const femaleStudents = studentArray.filter(isFemale);
  const femaleStudents = studentArray.filter((s) => s.genere === 'f');

  printStudents(femaleStudents);

  // for (let i = 0; i < studenti.length; i++) {
  //   const studente = studenti[i];
  //   if (studente.genere === "f") {
  //     console.log(studente.nome + " " + studente.cognome);
  //     console.log("Età: " + studente.eta);
  //     console.log("Corso: " + studente.corso.nome);
  //     console.log("-------------------------------------");
  //     console.log("");
  //   }
  // }
}


// printFemaleStudents(studenti);

function reduceOldest(previous, current){
  if (previus.eta < current.eta) {
    return current;
  } else {
    return previous;
  }
}
// questa funzione trova lo studente più vecchio
function printOldestStudent(studentArray){

  let oldest = studentArray[0];

  for (let i = 1; i < studentArray.length; i++) {
    const student = studentArray[i];
    if (student.eta > oldest.età) {
      oldest = student;
    }
  }

  const oldest2 = studentArray.reduce((p, c) => p.eta < c.eta ? c : p);

  printSingleStudent(oldest);
  // console.log(oldest.nome + " " + oldest.cognome);
  // console.log("Età: " + oldest.eta);
  // console.log("Corso: " + oldest.corso.nome);
  // console.log("-------------------------------------");
  // console.log("");

}

function compareStudentsByCognome(student1, student2){
  return student1.cognome.localeCompare(student2.cognome);
}

function compareStudentsByAge(student1, student2) {
  return student1.eta - student2.eta;
}

function compareStudentsByAgeAndCognome(student1, student2) {
  const ordine = student1.eta - student2.eta;
  if (ordine === 0) {
    return student1.cognome.localeCompare(student2.cognome);
  } else {
    return ordine;
  }
}

studenti.sort(compareStudentsByAge);
//printStudents(studenti);

console.log('age', studenti);


studenti.sort(compareStudentsByCognome);


console.log('cognome', studenti);