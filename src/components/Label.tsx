import React from 'react'
import "./Label.css"
const Label = ({value, htmlFor}: {value: string; htmlFor: string}) => {
  return (
    <label className='label' htmlFor={htmlFor}>{value}</label>
  )
}

export default Label