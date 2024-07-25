import React from 'react'
import Nav from '@/components/nav'
import Head from 'next/head'
import Footer from '@/components/footer'


const return_policty = () => {
    const metadata = {
        title: "Return Policy - Gurkha Supermarket",
        description: "Review the return policy of Gurkha Supermarket. Understand the conditions under which you can return products and get a refund.",
        keywords: "Return policy, Gurkha Supermarket, product returns, refunds",
        url: "https://www.gurkhasupermarket.com/return-policy",
        image: "/return-banner.png"
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
                <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-3xl font-bold">Return Policy</h1>
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Returns and Refunds</h2>
                            <p className="mb-2">
                                We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may
                                return the item(s) within 30 days of delivery for a full refund.
                            </p>
                            <p className="mb-2">
                                To initiate a return, please contact our customer service team at refunds@example.com or by phone at
                                1-800-555-1234. Please include your order number and a brief explanation of why you are returning the
                                item(s).
                            </p>
                            <p className="mb-2">
                                Once we receive your return, we will process the refund within 5-7 business days. Refunds will be issued to
                                the original payment method used for the purchase.
                            </p>
                            <p>
                                Please note that items must be returned in their original, unused condition with all tags and packaging
                                intact. We reserve the right to refuse a refund or charge a restocking fee for items that have been used,
                                damaged, or are missing parts.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Exceptions</h2>
                            <p className="mb-2">Certain items are not eligible for returns or refunds, including:</p>
                            <ul className="list-disc pl-6 mb-2">
                                <li>Custom or personalized items</li>
                                <li>Perishable items</li>
                                <li>Items that have been used or worn</li>
                            </ul>
                            <p>
                                If you have any questions about our return policy or the eligibility of a specific item, please contact our
                                customer service team.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Shipping Costs</h2>
                            <p className="mb-2">
                                For standard ground shipping, we cover the cost of return shipping. If you choose a faster shipping method
                                for your return, you will be responsible for the difference in shipping costs.
                            </p>
                            <p>
                                We do not refund the original shipping costs for your purchase, as those were incurred to deliver the item
                                to you.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Changes to this Policy</h2>
                            <p className="mb-2">
                                We may update this refund policy from time to time to reflect changes in our practices or to comply with
                                legal requirements. We will post any changes on this page and update the "Last Updated" date at the top of
                                the policy.
                            </p>
                            <p>
                                If you have any questions or concerns about our refund policy, please contact us at refunds@example.com.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default return_policty