import React from 'react'
import "./Item.css"


const Item = ({card}) => {
  return (
    <div className='card'>
        <img className='card-logo' src={card.img} alt="" />
        <h3 className='card-title'>{card.name}</h3>
        {
            console.log(card)
        }
    </div>
  )
}

export default Item