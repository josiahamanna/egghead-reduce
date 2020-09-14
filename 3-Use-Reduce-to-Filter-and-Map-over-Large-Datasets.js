const data = [2, 1, 4, 3, 6, 5];
console.log("data", data);

// use reduce for doubling the elements in data
const reduceDouble = data.reduce((acc, item) => {
  acc.push(item * 2);
  return acc;
}, []);
console.log("Doubling elements using reduce", reduceDouble);

// use map for doubling the elements in data
const mapDouble = data.map((item) => item * 2);
console.log("Doubling elements using map", mapDouble);

// pushing only even number using reduce
const reduceOnlyEven = data.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc.push(item);
  }
  return acc;
}, []);
console.log("Pushing only even using reduce", reduceOnlyEven);

// Pushing only even using filter
const filterOnlyEven = data.filter((item) => item % 2 === 0);
console.log("Pushing only even using filter", filterOnlyEven);

// Filter only even and double using filter and map
const filterMaped = data
  .filter((item) => item % 2 === 0)
  .map((item) => item * 2);
console.log("Filter and double using filter and map", filterMaped);

// Time required for large data
const bigData = [];
for (let i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

// Using filter and map
console.time("using filter and map");
const bigDataFilterMap = bigData
  .filter((item) => item % 2 === 0)
  .map((item) => item * 2);
console.timeEnd("using filter and map");

// Using reduce
console.time("using reduce");
const bigDataReduce = bigData.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc.push(item * 2);
  }
  return acc;
}, []);
console.timeEnd("using reduce");
