import React, { useEffect, useState } from 'react'
import ShimmerMenu from './ShimmerMenu'
import MenuCard from "./MenuCard.js"
import {useParams} from "react-router-dom"
const RestaurantMenu = () => {
    const [resList,setResList]=useState([])
    const {resId} = useParams()
    useEffect(() => {
        fetchresData()
    },[])

    const fetchresData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId="+resId)
        const json = await data.json()

        setResList(json.data.cards);
        // console.log(json.data);
        
    }
    console.log(resList);


    if(resList.length===0){
      return <ShimmerMenu/>
    }
    
  return (
    <div className='res-menu'>
        <h1>{resList.length>0?resList[2].card.card.info.name:"Loading"
        }</h1>
        <div className="menu-list">
          <h2>Menu</h2>
          {resList[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((ele)=>{
            return <MenuCard key={ele.card.info.id} menuinfo={ele}/>
          })}
            {/* <MenuCard menuinfo={resList[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0]}/>
            {console.log(resList[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0])} */}
            
          
        </div>
    </div>
  )
}

export default RestaurantMenu;