import { useState } from "react";

export const Register = (props) =>
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className = "register-form" onSubmit = {handleSubmit}>
                <label htmlFor = "name">Full Name</label>
                <input value = {name} name = "name" id = "name" placeholder = "Full Name" />
                <label htmlFor = "username">Username</label>
                <input value = {username} name = "username" id = "username" placeholder = "Username" />
                <label htmlFor = "email">Email</label>
                <input value = {email} onchange={(e) => setEmail(e.target.value)} type = "email" placeholder = "youremail@gmail.com" id = "email" name = "email" />
                <label htmlFor = "password">Password</label>
                <input value = {pass} onchange={(e) => setPass(e.target.value)} type = "password" placeholder = "********" id = "password" name = "password" />
                <button>Register</button>
            </form>
            <button className="lnk-btn" onClick = {() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}