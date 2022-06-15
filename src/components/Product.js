import { observer } from "mobx-react-lite";
import productStore from "../data/stores/productStore";
import cartStore from "../data/stores/cartStores";


export const Product = observer(() => {

    const handleClick = (item) => {
        console.log(item);
        cartStore.addProduct({name: item.name, price: item.price})
    }

    return(
        <div className="products">
            {
            productStore.products.map(item => (
                <div className="product">
                    <div className="title">{item.name}</div>  
                    <div className="price">{item.price} ₸</div>
                    <button onClick={() => handleClick({name: item.name, price: item.price})}>В корзину</button>  
                </div>
            ))}
        </div>
    )
});