
// .map() from scratch

const mapArray = (transformFunc, array) => {
  let transformedArray = [];
  for (let i = 0; i < array.length; i++) {
    transformedArray.push(transformFunc(array[i]));
  }
  return transformedArray;
}

let array = ["Value1", "Value2", "Value3", "Value4"];

const changeValue = (value) => {
  return value + "-changed";
}

console.log(mapArray(changeValue, array));



// .reduce() from scratch

const reduceFunc = (func, array, accumulator) => {
  for (let i = 0; i < array.length; i++) {
    accumulator += func(array, i);
  }
  return accumulator;
}

let foodOrders = [["Burgers", 4], ["Fries", 2], ["Sodas", 4]];
let orderTotal = (array, order) => { 
  return array[order][1]; 
};

console.log(reduceFunc(orderTotal, foodOrders, 0));




// .filter() from scratch


const filterByTrue = (filterFunc, array) => {
  for (let i = 0; i < array.length; i++) {
    if (filterFunc(array[i]) !== true) {
      array.splice(i, 1);
    }
  }
  return array;
}

let nums = [2, 4, 5, 8, 9, 10, 15];

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
}

console.log(filterByTrue(isEven, nums));
