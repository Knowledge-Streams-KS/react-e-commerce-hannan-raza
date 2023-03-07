import React, { useState } from 'react'

function CartCounter(count) {
    const [value,setValue]=useState(count.count);
    const handleIncrement=()=>{
        setValue(value + 1);
        console.log(value);
    }
    const handleDecrement=()=>{
        value>0 && setValue(value-1);
        console.log(value);
    }
  return (
    <div style={{display:'flex'}}>
    <button onClick={handleIncrement}>+</button>
    <p>{value}</p>
    <button onClick={handleDecrement}>-</button></div>
  )
}

export default CartCounter