//this
//Результат this зависит не от того где была создана функция
// результат зависит от того где была вызвана функция

//Не явное связывание
{
    function Some(){
       // console.log(this.a);
    }

    const obj = {
        a:10,
        func:Some//это ссылка на функцию то есть obj является держателем ссылки 
    }
    obj.func()
}
//явное связывание
{
    function Some(){
       // console.log(this.a);
    }

    const obj = {
        a:20
    }
    Some.call(obj)
}
//жесткое связывание
{
    function Some(el){
       // console.log(this.a + el);
    }

    const obj = {
        a:20
    }

    let result = Some.bind(obj)//потому что в отличае от call aplly мы можем ее передать в переменную
    result(50)
    Some.call(obj)//и мы не можем ее никак переопределить
}
//связывание через new
{
    function Some(a){
        this.a = a
       // console.log(this.a);
    }

    let some = new Some(10)
    //1) Создается новый объект 
    //2) This связывается с созданным объектом
}

//Object
{
  //поверхностное копирование объектов
  const obj = {
    value:10
  }
  const newObj1 = Object.create(obj)//этот метод копирует объект но при вызове в логи там пусто 
  // а если обратиться к свойствам они выводятся как внизу
  console.log(newObj1.value);//vlaue = 10

  const someObj = {
    newValue:11
  }
  const newObj2 = Object.assign({},obj,someObj)
  //Этот метод принимает в качестве первого аргумента , объект получатель, и несколько объектов которые 
  //нужно объеденить в один
  // но если у объектов одинаковые свойства в исходный объект попадет только последний
  console.log(newObj2);//{ value: 10, newValue: 11 }





  
  //глубокое копирование
  //посредством spred или ... мы так же можем копировать объекты и даже вложенные
  const spredObj = {
    ...obj,
    ...someObj
  }
  console.log(spredObj);//{ value: 10, newValue: 11 }

  //так же есть и другой способ но он не такой хороший
  //данный метод тоже копирует объект типо глубоко
  // НО если в объекте есть методы или даты он с ними не работает
  const jsonObj = JSON.parse(JSON.stringify(spredObj))
  console.log(jsonObj);//{ value: 10, newValue: 11 }

  //и самый последний способ structuredClone этот метод вроде как копирует объект глубоко
  const structObj = structuredClone(jsonObj)
  console.log(structObj);//{ value: 10, newValue: 11 }


}
