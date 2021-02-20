import React from 'react';
import CheckOutProduct from './CheckOutProduct';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import axios from "./axios"
import { db } from "./firebase"

function Payment() {
    const [{cart, user} , dispatch] = useStateValue();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect( () => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getCartTotal(cart) *100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{
            
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_CART'
            })
            history.replace("/orders")
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error? e.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h2>
                    Checkout ({cart.length} {cart.length === 1 ? "item": "items"})
                </h2>
            </div>
        
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Address Street</p>
                        <p>City, State Zipcode</p>
                    </div>
                </div>
                
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items</h3>
                    </div>
                    <div className="payment_items">
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
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                renderText={(value) => (
                                        <h3>
                                            Order total: {value}
                                        </h3>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}/>

                                <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Place your order"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>} 
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
