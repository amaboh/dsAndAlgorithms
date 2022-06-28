// Virtually split the array into a sorted and unsorted part.
// assume that the first element is already sorted and remaining elements are unsorted 
// Select an unsorted element and compare with all elements in the sorted part.

// If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part.Else shift , larger elements in the sorted part to towards the right.

// Insert the selected element at the right index.
// Repeat till allt the unsorted elements are placed in the right order. 

function quickSort(arr){

    if (arr.length < 2){
        return arr
    }
    
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length; i){
        if(arr[i] > pivot){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}