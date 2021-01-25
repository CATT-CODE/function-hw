const identity = function (value) {
  return value;
};




const first = function (array, n) {
  if (n === undefined) {
    return array[0]
  } else {
    return array.slice(0, n);
  }
};

const last = function (array, n) {
  return (n === undefined) ? array[array.length - 1]
        : (array.length < n) ? array
        : (n === 0) ? []
        : array.slice(-n)
};

let animals = ["cat", "dog", "rat"]

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    
    for (i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
  }
}
  else if (collection instanceof Object) {

    for (const prop in collection) {
      iterator(collection[prop], prop, collection)
    }
  }
};


 //?

numbers = [1, 5, 7, 39, 40, 40, 40, 45]

const indexOf = function (array, target) {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return result = i
      }
    }
  return result
};

indexOf(numbers, 40) //?

const map = function (collection, iterator) {
  results = [];
  for (let i = 0; i < collection.length; i++) {
    results.push(iterator(collection[i]));
  }
  return results;
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
