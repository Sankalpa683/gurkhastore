"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Card } from '@/components/ui/card';
import Related_product from '@/components/related_product';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Page({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const productId = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('/ProductList.json');
        const data = response.data;
        const productData = data.find(item => item.id === productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Nav />
      <Card>
        <div id='breadcumbs' className='grid max-w-6xl overflow-hidden px-4 mx-auto py-8 container'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.keyword}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-16 items-start max-w-6xl overflow-hidden px-4 mx-auto py-4 mb-8">
          <div className="grid gap-4">
            <img
              src="https://www.muncha.com/img/l93527.jpg"
              alt={product.Name}
              width={600}
              height={600}
              className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 md:gap-8 px-6 py-5 h-full">
            <div className="grid gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold">{product.Name}</h1>
              <p className="text-muted-foreground">{product.Description}</p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h2 className="text-lg font-semibold">Product Details</h2>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    Fresh Organic Apples are handpicked and grown without pesticides or synthetic fertilizers. These crisp and juicy apples offer a natural sweetness that is perfect for snacking, baking, or adding to salads. Packed with
                    vitamins and antioxidants, they promote overall health and well-being.
                  </p>
                  <p>
                    Enjoy the pure, delicious taste of nature with every bite of our Fresh Organic Apples, knowing you're making a healthy choice
                    for you and your family.
                  </p>
                </div>
              </div>
            </div>
            {/* Moved Separator here */}
            {/* Price and Button at the bottom */}
            <Separator />

            <div className="flex flex-wrap gap-4 md:flex-row items-center justify-between mt-auto">
              <div className="text-4xl font-bold">{product.sale_price}</div>
              <Link href={`/checkout/${productId}`}>
                <Button size="lg" variant="destructive">Buy Now</Button>
              </Link>
            </div>
          </div>
        </div>
        <Related_product />
      </Card>
      <Footer />
    </>
  );
}

export default Page;
