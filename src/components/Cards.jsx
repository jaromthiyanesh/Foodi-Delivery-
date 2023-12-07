import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';


const Cards = ({ item }) => {
  const [isheart, setisheart] = useState(false);
  const handleHeartClick = () => {
    setisheart(!isheart)
  }
  return (

    <div className="card w-96 bg-base-100 shadow-xl">
      <div className={` rounded-[0px 28px 0px 28px] rating gap-1 absolute right-2 top-2 p-4 heartStar bg-orange-200 ${!isheart ? "text-red-500" : "text-white"} `} onClick={handleHeartClick}>
        <FaHeart className="h-6 w-6 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure><img src={item.image} alt="food" className=' hover:scale-105 transition-all duration-200 md:h-72 ' /></figure>
      </Link>

      <div className="card-body">
        <Link to={`/menu/${item._id}`} >

          <h2 className="card-title">{item.name}</h2></Link>
        <p>Discription of Items</p>
        <div className="card-actions justify-between mt-2 items-center ">
          <h5 className='font-semibold'><span className=' text-orange-700'>$</span>{item.price}</h5>
          <button className="btn bg-orange-500">Add to Cart</button>
        </div>
      </div>
    </div>

  )
}

export default Cards
