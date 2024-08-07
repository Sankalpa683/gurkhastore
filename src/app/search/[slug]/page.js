import React from 'react';
import Nav from '@/components/nav';
import Breadcrumbs from '@/components/breadcrumbs';
import Footer from '@/components/footer';
import Search_product from '@/components/search_product';

const Page = ({ params }) => {
  const slug_url = params.slug;
  const search_query = params.query;
  const totalproducts = 42;
  
  return (
    <>
        <Nav />
        <main className='contain-none w-full lg:container py-12 px-1'>
            <Search_product search_query={search_query} totalproducts={totalproducts} />
        </main>
        <Footer />
    </>
  );
};

export default Page;
