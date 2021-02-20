import React from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { useState } from "react"
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    // const register = e => {
    //     e.preventDefault();
    //     auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //         console.log(auth);
    //         if(auth) {
    //             history.push('/')
    //         }
    //     }).catch(error => alert(error.message))
    // }   


    return (
        <div className="login">
            <Link to="/">
                <img
                className="login_logo"
                src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"
                />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange= {e => setEmail(e.target.value)}
                    />
                    
                    <h5>Password</h5>
                    <input 
                        type='password'
                        value={password}
                        onChange= {e => setPassword(e.target.value)}

                    />
                    <button
                        type="submit"
                        className="login_signin"
                        onClick={signIn}
                        > Sign in</button>
                    </form>

                    <Link to="/register">
                        <button 
                            className="login_registration"> Create Account
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default Login
