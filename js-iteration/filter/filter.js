// Exercise One - filtering certain names

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let nameWithS = [];

names.filter(name => {
  if(name.charAt(0) === 'S') {
    nameWithS.push(name)
  }
})

console.log(nameWithS);



// Exercise Two - Returing or filtering certain numbers

const numbers = [1,2,3,4,5,6,7,8,9,10];

    // Result: [2,4,6,8,10]

const even = numbers.filter(num => num % 2 === 0)



// Exercise Three

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below
century20 = years.filter(year => year >= 2000)
console.log(century20)