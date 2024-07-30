"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import axios from 'axios';

const Viewall = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/ProductList.json');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching the product data:', error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
      setLoading(false);
    }, 500); // simulate network delay
  };

  return (
    <section className='py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-center mb-8'>
          <h1 className="text-lg sm:text-2xl font-bold">New Arrivals</h1>
          <Link href='/shop'>
            <Button>Sort Out</Button>
          </Link>
        </div>
        {loading && products.length === 0 ? (
          <div className="flex justify-center items-center h-48">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.slice(0, visibleProducts).map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
                  <img
                    src="https://www.froghollow.com/cdn/shop/products/pink-lady-apples-hero_e628bb5f-8ffe-46c9-9fcb-a2fb947e0ded_300x300.jpg?v=1628281343"
                    alt={product.Name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">{product.Name}</h2>
                    <p className="text-gray-600 mb-4">{product.sale_price} per lb</p>
                    <div className="mt-auto">
                      <Link href={`/product/${product.id}`}>
                        <Button variant="outline" className="w-full">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {visibleProducts < products.length ? (
              <div className="text-center mt-8">
                <Button onClick={handleLoadMore}>
                  Load More
                </Button>
                {loading && <div className="flex justify-center items-center mt-4"><div className="spinner"></div></div>}
              </div>
            ) : (
              <p className="text-center mt-8">All products listed</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Viewall;
