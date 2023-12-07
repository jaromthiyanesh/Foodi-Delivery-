import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%'>
      <div className='py-14  flex flex-col md:flex-row-reverse justify-between items-center ' >
        
        
                {/* {images} */}
                <div className='md:w-1/2 mt-6'>
            <img src="/images/banner.png" alt="food-modal-img"/>
          <div className='flex flex-col md:flex-row items-center  justify-around -mt-16 gap-4'>
          <div className='rounded-2xl bg-white flex px-3 py-2 items-center gap-3 shadow-sm w-64'>
                <div><img src="/images/b-food1.png" alt="noodles" className='rounded-2xl' /></div>
                <div className='space-y-1'>
                    <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                </div>
                <p className='text-orange-500'>$:18.00/-</p>
                </div>
            </div>
            <div className='rounded-2xl md:flex  hidden bg-white  px-3 py-2 items-center gap-3 shadow-sm w-64'>
                <div><img src="/images/b-food1.png" alt="" className='rounded-2xl' /></div>
                <div className='space-y-1'>
                    <h5 className='font-medium mb-1'>Spaghetti</h5>
                    <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                </div>
                <p className='text-orange-500'>$:24.00/-</p>
                </div>
            </div>
          </div>
        </div>


        
        
        {/* {text} */}
        <div className='md:w-1/2 space-y-7 px-4'>
            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-orange-500'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn bg-orange-500 rounded-full font-semibold py-3 px-8'>Order Now</button>
        </div>




      </div>
    </div>
  )
}

export default Banner
