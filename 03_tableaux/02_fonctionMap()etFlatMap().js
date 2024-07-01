const persons = [
    { firstName: 'Malcom', lastName: 'Reynolds'  },
    { firstName: 'Kaylee', lastName: 'Frye'  },
    { firstName: 'Jayne', lastName: 'Cobb'  }
];

// La fonction map() 
// => Permet de duppliquer un tableau en appliqunt la même opération sur chacun des élements du tableau que l'on dupplique

const personFullName = persons.map( user => [user.firstName, user.lastName].join(" "))

console.log('persons ->', persons)
console.log('personFullName ->', personFullName)

console.log(' _________________ Exercices _________________');


// Exercice : Faire une fonction qui 
    // - prend en paramètre un tableau
    // - retourne un tableau contenant les carrés des valeurs du tableau passé en paramètre

    // ==> Si j'ai [1,2,3,4] en entré --> je veux que la fonction retourne [1,4,9,16]

const chiffre = [1,2,3,4]

// Cette fonction doit dupliquer le tableau passé en paramètre 
// Elle doit faire un .map sur le premier tableau pour dupliquer ce tableau en appliquant une opération sur chacun de ses éléments
// operation -> element * element
const carre = (tableau) => {
    const tableauDuplique = tableau.map( number => number * number)
    return tableauDuplique
}

const carre2 = (tableau) => tableau.map( number => number * number)

console.log(carre(chiffre))
console.log(carre2(chiffre))

// Méthode flatMap()

let result = chiffre.map( chiffre => [chiffre * chiffre])

let result2 = chiffre.flatMap( chiffre => [chiffre * chiffre])

// Attention, seulement sur un niveau !
let result3 = chiffre.flatMap( chiffre => [[chiffre * chiffre]])

console.log('result', result)
console.log('result2', result2)
console.log('result3', result3)