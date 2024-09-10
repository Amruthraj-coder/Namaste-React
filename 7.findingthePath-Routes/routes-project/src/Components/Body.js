
import Search from "antd/es/input/Search"
import Card from "./Card.js";
// import cards from "../utils/mockdata.js";
import { useEffect, useState } from "react";
import { Button } from "antd";


const Body =() => {
  const [data,setData] =useState([])
  const [searchedData,setSearchedData] = useState([])
  const [filterdData,setFilterdData] =useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data    = await response.json()
    setData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setFilterdData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }
  const searchChange = (event)=>{setSearchedData(event.target.value)}
  const onSearching = ()=>{ console.log(data);
   setFilterdData(data.filter((item)=>item.info.name.toLowerCase().includes(searchedData.toLowerCase())))}
  const filterData = () => {
    // setData(data.filter((ele)=>ele.info.avgRating<4))
  }
    return (<div className="body">
        <Search onChange={searchChange} onSearch={onSearching} placeholder="input search text"
      allowClear style={{color:"black"}}/>

      <Button onClick={filterData}>Top Rated</Button>
      <div className="res-container">
        {filterdData.map((card)=><Card key={card.info.id} cardData={card}/>)}
       
      </div>
    </div>)
}

export default Body;