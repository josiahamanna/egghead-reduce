// Reduce signature: accumulator, item, index, the whole array
const reducer = (acc, item, index, array) => {
    // sum
    intermediaryValue = acc + item;

    // if it is the last element, then return mean
    if(index === array.length - 1) {
       return intermediaryValue / array.length;
    }

    // If not last element, return the intermediary value
    return intermediaryValue
}

const data = [1, 2, 3, 4]

const mean = data.reduce(reducer, 0)

console.log('average', mean)
