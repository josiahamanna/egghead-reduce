const votes = [
  "react",
  "angular",
  "vanila",
  "view",
  "react",
  "angular",
  "react",
  "angular",
  "react",
  "view",
  "react",
  "angular",
  "angular",
  "react",
  "react",
  "angular",
  "angular",
];

const initialObj = {};

const reducer = (tally, item) => {
  tally[item] ? tally[item]++ : (tally[item] = 1);
  return tally;
};

const vote = votes.reduce(reducer, initialObj);

console.log("Votes: ", vote);
