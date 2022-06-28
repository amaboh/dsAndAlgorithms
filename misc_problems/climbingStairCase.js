
// At any given time, you can climb either 1 step or 2 stpes
// if you haveto climb to steps 'n', we can only climb from step 'n-1' or 'n-2'
// calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two
// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

function climbingStairCase(n){
    let numbOfWays = [1, 2]

    for(let i = 2; i < n; i++){
        numbOfWays[i] = numbOfWays[i - 1] + [numbOfWays[i - 2]]
    }
    return numbOfWays[n - 1]
}

console.log(climbingstairCase(5))
console.log(climbingstairCase(2))
console.log(climbingstairCase(6))