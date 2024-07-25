import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Head from 'next/head'

const shipping = () => {
    const metadata = {
        title: "Shipping Policy - Gurkha Supermarket",
        description: "Understand the shipping policy of Gurkha Supermarket. Learn about our delivery areas, shipping charges, and delivery times.",
        keywords: "Shipping policy, Gurkha Supermarket, delivery information",
        url: "https://www.gurkhasupermarket.com/shipping-policy",
        image: "/shipping-banner.png"
    };
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:url" content={metadata.url} />
                <meta property="og:image" content={metadata.image} />
            </Head>
            <Nav />
            <main>
                <section className="py-12 md:py-20 lg:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-2xl mx-auto space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold">Shipping Policies</h2>
                                <p className="text-muted-foreground">Everything you need to know about our delivery service.</p>
                            </div>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <h3 className="text-lg font-bold">Delivery Times</h3>
                                    <p>We deliver Monday to Friday, 8am to 6pm. Orders placed before 2pm will be delivered the same day.</p>
                                </div>
                                <div className="grid gap-2">
                                    <h3 className="text-lg font-bold">Delivery Costs</h3>
                                    <p>Delivery is free for all orders to 24 Good St, Granville, Australia.</p>
                                </div>
                                <div className="grid gap-2">
                                    <h3 className="text-lg font-bold">Restrictions</h3>
                                    <p>We only deliver to 24 Good St, Granville, Australia. No exceptions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default shipping