import { observer } from "mobx-react-lite";
import cartStore from "../data/stores/cartStores";


export const Cart = observer(() => {
    return(
        <>
            {
                cartStore.cart.map(item => (
                    <div>
                        {item.name} : {item.price}
                    </div>
                ))
            }
        </>
    )
});