import { createContext, useState } from "react"

export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    
    const [cartItems , setCartItems] = useState([])

    const addToCart = (itemId)=>{
        setCartItems([...cartItems, {id : itemId, count:1}])
    }
    const removeFromCart = (itemId)=>{
        setCartItems(cartItems.map((i)=>{
            if(i.id===itemId)
            return {...i, count : i.count-1 }
            else return i
        }))

    }

    const contextvalue = {cartItems, addToCart, removeFromCart }
    return <ShopContext.Provider value ={contextvalue}>{props.children}</ShopContext.Provider>

}
