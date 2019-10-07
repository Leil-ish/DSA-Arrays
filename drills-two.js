const urlify = (s) => {
    // Complexity is O(1)
    console.log(s.split(' ').join('%20'))
  }
  
  const filter5 = (arr) => {
    // Complexity is O(n)
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i]
      if (val >= 5) {
        tempArr.push(val)
      }
    }
    return tempArr
  }
  
  const maxSum = (arr) => {
    // Complexity is O(n^k)
    let max = -Infinity
    let sum
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        sum = 0;
        for (let k = i; k <= j; k++) {
          sum += arr[k]
        }
        if (sum > max) {
          max = sum
        }
      }
    }
    return max
  }
  
  const mergeArrays = (arr1, arr2) => {
    // Complexity is O(1)
    return [...arr1, ...arr2].sort((a, b) => a - b)
  }
  
  const removeChars = (phrase, charsToRemove) => {
    // Complexity is O(n)
    let newPhrase = ''
    for (let j = 0; j < phrase.length; j++) {
      let character = phrase[j]
      if (!charsToRemove.includes(character)) {
        newPhrase += character
      }
    }
    return newPhrase
  }
  
  const getProducts = (arr) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
      let tempArray = arr.filter((item, k) => {
        return k !== i
      })
      let p = tempArray[0]
      for (let j = 1; j < tempArray.length; j++) {
        p *= tempArray[j]
      }
      newArray.push(p)
    }
    return newArray
  }
  
  const get2dArray = (arr2D) => {
    // Complexity is O(n)
    let cols = []
    let rows = []
    let table = []
  
    for(let i = 0; i < arr2D.length; i++) {
      let arr1D = arr2D[i]
      for(let j = 0; j < arr1D.length; j++) {
        if(arr1D[j] === 0) {
          if(!cols.includes(j)) cols.push(j)
          if(!rows.includes(i)) rows.push(i)
        }
      }
    }
    for(let k = 0; k < arr2D.length; k++) {
      let row = arr2D[k].map((item, i) => cols.includes(i) ? 0 : 1)
      if(rows.includes(k)) {
        // Create a row of all 0s and add to table
        table.push(row.map(item => 0))
      } else {
        // Add row to the table as-is
        table.push(row)  
      }
    }
    
    return table
  }
  
  const rotateString = (word, i) => {
    console.log(word)
    if(i === word.length - 1) {
      return word
    }
    let newWord = word.substring(word.length-1) + word.substring(0, word.length - 1)
    i++
    rotateString(newWord, i)
  }
  
  const main = () => {
    console.log('\n----------------\n')
    // Replace spaces with %20
    urlify('tauhida parveen')
    urlify('www.thinkful.com /tauh ida parv een')
  
    console.log('\n----------------\n')
  
    // Filter out values less than 5
    const nums = []
    for (let i = 0; i < 10; i++) {
      nums.push(i)
    }
    const numsFivePlus = filter5(nums)
    console.log('Original array: ', nums)
    console.log('Filtered array: ', numsFivePlus)
  
    console.log('\n----------------\n')
  
    // Get max sum in an array
    const inputArray = [4, 6, -3, 5, -2, 1]
    console.log(`Max sum of array [${inputArray}] is ${maxSum(inputArray)}`)
  
    console.log('\n----------------\n')
  
    // Merge arrays
    const array1 = [1, 3, 6, 8, 11]
    const array2 = [2, 3, 5, 8, 9, 10]
    console.log(mergeArrays(array1, array2))
  
    console.log('\n----------------\n')
  
    // Remove characters from a phrase
    console.log(`Remove 'aeiou' from 'Battle of the Vowels: Hawaii vs. Grozny':`)
    console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))
  
    console.log('\n----------------\n')
  
    // Calculate products of array
    const arrayOfNums = [1, 3, 9, 4]
    console.log(`Calculate products of an array ${arrayOfNums}: ${getProducts(arrayOfNums)}`)
  
    console.log('\n----------------\n')
  
    // Find 0 values and set row + column to 0
    const arrayToSearch = [
      [1, 0, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    console.log('Set row and column to 0 when we find a 0 in the input array')
    console.log('Input\n', arrayToSearch)
    console.log('Output\n', get2dArray(arrayToSearch))
  
    console.log('\n----------------\n')
  
    // String rotation
    const word = 'Amazon'
    console.log(`Rotating String '${word}'`)
    rotateString(word, 0)
  
    console.log('\n----------------\n')
  }