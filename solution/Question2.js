//Question no 2
//Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

//Answer

function findSum(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = [];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        temp.push(arr[i], arr[j]);
        result.push(temp);
      }
    }
  }

  return result;
}

console.log(findSum([1, 2, 3], 4));
