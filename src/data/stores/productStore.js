import { makeAutoObservable } from "mobx";

class ProductStore{
    products = [
        {
            name: "Смартфон Apple iPhone 11 128GB Black",
            price: 299990
        },
        {
            name: "Ноутбук HUAWEI MateBook D15 i3 10110U",
            price: 399990
        },
        {
            name: "Велосипед AVA 29, MD, 21, оранжевый",
            price: 119990
        },
        {
            name: "Песочный фильтр-насос INTEX X925, 3.5/2.0м3/ч",
            price: 83990
        },
        {
            name: "Телевизор LG 43 43UP76006LC LED UHD Smart Black",
            price: 224990
        },
        {
            name: "Ноутбук HUAWEI MateBook D15 i3 10110U",
            price: 399990
        }       
    ]

    constructor(){
        makeAutoObservable(this)
    }

    //method
    setProducts(products){
        this.products = products
    }

}

export default new ProductStore();