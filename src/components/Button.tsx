import React from 'react'
import "./Button.css";
const Button = ({type, value}: 
  {type?: "button" | "submit" | "reset"; value?: string}) => {
  return (
    <button className='button-submit' type={type}>
      {value}
    </button>
  )
}

export default Button