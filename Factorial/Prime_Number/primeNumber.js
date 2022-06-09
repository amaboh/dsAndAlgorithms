// Prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 

// Given a natural number 'n', determine if the number is prime or not. 





const isPrime=(n)=>{
   if(n < 2){
       return false; 
   }
   for (let i=2; i < Math.sqrt(n); i++ ){
       if(n % i === 0){
           return false
       }
   }return true
}

isPrime(7)

// Big-O = O(sqrt(n))