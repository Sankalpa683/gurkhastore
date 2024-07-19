import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import { Card } from '@/components/ui/card'
import Related_product from '@/components/related_product'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


function page({ params }) {
  return (
    <>
      <Nav />
      <Card>
        <div id='breadcumbs' className='grid  max-w-6xl  overflow-hidden px-4 mx-auto py-8 container'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/product">Product</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Fresh Organic Apples</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl overflow-hidden px-4 mx-auto py-4 mb-8">

          <div className="grid gap-4">
            <img
              src="https://www.froghollow.com/cdn/shop/products/pink-lady-apples-hero_e628bb5f-8ffe-46c9-9fcb-a2fb947e0ded_300x300.jpg?v=1628281343"
              alt="Organic Avocados"
              width={600}
              height={600}
              className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
            />

          </div>
          <div className="grid gap-4 md:gap-8 px-6 py-5">
            <div className="grid gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Fresh Organic Apples</h1>
              <p className="text-muted-foreground">Fresh, creamy avocados grown using sustainable farming practices.</p>
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
            <Separator />
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">$2.99 </div>
              <Link href={`/checkout/${params.id}`}>
                <Button size="lg" variant="destructive">Buy Now</Button>
              </Link>
            </div>


          </div>
        </div>
        <Related_product />
      </Card>
      <Footer />
    </>
  )
}

export default page