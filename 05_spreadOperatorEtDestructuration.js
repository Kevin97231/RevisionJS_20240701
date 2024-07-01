// spread operator

const numbersOne = [1, 2, 3]
const numbersTwo = [4, 5, 6]

const numbersCombined = [...numbersOne]

console.log(numbersCombined)

const cars = ['mustang', 'f-150', 'expedition']

let [car1, car2, car3] = cars;

//  Ci-dessous, l'équivalent de la ligne au dessus
// let car1 = cars[0];
// let car2 = cars[1];
// let car3 = cars[2];
// ________________________________________________________________

console.log(`car1: ${car1} ; car2: ${car2} ; car3: ${car3}`)

const numbers = [1,2,3,4,5,6]

const [one, two, ...rest] = numbers

console.log(`one : ${one}  ;  two: ${two}  ;  rest: ${rest}`)

// Range le reste dans un tableau
console.log(rest)


// ________________________________________________________________

const calculate = (a, b) => {
    const add = a + b;
    const substract = a - b;
    const multiply = a * b;
    const divide = a / b;
    
    return [add, substract, multiply, divide]
}

const [addition, soustraction] = calculate(4, 7)
console.log(`addition: ${addition} , soustraction: ${soustraction}`)

const [,,,division] = calculate(8, 2)
console.log(`division: ${division}`)

// ________________________________________________________________
// Destructuration sur les objets

const person = { name: 'John', age: 30, city: 'New York'}

const {city, age, name} = person
console.log(`name: ${name} , age: ${age} , city: ${city}`)

// Si je veux extraire qu'un élément : 
// const { age } = person
// console.log(`age: ${age}`)

// Pour renommer nos variable: 
const { name: nom, city: ville } = person
console.log(`Nom: ${nom}, ville: ${ville}`)
// ________________________________________________________________


// N'importe quel objet qui aura les propriétés 'name' et 'age' pourra être passé en paramètre de
// cette fonction
const personInfo = ({name, age}) => {
    console.log("Méthode 'personInfo'",`${name}, ${age} ans`)
}
personInfo(person)

// ________________________________________________________________

// On peut rajouter des propriétés aux objets en Js: 
// Il suffit de faire "objet.propriété = '' "
person.lastName = 'Toto'

// La propriété rajoutée est également assignable via a destructuration
const { lastName } = person
console.log('lastName: ' + lastName)