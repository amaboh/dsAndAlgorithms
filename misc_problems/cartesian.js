// Given two finite non-empty sets, find their Cartesian Product.

// In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AXB, is the set of all ordered pairs(a,b) where a is in A and b is B.

// const A = [1,2]
// const B = [3,4]
// A x B = [[1,3], [1,4], [2,3], [2,4]]
// const C = [1, 2]
// const D = [3, 4, 5]
// CxD = [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]

function catesian(arrA, arrB){
    let result = []
  
    for(let i=0; i < arrA.length ; i++){
      for(let j = 0; j < arrB.length; j++){
        result.push([arrA[i], arrB[j]])
      }
    }
    return result
  }
  
  const arrA = [4, 2]
  const arrB = [3, 4, 5]
  console.log(catesian(arrA, arrB))