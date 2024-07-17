import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


function related_product() {
    return (
        <>
            <section className='container max-w-7xl'>
                <div className=" py-12">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className='flex flex-wrap justify-between'>
                            <h1 className="text-lg sm:text-2xl font-bold mb-8">Related Products</h1>
                            <Button className=''>View all</Button>
                        </div>
                        
                    </div>
                    <Carousel>
                            <CarouselContent>
                                <CarouselItem>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <img src="https://hostessatheart.com/wp-content/uploads/2023/02/Whole-Grain-Bread-Recipe-Hero-1200x800.jpg.webp" alt="Product 3" width={400} height={300} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold mb-2 sm:text-xl">Organic Whole Wheat Bread</h2>
                                                <p className="text-gray-600 mb-4">$4.99 per loaf</p>
                                                <Button variant="outline" className="w-full">
                                                    Buy Now
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hidden sm:block">
                                            <img src="https://hostessatheart.com/wp-content/uploads/2023/02/Whole-Grain-Bread-Recipe-Hero-1200x800.jpg.webp" alt="Product 3" width={400} height={300} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold mb-2 sm:text-xl">Organic Whole Wheat Bread</h2>
                                                <p className="text-gray-600 mb-4">$4.99 per loaf</p>
                                                <Button variant="outline" className="w-full">
                                                    Buy Now
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hidden sm:block">
                                            <img src="https://hostessatheart.com/wp-content/uploads/2023/02/Whole-Grain-Bread-Recipe-Hero-1200x800.jpg.webp" alt="Product 3" width={400} height={300} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold mb-2 sm:text-xl">Organic Whole Wheat Bread</h2>
                                                <p className="text-gray-600 mb-4">$4.99 per loaf</p>
                                                <Button variant="outline" className="w-full">
                                                    Buy Now
                                                </Button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <img src="https://hostessatheart.com/wp-content/uploads/2023/02/Whole-Grain-Bread-Recipe-Hero-1200x800.jpg.webp" alt="Product 3" width={400} height={300} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold mb-2 sm:text-xl">Organic Whole Wheat Bread</h2>
                                                <p className="text-gray-600 mb-4">$4.99 per loaf</p>
                                                <Button variant="outline" className="w-full">
                                                    Buy Now
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hidden sm:block">
                                            <img src="https://hostessatheart.com/wp-content/uploads/2023/02/Whole-Grain-Bread-Recipe-Hero-1200x800.jpg.webp" alt="Product 3" width={400} height={300} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold mb-2 sm:text-xl">Organic Whole Wheat Bread</h2>
                                                <p className="text-gray-600 mb-4">$4.99 per loaf</p>
                                                <Button variant="outline" className="w-full">
                                                    Buy Now
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hidden sm:block">
                                            <img src="https://hostessatheart.com/wp-content/uploads/2023/02/Whole-Grain-Bread-Recipe-Hero-1200x800.jpg.webp" alt="Product 3" width={400} height={300} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold mb-2 sm:text-xl">Organic Whole Wheat Bread</h2>
                                                <p className="text-gray-600 mb-4">$4.99 per loaf</p>
                                                <Button variant="outline" className="w-full">
                                                    Buy Now
                                                </Button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </CarouselItem>
   
                            </CarouselContent>
                            <CarouselPrevious className="hidden lg:block"/>
                            <CarouselNext className="hidden lg:block"/>
                        </Carousel>
                </div>
                
            </section>
        </>
    )
}

export default related_product