// chaining method to remove dublicate

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter((number, index, array) => index === array.indexOf(number)).map(num => `That unique number is ${num}`)

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Removing Object from inside an array
const users = [
  {name: 'Samir'},
  {name: 'Angela'},
  {name: 'Beatrice'}
];

const removeUser = users.filter(user => user.name !== 'Samir')

console.log(removeUser);