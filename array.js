//forEach
{
    let arr = [1,2,3,4,5,6,7]
    arr.forEach((el)=>el+1)
    //return numbers 2,3,4,5,6,7,8
}
//map
{
    let arr = [1,2,3,4,5,6,7].map((el)=>el*2)
    //return new array where value = [2,4,6,8,10,12,14]

}
//reduce
{
    let arr = [1,2,3,4,5,6,7].reduce((acc,element)=>acc+element,10)
    //retunr a total number = 38
}
//slice
{
    let arr = [1,2,3,4,5,6,7].slice(1,3)
    //return slice index 1-3 =  [2,3]

}
//splice
{
    let arr = [1,2,3,4,5,6,7]
     arr.splice(0,2,...[9,12])
     //retunr splice array [9,12,3,4,5,6,7]

}
//for of
{
    let arr = [1,2,3,4,5,6,7]
    for(let i of arr){
        //return value [1,2,3,4,5,6,7]
    }
}
//find
{
    let arr = [
        {userName:"Asker",age:26},
        {userName:"Hloe",age:27}
    ]
    let person = arr.find((el)=>el.age === 27)
    //return item {userName:"Hloe",age:27}
}
//findIndex
{
    let arr = [
        {userName:"Asker",age:26},
        {userName:"Hloe",age:27}
    ]

    let person = arr.findIndex((el)=>el.userName === "Asker")
    console.log(person);
    //return index elem == 0 {userName:"Asker",age:26}
}
//destructure
{
    let arr = [
        {userName:"Asker",age:26},
        {userName:"Hloe",age:27}
    ]
    let [first,second] = arr
    //first = {userName:"Asker",age:26}
    //second = {userName:"Hloe",age:27}
}
//reverce
{
    let arr = [
        {userName:"Asker",age:26},
        {userName:"Hloe",age:27}
    ].reverse()
    //retunr reverse array [{userName:"Hloe",age:27},{userName:"Asker",age:26}]
}
//Syblol.iterator

{

    
  
}

