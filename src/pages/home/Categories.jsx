import React from 'react'

const categoryItems = [
  { id: 1, title: "Main Dish", des: "(86 Dishes)", image: "/images/category/img1.png" },
  { id: 2, title: "Break Fast", des: "(12 Break Fastd)", image: "/images/category/img2.png" },
  { id: 3, title: "Main Dish", des: "(48 Dessert)", image: "/images/category/img3.png" },
  { id: 4, title: "Main Dish", des: "(255 Items)", image: "/images/category/img4.png" },
]



const Categories = () => {


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
      <div className='text-center'>
        <p className='text-orange-500 font-medium uppercase text-xl tracking-wide'>Customer Favorites</p>
        <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Popular Categories</h2>
      </div>
      {/* {Categories} */}

      <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
        {
          categoryItems.map((item, i) => (
            <div key={i} className='bg-white rounded-sm py-6 shadow-lg px-5 w-72 max-auto text-center cursor-pointer hover:translate-y-[-20px] duration-300 transition-all '>
              <div className='flex mx-auto w-full items-center justify-center' >
                <img src={item.image} alt="categories img" className='bg-orange-200 p-5 rounded-full w-28 h-28' />
              </div>
              <div className='mt-5 space-y-1'>
                <h5>{item.title}</h5>
                <p>{item.des}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Categories
