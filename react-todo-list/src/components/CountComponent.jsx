import React from 'react'

const CountComponents = ({count, handleIncrement, handleDecrement}) => {
  return (
    <div>
        <h1>Count: {count}</h1>
        <button 
        className='btn btn-success' 
        onClick={handleIncrement}>
        Increment
        </button>
        <button className='btn btn-danger'
        onClick={handleDecrement}>
        Decrement
        </button>
    </div>
  )
}

export default CountComponents