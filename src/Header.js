import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import Cart from "@material-ui/icons/ShoppingCart"
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"
                />
            </Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                <SearchIcon className="searchIcon"/>
            </div>
            
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div className="header_option" onClick={handleAuthentication}>
                        <span className="header_optionSmall">Hello {user ? user?.email : "Guest"}</span>
                        <span className="header_optionLarge">{user ? "Sign out" : "Sign in"}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionSmall">Returns</span>
                    <span className="header_optionLarge">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionSmall">Your</span>
                    <span className="header_optionLarge">Prime</span>
                </div>
                <Link to="/checkout" className="link">
                    <div className="header_optionCart">
                        <Cart className="shopping_cart"/>
                        <span className="item_count">{cart.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
