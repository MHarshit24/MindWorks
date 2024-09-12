import React from 'react';
import '../../../App.css';
import './SignUp.css';
import { Login } from "./Login";
import { Register } from "./Register";

function SignUp() 
{
  const [currentForm, setCurrentForm] = React.useState('register');

  const toggleForm = (formName) =>
  {
    setCurrentForm(formName);
  }
  
  return (
    <div className="SignUp">
      {
        currentForm === "register" ? <Register onFormSwitch = {toggleForm} /> : <Login onFormSwitch = {toggleForm} />
      }
    </div>
  );
}

export default SignUp;
