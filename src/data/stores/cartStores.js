import { makeAutoObservable } from "mobx";

class CartStore{
    cart = []

    constructor(){
        makeAutoObservable(this)
    }

    //method
    setCart(cart){
        this.cart = cart
    }

    addProduct(item){
        this.cart.push(item)        
    }

}

export default new CartStore();