// Exercise One - Refactoring the total calculation done with forEach using reduce
const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let total = prices.reduce((acc, cur) => acc + cur,0)
console.log(total);


// Exercise Two - Name Start with G and count it.

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

    // Result: 4

const nameCount = names.reduce((count, name) => {
  if(name[0] === 'G') {
    return count + 1;
  }
  return count;

}, 0)

console.log(nameCount)


// Exercise Three - Phone number starts with 503

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((count, number) => {
  if(number.startsWith('503',1)) {
    return count + 1;
  }
  return count;
}, 0)

console.log(numberOf503);