"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get('/ProductList.json');
      const allProducts = response.data;
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const paginatedProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);
      setProducts(paginatedProducts);
    } catch (error) {
      console.error('Error fetching the product data:', error);
    }
    setLoading(false);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className='flex flex-wrap justify-between'>
            <h1 className="text-lg sm:text-2xl font-bold mb-8">Our Grocery Products</h1>
            <Button className=''>View all</Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{product.Name}</h2>
                    <p className="text-gray-600 mb-4">{product['Sale Price']} per lb</p>
                    <Link href='/product/hehe'>
                      <Button variant="outline" className="w-full">
                        Buy Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-between mt-4">
            <Button disabled={page === 1} onClick={handlePreviousPage}>
              Previous
            </Button>
            <Button onClick={handleNextPage}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
