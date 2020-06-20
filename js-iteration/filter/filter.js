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

const lala = numbers.filter(num => {
  if((num % 2) === 0) {
    return num;
  }
})