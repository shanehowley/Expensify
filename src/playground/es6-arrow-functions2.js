// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
    // console.log(arguments);
return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Shane',
    cities: ['Dublin', 'New York', 'Belfast'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived()); 


const multiplier = {
    numbers:[10, 20, 30],
    multilpleBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multilpleBy);
    }
};

console.log(multiplier.multiply())