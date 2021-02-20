import React from 'react'
import "./CheckOutProduct.css"
import { useStateValue } from './StateProvider';

function CheckOutProduct({id, image, title, price, rating, hideButton}) {
    const [state, dispatch] = useStateValue();

    const removeFromCart = () => {
        // add the item to the data layerz
        dispatch ({
            type: 'REMOVE_FROM_CART',
            item: {
                id: id,
            },
        });
    };
    
    return (
        <div className="checkoutProduct">
            <img 
                className="checkoutProduct_image"
                src={image}
            />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                { !hideButton && <button onClick={removeFromCart}>Remove from Cart</button> }

            </div>
        </div>
    )
}

export default CheckOutProduct
