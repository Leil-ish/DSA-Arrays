const Array = require('./Array');

const main = () => {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(99);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

  console.log(`First item in the array: ${arr.get(0)}`)

  for(let i = 0; i < arr.length; i++) {
    arr.pop()
  }
  arr.push('tauhida')
  console.log(arr.get(0))
  // This prints out NaN. The reason is that 'tauhida' is a string. The
  // reason is that 'memory' expects a value of type Float64Array
    
  //The _resize function allocates a new, larger chunk of memory, copying any existing values from the old to the new chunk, and freeing the old chunk
}

main()