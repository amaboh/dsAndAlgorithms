// Fibpnnaci sequence 
// GIven a number n find the first n elements of the Fibpnnaci sequence.

// The first two elements of the Fibpnnaci sequence are 0 and 1.
// fibonacci(2) = [0, 1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

 function fibonacci(n){
     const fib = [0, 1] //This lines initaites the first two const values in the fibonnaci sequence 

        //this loop sets the base function to determine when the fibonacci function should stop
         // i represents the array items of [0,1] and for i < n, the loop would increment by 1
     for (let i = 2  ; i < n; i++) { 
  
         fib[i]= fib[i - 2] + fib[i -1]
        //  the line above sum the two previous numbers in the array and puts in the fib array
     }
     return fib
 }

 console.log(fibonacci(5))
 console.log(fibonacci(10))


//      THE BIG O NOTATION OF THIS ALGORITHM IS: O(n) since the algorithm would run n times depending on the n input through the loop

