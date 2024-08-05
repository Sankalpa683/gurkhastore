import React from 'react'
import Nav from '@/components/nav'
import Breadcrumbs from '@/components/breadcrumbs'
import Footer from '@/components/footer'
import Viewall from '@/components/shop/viewall'


const page = ({ params }) => {
    const totalproducts = 42;
    const search_query = params.query;
    return (
        <>
            <main>
                <Nav />
                <section className='p-12'>
                    <div className='grid grid-cols-1 gap-4  w-full'>
                        <Viewall search_query={search_query} totalproducts={totalproducts}/>

                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default page