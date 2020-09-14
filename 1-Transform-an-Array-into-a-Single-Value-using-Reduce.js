data = [1, 2, 3, 4];

const reducer = (accumulator, item) => accumulator + item;

const initialValue = 0;

const total = data.reduce(reducer, initialValue);

console.log("The sum is: ", total);
