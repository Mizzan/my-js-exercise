// Exercise One - Turing String to number
const strings = ['1','2','3','4','5'];

const number = strings.map(str => parseInt(str))
console.log(number);


// Exercise Two - Adding stuff to array string

const fruits = ['apple', 'pear', 'cherry'];

const iLike = fruits.map(fruit => `I like ${fruit}.`)

console.log(iLike);

// Exercise three - Capitalizing the Word

let capitalizedFruits = [];

fruits.map(fruit => {
  const capi = fruit.toUpperCase()
  capitalizedFruits.push(capi);
});

console.log(capitalizedFruits);


// Exercise Four - Adding stuff {$} to the numbers

const prices = [5, 4.23, 6.4, 8.09, 3.20];

    // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const dollarBill = prices.map(dollar => `$${dollar}`)

console.log(dollarBill);