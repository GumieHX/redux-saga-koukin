import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {

  const count = useSelector((state) => state.count);

  return (
    <div>
        <h1>Show page</h1>
        <p>{count}</p>
    </div>
  )
}

export default Show