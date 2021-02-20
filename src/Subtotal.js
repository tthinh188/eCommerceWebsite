import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getCartTotal } from "./reducer"
import { Link, useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                        <p>
                            Subtotal ({cart.length} {cart.length === 1 ? "item": "items"}): <strong>{value}</strong>
                        </p>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <small className="subtotal_gift">
                <input type="checkbox"/> This order contains a gift
            </small>
            <button
                    disabled={cart.length === 0 ? true : false}
                    onClick={e => history.push("./payment")}
            >Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
