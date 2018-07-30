var nameVar = 'shane';
var nameVar = 'tom';
console.log('nameVar', nameVar);

let nameLet = 'jen';
nameLet = 'sarah';
console.log('nameLet', nameLet);

const nameConst = 'frank';
console.log('nameConst', nameConst);

// block scoping

var fullName = 'Shane Howley';

if (fullName) {
    var FirstName = fullName.split(' ')[0];
    console.log(FirstName);
}