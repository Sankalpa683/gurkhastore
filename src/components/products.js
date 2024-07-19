"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 4;

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get('/ProductList.json');
      const allProducts = response.data;
      const startIndex = itemsPerPage;
      const paginatedProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);
      setProducts(paginatedProducts);
    } catch (error) {
      console.error('Error fetching the product data:', error);
    }
    setLoading(false);
  };


  return (
    <>
      <section className=''>
        <div className='py-12'>
          <div className="container mx-auto px-4 md:px-6">
            <div className='flex flex-wrap justify-between'>
              <h1 className="text-lg sm:text-2xl font-bold mb-8">New Arrivals</h1>
              <Button className=''>View all</Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {loading ? (
                <p>Loading...</p>
              ) : (
                products.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src="https://www.froghollow.com/cdn/shop/products/pink-lady-apples-hero_e628bb5f-8ffe-46c9-9fcb-a2fb947e0ded_300x300.jpg?v=1628281343"
                      alt={product.Name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="flex flex-col flex-wrap p-4">
                      <div className='h-auto sm:h-24'>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">{product.Name}</h2>
                        <p className="text-gray-600">{product.sale_price} per lb</p>
                      </div>
                      <div>
                        <Link href={`/product/${product.id}`}>
                          <Button variant="outline" className="w-full">
                            Buy Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>
        
      </section>

    </>
  );
}

export default Products;
