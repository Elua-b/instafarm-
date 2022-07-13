import React from 'react'

function Item({className}) {
  return (
    <div className={className}>
        <img src="fruit1.png" alt="" />
        <h3>Oranges</h3>
        <p>20 items</p>
    </div>
  )
}

export default Item