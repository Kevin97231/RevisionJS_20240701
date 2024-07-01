const myArray = [1,2,3,4]

// Somme de tous les chiffres
const sumArray = myArray.reduce((total, currentValue) =>
    total + currentValue , 0
);

console.log(sumArray)

// Exercice 
// somme de tous les chiffres au carré: 
