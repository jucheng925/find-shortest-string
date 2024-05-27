function findShortestString(arr) {
  const array = []
  for (let i =0; i < arr.length; i++) {
    array.push(arr[i].length)
  }
  let small = Math.min(...array)
  let index = array.indexOf(small)
  return arr[index]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'tim'");
  console.log("=>", findShortestString(['anna', 'tim', 'albert', 'jim']));

  console.log("");

  console.log("Expecting: 's'");
  console.log("=>", findShortestString(['ab1', 's', '23bda', '2']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
