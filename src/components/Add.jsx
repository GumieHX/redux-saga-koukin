import React from 'react'
import { useDispatch } from 'react-redux'

const Add = () => {

  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: 'ADD' })
  }

  return (
    <div>
        <p>Add Page</p>
        <button onClick={() => { add() }}>Add</button>
    </div>
  )
}

export default Add