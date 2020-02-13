
// .map() from scratch

let myArray = ["Item1", "Item2", "Item3", "Item4"];

const mapFunction = (array) => {
  let mapArray = [];

  for (let i=0; i<myArray.length; i++) {
    mapArray[i] = myArray[i] + "-changed";
  }
  return mapArray;
} 

console.log(mapFunction(myArray));



// .reduce() from scratch

foodOrders = [["Burgers", 4], ["Fries", 2], ["Sodas", 4]];

const reduceFunction = (array) => {
  let accumulator = 0;

  for (let i=0; i<array.length; i++) {
    accumulator += array[i][1];
  }
  console.log (`You have placed ${accumulator} orders.`);
  return accumulator;
}

reduceFunction(foodOrders); 


// .filter() from scratch

let nums = [2, 4, 5, 8, 9, 10, 15];


const filterEvens = (array) => {

  for (let i=0; i<array.length; i++) {
    if (array[i] % 2 !== 0) {
      array.splice(i, 1);
    }
  }
  console.log(`Evens: ${array}`);
}

filterEvens(nums);
