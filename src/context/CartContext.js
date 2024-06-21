import { createContext } from "react"; //bracket syntax is a named import

const CartContext = createContext({
    //here create a default value context
    cart: {},
    increaseQuantity: ()=> { },
    decreaseQuantity: ()=> { }
})

export default CartContext;