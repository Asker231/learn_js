
//test
{

}



//binary search
{
    

    const BinarySearch=() =>{

        let array = [1,2,3,4,5,6,7,8,9,10]

        let start = 0

        let end  = array.length-1

        let target = 4

        let middle;

        while(true){
            middle = Math.floor((start+end) / 2)
            if(array[middle] === target){
                console.log(array[middle]);
                return array[middle]
            }
            if(array[middle] < target){
                start = array[middle] + 1
            }
            if(array[middle] > target){
                end = array[middle] - 1
            }
        }
    }
}

//get min and max array
{
    let array = [567,322,1982,11,998,23,16,576,123,11,98]
    const setArray = new Set(array)
    array = [...setArray]
    
    for(let i = 0;i < array.length;i++){
        for(let k = 0; k<array.length-1-i;k++){
            if(array[k] > array[k+1]){
                let bufer = array[k]
                array[k] = array[k+1]
                array[k+1] = bufer
            }
        }
    }
    let [min] = array
    let max = array[array.length-1]
    console.log("min is : " + min, "max is: " + max);

}