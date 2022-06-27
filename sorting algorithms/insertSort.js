function insertSort(arr){
    for (let i = 1; i < arr.length; i++){
    console.log(i)
    let numberToInsert = arr[i]
      console.log(`N2I ${numberToInsert}`)
      let j = i - 1
      console.log(`j ${j}`)
      while(j >= 0 && arr[j] > numberToInsert){
        arr[j + 1] = arr[j]
        j = j -1 
      }
      arr[j+1] = numberToInsert
    }
  }
  
  const arr = [8, 20, -3, 4 , 9]
  
  insertSort(arr)
  console.log(arr)

//   Big 0 = O(n^2)