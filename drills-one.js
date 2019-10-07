const Array = require('./Array');

const main = () => {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(99);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);
  // When a 4th item is added to the array, its capacity is increased to 3 x length

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  // Removing the last three items from the array. Its length decreases by 3

  // Print the 1st item in the array arr.
  console.log(`First item in the array: ${arr.get(0)}`)

  for(let i = 0; i < arr.length; i++) {
    arr.pop()
  }
  arr.push('tauhida')
  console.log(arr.get(0))
  // This prints out NaN. The reason is that 'tauhida' is a string. The
  // reason is that 'memory' expects a value of type Float64Array
  
  
  /****************
  
  Q: What is the purpose of the _resize() function in your Array class?
  
  A: The _resize function allocates a new, larger chunk of memory, copying
  any existing values from the old to the new chunk, and free the old chunk
  
  ****************/

}

main()