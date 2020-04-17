// Navie way of doing pipe operations

const increment = (value) => ++value;
const decrement = (value) => --value;
const mulBy2 = (value) => value * 2;
const divBy2 = (value) => value / 2;

const initalValue = 1;

const incrementValue = increment(initalValue);
const doubleValue = mulBy2(incrementValue);
const decrementValue = decrement(doubleValue)

console.log('Naive way of doing it', decrementValue)

// Functional way of doing it

const pipe = [ increment, mulBy2, decrement, mulBy2, divBy2 ];

const result = pipe.reduce((acc, fn) =>  fn(acc), initalValue)

console.log('Functional way of doing it', result)
