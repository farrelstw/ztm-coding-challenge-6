// Question no 1
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// Answer

let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function organizeArray(arr) {
  // Sort the input array
  arr.sort((a, b) => a - b);

  let result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    // If the current element is equal to the next one, push it to the temp array
    if (arr[i] === arr[i + 1]) {
      temp.push(arr[i]);
    }
    // If the current element is not equal to the next one, push it to the result array
    else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  // Flatten any sub-arrays that only contain one element
  result = result.map((x) => (x.length === 1 ? x[0] : x));

  return result;
}

// Answer for bonus question

function organizeArray(arr) {
  // Separate the input array into numbers and strings
  let numbers = arr
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
  let strings = arr.filter((item) => typeof item === "string").sort();

  // Apply the existing logic to the numbers array
  let resultNumbers = organize(numbers);

  // Apply the existing logic to the strings array
  let resultStrings = organize(strings);

  // Combine the results
  return [...resultNumbers, ...resultStrings];
}

function organize(arr) {
  let result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  result = result.map((item) => (item.length === 1 ? item[0] : item));

  return result;
}
