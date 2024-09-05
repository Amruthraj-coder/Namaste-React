

const Card =({cardData})=>{
   const {cloudinaryImageId,name,avgRating,cuisines}=cardData.info
    return (<div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="foodimg" alt="" />
        <h3>{name}</h3>
        <h5>⭐{avgRating} .   {cardData.info.sla.slaString} </h5>
        <p>{cuisines.join(" , ")}</p>
        {/* <p>Chinnadwara Locality</p> */}
    </div>

    )
}
export default Card;