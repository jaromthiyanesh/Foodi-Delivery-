import React from 'react'
const servicesLists = [
    { id: 1, title: "CATERING", des: "Delight your guests with our flavours and presentation", image: "/images/Service/catering.png" },
    { id: 2, title: "FAST DELIVERY", des: "We deliver your order promptly to your door", image: "/images/Service/quick.png" },
    { id: 3, title: "ONLINE ORDERING", des: "Explore menu &order with ease using our Online Ordering", image: "/images/Service/order.png" },
    { id: 4, title: "GIFT CARDS", des: "Delight your guests with our flavours and presentation", image: "/images/Service/gift-card.png" }
]

function OurServices() {
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 my-16 '>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

                {/* TEXT */}
                <div className='text-left md:w-4/5'>
                    <p className='text-orange-500 font-medium uppercase text-xl tracking-wide'>
                        Our story & services
                    </p>
                    <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>
                        Our Culinary Journey<br />
                        And Services
                    </h2>
                    <p className='my-5 text-gray-600 leading-[30px]'>
                        Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                    </p>
                    <button className='btn bg-orange-500 px-8 py-3 rounded-full '>Explore</button>
                </div>

                {/*IMAGES*/}
                <div className='md:w-1/2'>
                    <div className='grid sm:grid-cold-2 grid-cols-2 gap-8 items-center'>
                        {
                            servicesLists.map((service) => (
                                <div key={service.id} className='shadow-md  rounded-sm py-5 px-4 text-center space-x-4 text-orange-500 cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border'>
                                    <img src={service.image} alt="img" className='mx-auto ' />
                                    <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                    <p className='text-gray-600'>{service.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OurServices
