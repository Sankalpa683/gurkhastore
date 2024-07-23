import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function NewsLetter() {
    return (
        <>
            <section className="bg-[#F0F9F0] py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">Make your online groceries shopping easier with <span className='font-bold text-green-500'>Gurkha SuperMarket</span></h2>
                            <p className="text-muted-foreground text-lg leading-relaxed ">
                                Gurkha SuperMarket makes online grocery shopping fast and easy. Get groceries delivered and order the best of
                                seasonal farm fresh food.
                            </p>
                            <div className='flex flex-wrap gap-4 py-5'>
                                <Link href="/about">
                                    <Button>About Us</Button>
                                </Link>
                                <Link href="/shop">
                                    <Button variant='outline'>Shop Now</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden sm:flex justify-end">
                            <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&w=640&q=75" alt="Picture" width={500} height={500} className="max-w-full h-auto" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter