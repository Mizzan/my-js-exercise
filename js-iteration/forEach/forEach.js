// for loop Vs forEach method

const fruits = ['apple', 'pear', 'cherry', 'mango', 'banana'];

// using for loop instead forEach
// for(i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// using the forEach method
// function handleArray(fruit) {
//   console.log(fruit);
// }

// fruits.forEach(handleArray)


// The Good and Bad of forEach and for loop
// forEach is easy to readable and understandable
// forEach is easier for avoiding bugs ( like infinite loops in for loop)
// forEach can not break out early means I can not break out from forEach ( like break or continue)
// if i need to break out i should use for of or for in :D


// for loop is complex to read and variable needs to be declared
// for loop can be break out



// practice

const prices = [6.75, 3.10, 4.00, 8.12];

    // Total: 21.97

    // let total = 0;
    // prices.forEach(price => {
    //   total += price;
    // })
    // console.log(total);


const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

// names.forEach(name => {
//   if(name[0] === 'S') {
//     console.log(name);
//   }
// })

    // Result: ['Selma', 'Sam', 'Sharon'];