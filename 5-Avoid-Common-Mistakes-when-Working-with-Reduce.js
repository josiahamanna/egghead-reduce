// Aways pass the initial value for the reduce method
const data = [1, 2, 3, 4]

const reducer_number = (acc, item) => acc+item

const sum = data.reduce(reducer_number)

console.log(sum) // 10 assuming first element as the initial value

const vote = ['vote1', 'vote2', 'vote1', 'vote2']

const reducer_object = (acc, item) => {
    if(acc[item]) {
        acc[item]++;
    } else {
        acc[item] = 1;
    }
    // Always remember to return or else it is going to yell
    return acc
}

const count_vote = vote.reduce(reducer_object)

console.log(count_vote) // vote1, because everytime it assumes the string vote1 to be the initial value
