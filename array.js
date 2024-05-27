//forEach
//Этот метод в качестве предиката принимает функцию которая срабатывает для каждого элемента
//forEach не возвращает новый массив
{
    let array = [1,2,3]
    array.forEach((el)=>{
        console.log(el+1);
    })
}
//map
//напротив этот метод возвращает новый массив
{
 let array = [1,2,3]
 let res = array.map((el)=>{
    return el + 2
 })
 console.log(res);
}
//reduce
//данный метод аккумулирует елементы если это надо и принимает в качестве предиката функцию , 
//а вторым аргументом число которое надо добавить к результату 
//он не возвращает массив 
//возвращает число
{
   let array = [1,2,3]
   let res = array.reduce((acc,el)=>{
    return acc+=el
   },10)
   console.log(res);
}
//slice
//проще говоря возвращает срез массива 
{
  let array = [1,2,3,4,5,6]
  let res = array.slice(0,2)//[1,2]
  console.log(res);

}
//splice
//отличается метод тем что переданные индексы удаляются и при желании можно их заполнить 
{
  let array = [1,2,3,4,5,6,7]
  array.splice(1,1,12)//[1,12,3,4,5,6,7]
  console.log(array);

}
//for of
//проводит перебор значений а не индексов
{
 let array = [1,2,3]
   for(let i of array){
    console.log(array);
   } 
}
//find
{
    let array  = [
        {
            name:"Jhon",
            age:22
        },
        {
            name:"Asker",
            age:34
        }
    ]
    let res = array.find((el)=>el.name === "Asker")

    console.log(res);//{ name: 'Asker', age: 34 }
}
//findIndex
//аналог find но возвращает индекс 
{
    let array  = [
        {
            name:"Jhon",
            age:22
        },
        {
            name:"Asker",
            age:34
        }
    ]
    let res = array.findIndex((el)=>el.name === "Asker")
    console.log(res);//1

}
//destructure
//деструктуризация способ вытащить из объекта или массива то что нам надо
{
    let array  = [
        {
            name:"Jhon",
            age:22
        },
        {
            name:"Asker",
            age:34
        }
    ]

    const[firstobject,...other] = array
    console.log(firstobject);//{ name: 'Jhon', age: 22 }
}
//reverce
//метод говорит сам за себя
{
    let array = [1,2,3]
    console.log(array.reverse());
}
//Syblol.iterator
{
    let array = [1,2,3]
    let iter = array[Symbol.iterator]()
    console.log(iter.next());///{ value: 1, done: false }
}

