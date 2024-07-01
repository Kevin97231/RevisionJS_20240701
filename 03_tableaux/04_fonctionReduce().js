const myArray = [1,2,3,4]

// Somme de tous les chiffres
// 0 est la valeur du total au départ
const sumArray = myArray.reduce((total, currentValue) =>
    total + currentValue, 0
);

console.log(sumArray)

// Exercice 
// somme de tous les chiffres au carré: 

const carre = myArray.reduce( (total, currentValue, index) => {
        console.log(`Index: ${index}, Carré: ${currentValue * currentValue}`)
        return  total + currentValue * currentValue
    }, 0
);

console.log(carre)