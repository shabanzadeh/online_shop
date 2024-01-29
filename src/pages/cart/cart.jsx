import { useContext } from "react";

import {PRODUCTS} from "../../data/products"
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";
import React from "react";

const Card =()=>{
    const{cartItems} = useContext(ShopContext)
    return(
        <React.Fragment>
        <h1>Your Cart items</h1>
        <div className="row">
            {PRODUCTS.map((p)=>{
                if(cartItems.some((i)=> i.id===p.id && i.count>0))
                return <Product data={p}></Product>
            })}
          
            

        </div>
        </React.Fragment>
    )

}

export default Card;