class Car {
    constructor(name, year){
        if(name === undefined || year === undefined){
            throw new Error("Les propriétés 'name' et 'year' doivent êtres définies")
        }
        this.name = name;
        this.year = year;
    }

    toString(){
        return `${this.name}, année: ${this.year}`
    }
}

let car = new Car('Peugeot', 2016);

console.log(car); 
console.log(car.toString()); 

const createCar = (name, year) => {
    try {
        return new Car(name, year); 
    } catch (err) {
        console.error(err.message)
    }
}

let car2 = createCar('Peugeot')
console.log(car2)

// Accès aux propriétés
console.log('Nom: ', car.name)
console.log('year: ', car.year)

console.log('nom et année: ',car['name'] , car['year'])


// A EVITER !!
// const car3 = car
// console.log(`car = ${car} et car3 = ${car3}`)

// car3.year = 2008
// console.log(`car = ${car} et car3 = ${car3}`)


// A VOIR 
// car3 = Object.assign(car)
// console.log(`car = ${car} et car3 = ${car3}`)

// car3.year = 2008
// console.log(`car = ${car} et car3 = ${car3}`)

car3 = { ...car }
console.log(car3)

car3.year = 2011
console.log(`année de car = ${car.year} et car3 = ${car3.year}`)
