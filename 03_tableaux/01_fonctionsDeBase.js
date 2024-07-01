let myArray = [];
let myArray2 = ['Riri', 'Fifi', 'Loulou'];

let myArray3 = new Array(5)

console.log(myArray, myArray2, myArray3)

//  Ajout d'un élément
myArray.push('toto')
myArray2.push('toto')
myArray3.push('toto')

console.log(myArray, myArray2, myArray3)

// Supprimer un élément
// 'splice()' => le premier paramètre sera l'index du premier élément à supprimer 
//               le 2nd paramètre sera le nombre d'éléments que l'on souhaite supprimer
myArray.splice(1,1)
myArray2.splice(1,1)
myArray3.splice(1,1)

console.log(myArray, myArray2, myArray3)

myArray2.forEach(item => console.log(item))

const nbrElements = () => {
    let x = 0
    myArray2.forEach( () => x++)
    return x
}

console.log("nombre d'éléments de 'myArray2: " , nbrElements())

myArray2.forEach( (item, index, arr) => 
    console.log(index + ": " + item + " présent dans le tableau " + arr) )

// Boucle for of
for (element of myArray2){
    console.log(element)
}