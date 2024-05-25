
{
    const obj = {
        getAge(value){
            return 2024 - value
        }
    }
    function Person(name,age){
            //this = {}
            //this.[[Prototype]] = Person.prototype
            this.name = name
            this.age  = age
            //return this
    }

    Person.prototype = obj

    let person = new Person("ASker",26)
    console.log(person.getAge(1998));
}


