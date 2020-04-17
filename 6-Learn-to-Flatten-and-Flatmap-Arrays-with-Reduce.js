const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatenedData = data.reduce((acc, item) => {
    acc.push(...item)
    return acc
}, [])

console.log('Flatened Data', flatenedData)

// exmaple of objects
// the object has a list whose values are repeated
// We don't want those repeated values in our result

const objWithList = [
    {
	list: [1, 2, 3]
    },
    {
	list: [3, 4, 5]
    },
    {
	list: [5, 6, 7]
    }
];

const flatenedOjbWithList = objWithList.reduce((acc, item) => {
    item.list.forEach(listItem => {
	if (acc.indexOf(listItem) == -1) {
	    acc.push(listItem);
	}
    })
    return acc;
}, [])

console.log('flatenedOjbWithList', flatenedOjbWithList);

// Example of reverse Reducing

const dataWithChar = [1, 2, 3, 4, "5"];

const strightReduce = dataWithChar.reduce((acc, item) => acc + item, 0)

console.log('strightReduce', strightReduce)

const reverseReduce = dataWithChar.reduceRight((acc, item) => acc + item, 0)

console.log('reverseReduce', reverseReduce)
