import React, { useState } from "react";

export const Login = (props) =>
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>LogIn</h2>
            <form className = "login-form"  onSubmit = {handleSubmit}>
                <label htmlFor = "email">Email</label>
                <input value = {email} onchange={(e) => setEmail(e.target.value)} type = "email" placeholder = "youremail@gmail.com" id = "email" name = "email" />
                <label htmlFor = "password">Password</label>
                <input value = {pass} onchange={(e) => setPass(e.target.value)} type = "password" placeholder = "********" id = "password" name = "password" />
                <button>Log In</button>
            </form>
            <button className="lnk-btn" onClick = {() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}