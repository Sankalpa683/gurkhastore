import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Head from 'next/head';

function terms() {
    const metadata = {
        title: "Terms and Conditions - Gurkha Supermarket",
        description: "Review the terms and conditions for using the Gurkha Supermarket website and services. Ensure you understand your rights and responsibilities.",
        keywords: "Terms and conditions, Gurkha Supermarket, user agreement",
        url: "https://www.gurkhasupermarket.com/terms-and-condition",
        image: "/terms-banner.png"
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
                    <h1 className="mb-8 text-3xl font-bold">Terms and Conditions</h1>
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Ordering and Delivery</h2>
                            <p className="mb-2">
                                You can place your order through our online platform. We will process your order as soon as possible, and
                                delivery times will depend on your location and the availability of the items you've ordered.
                            </p>
                            <p className="mb-2">
                                Standard delivery is free for orders over $50, with a $5 fee for orders under $50. We also offer express
                                delivery for a fee of $10.
                            </p>
                            <p>
                                Delivery times can vary, but we aim to have your order delivered within 2-3 business days for standard
                                delivery, and 1 business day for express delivery.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Payments and Refunds</h2>
                            <p className="mb-2">
                                We accept Visa, Mastercard, American Express, and PayPal as payment methods. All transactions are secure and
                                encrypted to protect your personal and financial information.
                            </p>
                            <p className="mb-2">
                                If you are not satisfied with your purchase, you can request a refund within 14 days of delivery. Please
                                contact our customer support team, and we will assist you with the process.
                            </p>
                            <p>
                                Refunds will be issued to the original payment method used for the purchase. Please note that some fees,
                                such as delivery charges, may not be refundable.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Privacy and Data Protection</h2>
                            <p className="mb-2">
                                We take the privacy and security of your personal information very seriously. We collect and use your data
                                in accordance with our Privacy Policy, which is available on our website.
                            </p>
                            <p className="mb-2">
                                We use your information to process your orders, deliver your purchases, and provide you with updates and
                                promotional offers. We do not share your personal data with third parties without your consent, except as
                                required by law.
                            </p>
                            <p>
                                You have the right to access, update, or delete your personal information at any time. If you have any
                                questions or concerns about our privacy practices, please contact our data protection officer.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Product Information and Availability</h2>
                            <p className="mb-2">
                                We strive to provide accurate and up-to-date information about the products we offer. However, please note
                                that product availability and descriptions may be subject to change without notice.
                            </p>
                            <p className="mb-2">
                                In the event that an item you've ordered is unavailable, we may offer a suitable substitute. If you are not
                                satisfied with the substitute, you can request a refund or exchange.
                            </p>
                            <p>
                                We do our best to maintain a wide selection of products, but we cannot guarantee the availability of all
                                items at all times. We apologize for any inconvenience this may cause.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">User Conduct</h2>
                            <p className="mb-2">
                                By using our online platform, you agree to conduct yourself in a respectful and lawful manner. This
                                includes, but is not limited to, refraining from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Posting or sharing inappropriate, offensive, or illegal content</li>
                                <li>Attempting to hack or compromise the security of our systems</li>
                                <li>Engaging in fraudulent or deceptive activities</li>
                                <li>Violating the intellectual property rights of others</li>
                            </ul>
                            <p>
                                We reserve the right to suspend or terminate your account if we determine that you have violated these terms
                                of conduct.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Disclaimers and Limitations of Liability</h2>
                            <p className="mb-2">
                                While we strive to provide high-quality products and services, we cannot guarantee that they will be free
                                from errors or defects. We also do not warrant that our platform will be uninterrupted or error-free.
                            </p>
                            <p className="mb-2">
                                To the extent permitted by law, we shall not be liable for any indirect, special, incidental, or
                                consequential damages arising from the use of our platform or the purchase of our products.
                            </p>
                            <p>
                                Our liability for any direct damages shall be limited to the amount you paid for the specific product or
                                service that gave rise to the claim.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default terms