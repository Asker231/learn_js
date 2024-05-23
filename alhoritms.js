
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

//bubble sort
{
   Array.prototype.sortByAsker = function(array){
        for(let i = 0; i< array.length;i++){
            for (let elem = 0; elem < array.length-1-i; elem++) {
                if(array[elem] > array[elem + 1]){
                    let buffer = array[elem]
                    array[elem] = array[elem+1]
                    array[elem+1] = buffer
                }
            }
        }
   }

   let array = [2,1,5,34,6545644,1123,9].sortByAsker()
}