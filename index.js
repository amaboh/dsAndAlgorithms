// which of the two algorithms would be more efficient for performance? 

// Problem: Write a program to sum a number from 0 to n, with each sequence after 1 up till n: 

// Algo 1: 

const sumUpTo = n =>{
    let total = 0;
    for (let i=1; i<n; i++){
        total += i;
    }
    return total;
};

// Takes 1* N operations: since the loop is going to run for the number of times it would take to reach n. 
// Thus Big O is linear and scales according to the input size O(n)




const sumUpTo1 = n =>{
    return(n * (n - 1) / 2);
}; //

// Takes 3 operations (* - ?), no matter how large N is! Thus Big O is constant 0(1)
