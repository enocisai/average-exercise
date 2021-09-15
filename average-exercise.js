// Get the average of x's amount of numbers 



function findAverage(array) {
    let average = 0;
    for (let i = 0; i < number.length; i++){
      let number = array[i]
      average += number;
    }
    average = average / array.length
    return average
  
}

console.log(findAverage([2,6, 76]))