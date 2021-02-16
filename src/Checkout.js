import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider';
import CheckOutProduct from "./CheckOutProduct"

function Checkout() {

    const [ {cart} , dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <h2 className="checkout_title">Your Shopping Cart</h2>
               {cart.map((item) => (
                    <CheckOutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                    
               ))}
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
