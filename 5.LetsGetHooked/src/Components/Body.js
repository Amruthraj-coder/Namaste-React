
import Search from "antd/es/input/Search"
import Card from "./Card.js";
import cards from "../utils/mockdata.js";
import { useState } from "react";
import { Button } from "antd";


const Body =() => {
  const [data,setData] =useState(cards)
  const filterData = () => {
    setData(data.filter((ele)=>ele.info.avgRating<4))
  }
    return (<div className="body">
        <Search  placeholder="input search text"
      allowClear style={{color:"black"}}/>
      <Button onClick={filterData}>Top Rated</Button>
      <div className="res-container">
        {data.map((card)=><Card key={card.info.id} cardData={card}/>)}
       
      </div>
    </div>)
}

export default Body;