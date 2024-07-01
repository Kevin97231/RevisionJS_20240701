const myConst = 6;
let myLet = 4;
var myVar = 9;

console.log(myConst, myLet, myVar);

function example() {

    if(true) {
        var variableVar = "Je suis une variable var";
        let variableLet = "Je suis une variable let";
        const variableConst = "Je suis une constante";
        
        console.log("__________ A l'intérieur du bloc__________ ");
        console.log("variable var", variableVar);
        console.log("variable let", variableLet);
        console.log("__________________________________________ ");
        
    }
    
    console.log("__________ A l'extérieur du bloc__________ ");
    console.log("variable var", variableVar);

    try {
        console.log("variable const", variableConst);
        console.log("variable let", variableLet);
    } catch {
        console.error('variable inaccessible');
    }

    console.log("__________________________________________ ");
   
}

example()


// Exo Question ouverte

var x = 10;
console.log("1", x) // -> 10

{
    let x = 2;
    console.log("2", x) // -> 2

    var y = 5;
    const z = 6
}

console.log("3", x)  // -> 10  | Erreurs
console.log("4", y)  // -> Erreurs  |   5
console.log("5: ", z)  // -> Erreurs