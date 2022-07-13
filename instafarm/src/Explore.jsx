import React from 'react'
import Item from './Item'

function Explore() {
  return (
    <div className='explore'>
        <div className='explore_header'>
            <h2>Explore categories</h2>

            <div className='categories'>
                <p>All</p>
                <p>Vegetables</p>
                <p>Fruits</p>
                <p>Coffee & Teas</p>
                <p>Meat</p>

            </div>

        </div>
        <div className='items'>
            <Item className={"item1"}/>
            <Item className={"item2"}/>
            <Item className={"item3"}/>
            <Item className={"item4"}/>
            <Item className={"item5"}/>
            <Item className={"item6"}/>
        </div>



    </div>
  )
}

export default Explore