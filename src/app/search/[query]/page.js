import React from 'react';
import Nav from '@/components/nav';
import Breadcrumbs from '@/components/breadcrumbs';
import Footer from '@/components/footer';
import Search_product from '@/components/search_product';

const Page = ({ params }) => {
  const search_query = params.query;
  const totalproducts = 42;
  
  return (
    <>
      <main>
        <Nav />
        <section className='p-12'>
          <div className='grid grid-cols-1 gap-4 w-full'>
            <Search_product search_query={search_query} totalproducts={totalproducts} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Page;
