//new 
{

    function Cart(){
        this.array = []
    }

    Cart.prototype.addCart = function(obj){
       return this.array.push(obj)
    } 

    Cart.prototype.increment = function(id){
        this.array.forEach((el)=>{
            if(el.id === id){
                el.count += 1
            }
        })
    } 

    Cart.prototype.deleteItem = function(id){
       this.array =  this.array.filter((el)=> el.id === id)
    }

    Cart.prototype.getArray = function(){
        return this.array
    }
    //add item
    //counter
    //delete item


    let cart = new Cart()

    cart.addCart({id:1,name:"Asker",count:0})
    cart.addCart({id:2,name:"Hloe",count:0})
    cart.increment(1)
    console.log(cart.getArray());


}

{
    class Item{
        id
        name
        count
        constructor(id,name,count){
            this.id = id
            this.name = name
            this.count = count
        }
    }

    class Cart{
        #array = []

        addCart(obj){
            if(obj instanceof Item){
                this.#array.push(obj)
            }else{
                return
            }
        }

        increm(id){
            for(let i of this.#array){
                if(id === i.id){
                    return i.count++
                }
            }
        }

        getItems(){
            return this.#array
        }

        removeItem(id){
               this.#array = this.#array.filter((el)=>{
                    return el.id !== id
               }) 
        }

    }
    let cart = new Cart()
    cart.addCart(new Item(1,"Some item",0))
    cart.increm(1)
    cart.removeItem(1)
    console.log(cart.getItems());
}


