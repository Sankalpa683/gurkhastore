import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Related_product({ category }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get('/ProductList.json');
        const data = response.data;
        const filteredProducts = data.filter(product => product.category === category);
        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching related products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (relatedProducts.length === 0) {
    return <div>No related products found.</div>;
  }

  const renderProducts = (products) => {
    return products.map((product, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.img_url}
          alt={product.Name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 sm:text-xl">{product.Name}</h2>
          <p className="text-gray-600 mb-4">{product.sale_price}</p>
          <Button variant="outline" className="w-full">
            Buy Now
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <section className='container max-w-7xl'>
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className='flex flex-wrap justify-between'>
            <h1 className="text-lg sm:text-2xl font-bold mb-8">Related Products</h1>
            <Button>View all</Button>
          </div>
        </div>

        {relatedProducts.length > 3 ? (
          <Carousel>
            <CarouselContent>
              {Array.from({ length: Math.ceil(relatedProducts.length / 3) }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {renderProducts(relatedProducts.slice(index * 3, index * 3 + 3))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:block" />
            <CarouselNext className="hidden lg:block" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {renderProducts(relatedProducts)}
          </div>
        )}
      </div>
    </section>
  );
}

export default Related_product;
