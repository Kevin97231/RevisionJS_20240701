function helloName(name) {
    return 'Hello ' + name
}

let hello = helloName('Quentin')

console.log(hello)

const mytable = [1,12,15,18]

function moyenne(tableau){
    let x = 0;
    let nbrElements = 0;

    for(let i = 0; i < tableau.length; i++){
        x += tableau[i]
        // x = x + tableau[i]
        nbrElements ++
    }

    return x / nbrElements
}

const result = moyenne(mytable)
console.log('moyenne: ', result)

// Avec ES6
const helloNameFleche = (name) => {
    return 'Hello ' + name
}

const helloNameFleche2 = (name) => 'Hello ' + name

console.log(helloNameFleche('Quentin'))
console.log(helloNameFleche2('Quentin'))

const moyenneFlechee = (tableau) => {
    let x = 0;
    let nbrElements = 0;

    for(let i = 0; i < tableau.length; i++){
        x += tableau[i]
        // x = x + tableau[i]
        nbrElements ++
    }

    return x / nbrElements
}

console.log('moyenne avec foncton fléchée: ', moyenneFlechee(mytable))

//  Parcourir avec un .forEach

const mytable2 = [1,12,15,18]

const moyenne2 = (tableau) => {
    let x = 0

    tableau.forEach( (element) => {
        x += element
    })

    return x / tableau.length
}

console.log("moyenne avec le '.forEach'", moyenne2(mytable2))


const soustraction = (a, b = 5) => a - b

console.log('fonction soustraction', soustraction(10, 2))
console.log('fonction soustraction', soustraction(10))

const addition = (a = 15, b) => a + b
console.log('fonction addition', addition(undefined, 5))