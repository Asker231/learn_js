
//immutable array
{
    let arr = [1,2,3]

    let newArray = [
        ...arr,
        3,4,5
    ]
    
}

//bubble sort
 {
    let arr = [10,9,8,7,6,5,4,3,2,1]

    for(let i = 0;i<arr.length;i++){
        for(let el = 0; el<arr.length-1-i;el++){
            if(arr[el] > arr[el+1]){
                let bufer = arr[el]
                arr[el] = arr[el+1]
                arr[el+1] = bufer
            }
        }
    }
 }
//binary search
{
    let arr = [10,9,8,7,6,5,4,3,2,1]
    for(let i = 0; i< arr.length;i++){
        for(let el = 0; el<arr.length-1-i;el++){
            if(arr[el] > arr[el+1]){
                let bufer = arr[el]
                arr[el] = arr[el+1]
                arr[el+1] = bufer
            }
        }
    }
    let start = 0;
    let end = arr.length-1;
    let middle;
    let current = 7
    while(true){
        middle = Math.floor((start+end)/2)
        if(arr[middle] == current){
            let resSum = arr.reduce((acc,el)=>acc+el,arr[middle])
            console.log(resSum);
            return  resSum
        }
        if(arr[middle] > current){
            end = arr[middle]   - 1
        }
        if(arr[middle] < current){
            start = arr[middle] + 1
        }
    }
}
