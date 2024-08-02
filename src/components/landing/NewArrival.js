"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const fetchProducts = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get('/ProductList.json');
      const allProducts = response.data;
      const startIndex = itemsPerPage * (pageNumber - 1);
      const paginatedProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);
      setProducts(paginatedProducts);
    } catch (error) {
      console.error('Error fetching the product data:', error);
    }
    setLoading(false);
  };

  return (
    <section className='py-12'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-wrap justify-between items-center mb-8'>
          <h1 className="text-lg sm:text-2xl font-bold">New Arrivals</h1>
          <Link href='/shop'>
            <Button>View all</Button>
          </Link>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              280: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <img
                    src={product.img_url}
                    alt={product.Name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{product.Name}</h2>
                    <p className="text-gray-600 mb-4">{product.sale_price}</p>
                    <div className="mt-auto">
                      <Link href={`/product/${product.id}`}>
                        <Button variant="outline" className="w-full">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default NewArrival;
