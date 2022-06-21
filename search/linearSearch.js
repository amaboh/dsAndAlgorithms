// Linear search: 
// Given an array of'n' elements d a target element 't', find the index of 't' in the array. 
// Return -1 if the target is not found


function linearSearch(arr, target){
    for (let i=0 ; i < arr.length; i++){
      if (arr[i] === target){
        return i
      }
    }
    return -1
  }

  console.log(linearSearch([2, 5, 8, 9, -1], -1))
  console.log(linearSearch([2, 5, 8, 9, -1], -1))

//   Big-O is linear 0(n)