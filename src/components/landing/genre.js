import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function genre() {
    return (
        <>
            <section className='container'>
                <div className='py-8 flex flex-col flex-wrap justify-center'>
                    <div className='flex flex-col flex-wrap justify-between'>
                        <h1 className="text-lg sm:text-2xl font-bold mb-2">Shop by Catagory</h1>
                        <p className='text-gray-500 text-sm'>Explore Our Wide Range of Products Across Various Categories</p>
                    </div>
                    <Carousel className='flex flex-col flex-wrap justify-center items-center'>
                        <CarouselContent>
                            <div className='py-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-9 lg:grid-cols-7 md:grid-cols-5 gap-4 mt-2'>


                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://miro.medium.com/v2/resize:fit:1400/1*RI7K6P3Su5Gxc-w5cuuVjA.jpeg' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm'>Lays & Chips</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://www.mtrfoods.com/mtr_admin/data_content/products_category/background_img/3-mins-bf-packshot-1.png' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>breakfasts</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://pngpix.com/images/hd/assorted-soft-drinks-collection-somfcu3i1fjydigh.jpg' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>Cold Drinks</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://png.pngtree.com/png-vector/20240203/ourlarge/pngtree-fresh-food-milk-with-bread-png-image_11596379.png' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>Dairy Products</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://www.pngkit.com/png/full/366-3669003_tutti-fruity-cookies-bakery-biscuits-packet-png.png' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>Biscuits</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://hips.hearstapps.com/hmg-prod/images/marinara-sauce-bottles-215-1547064355.jpg' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>Pickles</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://www.ceylonsupermart.com/cdn/shop/collections/ee2dab3e8300e29757a9b5b23003a7f9.jpg?v=1655384849' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>Rice</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiLYUP2A1Il1b-r9mZTbPWkxGypC_4wTXUQ&s' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>Masala</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="hidden lg:block">
                                    <div className=' flex flex-col flex-wrap justify-center items-center'>
                                        <div className='bg-gray-200 p-4 rounded-full mb-2'>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7DUcLZXup-WkTiJVezI77A2ePyv-x8XrWg&s' className='rounded-full w-24 h-20' />
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm capitalize'>Chickens</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselPrevious className='hidden md:block' />
                                <CarouselNext className='hidden md:block'/>


                            </div>
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default genre