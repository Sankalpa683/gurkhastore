import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


function products() {
  return (
    <>
      <div className=" py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className='flex flex-wrap justify-between'>
            <h1 className="text-lg sm:text-2xl font-bold mb-8">Our Grocery Products</h1>
            <Button className=''>View all</Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://www.froghollow.com/cdn/shop/products/pink-lady-apples-hero_e628bb5f-8ffe-46c9-9fcb-a2fb947e0ded_300x300.jpg?v=1628281343" alt="Product 1" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Fresh Organic Apples</h2>
                <p className="text-gray-600 mb-4">$2.99 per lb</p>
                <Link href='/product/hehe'>
                  <Button variant="outline" className="w-full">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://www.orgpick.com/cdn/shop/products/spnach_large_01cac1a1-246f-433c-b02b-e2c7986fe95c.jpg?v=1569550040" alt="Product 2" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Organic Spinach Leaves</h2>
                <p className="text-gray-600 mb-4">$3.49 per bunch</p>
                <Button variant="outline" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://hostessatheart.com/wp-content/uploads/2023/02/Whole-Grain-Bread-Recipe-Hero-1200x800.jpg.webp" alt="Product 3" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Organic Whole Wheat Bread</h2>
                <p className="text-gray-600 mb-4">$4.99 per loaf</p>
                <Button variant="outline" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhw2a6lnU9sCTxLeeXJCDJAzGZJKq_KHp2A&s" alt="Product 4" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Organic Carrots</h2>
                <p className="text-gray-600 mb-4">$2.29 per lb</p>
                <Button variant="outline" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default products