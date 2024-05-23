//this
//Результат this зависит не от того где была создана функция
// результат зависит от того где была вызвана функция

//Не явное связывание
{
    function Some(){
        console.log(this.a);
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
        console.log(this.a);
    }

    const obj = {
        a:20
    }
    Some.call(obj)
}
//жесткое связывание
{
    function Some(el){
        console.log(this.a + el);
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
        console.log(this.a);
    }

    let some = new Some(10)
    //1) Создается новый объект 
    //2) This связывается с созданным объектом
}
