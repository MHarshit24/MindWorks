import React, { useState } from "react";
import '../../../App.css';
import './LogIn.css';
import { Login } from "./Log-in";
import { Register } from "./Register";

function LogIn() 
{
  const [currentForm, setCurrentForm] = React.useState('login');

  const toggleForm = (formName) =>
  {
    setCurrentForm(formName);
  }
  
  return (
    <div className="LogIn">
      {
        currentForm === "login" ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm} />
      }
    </div>
  );
}

export default LogIn;