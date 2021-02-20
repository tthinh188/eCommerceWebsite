import React from 'react'
import "./Register.css"
import { Link, useHistory } from "react-router-dom";
import { useState } from "react"
import { auth } from "./firebase";

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = e => {
        e.preventDefault();

        if(password === confirmPassword) {
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push('/login')
                }
            }).catch(error => alert(error.message))
        }
        else {
            alert("Fail to confirm Password")
        }
    }   

    return (
        <div className="register">
            <Link to="/">
                <img
                className="register_logo"
                src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"
            />
             </Link>

            <div className="register_container">
                <h1>Register</h1>
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

                    <h5>Confirm password</h5>
                    <input 
                        type='password'
                        value={confirmPassword}
                        onChange= {e => setConfirmPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="register_signin"
                        onClick={register}
                        > Register</button>
                    </form>

                    <Link to="/login">
                        <button>Back to Login</button>
                    </Link>

            </div>
        </div>
    )
}

export default Register
