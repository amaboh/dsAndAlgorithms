// Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.


function recursiveBinarySearch(arr, target){
    return search(arr, target, 0 , arr.length -1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)

    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex -1)
    }else{
        return search(arr, target, middleIndex +1, rightIndex)
    }
}

console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], 10))
console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], 3))
console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], 8))
console.log(recursiveBinarySearch([-5, 2, 6, 8, 10], -5))

// Big ) = O(logn)


