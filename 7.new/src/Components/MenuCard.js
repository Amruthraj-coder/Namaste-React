import React from 'react'

const MenuCard = ({menuinfo}) => {
  return (
    <div className="card-menu">
        <div className="left">
            <h4>{menuinfo.card.info.name}</h4>
            <b>₹{menuinfo.card.info.price/100}</b>
            <p>⭐{menuinfo.card.info.ratings.aggregatedRating.rating}</p>
            <p>{menuinfo.card.info.description}</p>
        </div>
        <img className='item-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menuinfo.card.info.imageId}`} alt="" />
    </div>
  )
}

export default MenuCard