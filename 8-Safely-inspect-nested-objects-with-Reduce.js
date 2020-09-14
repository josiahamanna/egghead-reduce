// When there is no property inside object
// handling such situations using reduce

const data = [
  {
    list_name: "list A",
    list: {
      property_a: {
        present: true,
      },
      property_b: {
        present: true,
      },
    },
  },
  {
    list_name: "list B",
    list: {
      property_b: {
        present: true,
      },
    },
  },
];

const hasProperty = (list) => {
  const path = "list.property_a.present";
  return path.split(".").reduce((obj, field) => {
    if (obj) {
      return obj[field];
    }
    return false;
  }, list);
};

// Naive way of doing it
/*data.forEach(item => {
    console.log(`${item.list_name} has property_a: ${item.list.property_a.presnt}`) 
})*/

// using reduce
data.forEach((item) => {
  console.log(`${item.list_name} has property_a: ${hasProperty(item)}`);
});
