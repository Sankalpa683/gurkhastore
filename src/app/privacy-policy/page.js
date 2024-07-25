import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Head from 'next/head'

const privacy = () => {
    const metadata = {
        title: "Privacy Policy - Gurkha Supermarket",
        description: "Read the privacy policy of Gurkha Supermarket to understand how we handle your personal information and protect your privacy.",
        keywords: "Privacy policy, Gurkha Supermarket, personal information, data protection",
        url: "https://www.gurkhasupermarket.com/privacy-policy",
        image: "/privacy-policy-banner.png"
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
                    <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Information We Collect</h2>
                            <p className="mb-2">
                                We do not collect any personal information or require any form of login or authentication on our website. We
                                do not have any user accounts or profiles.
                            </p>
                            <p className="mb-2">
                                The only information we collect is standard website analytics data, such as page views, device information,
                                and general location data. This information is collected anonymously and is used to improve the user
                                experience and website performance.
                            </p>
                            <p>We do not share or sell any of this data to third parties. It is used solely for internal purposes.</p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Cookies and Tracking</h2>
                            <p className="mb-2">
                                Our website uses cookies to enhance the user experience and to collect the anonymous analytics data
                                mentioned above. These cookies do not contain any personal information and are used solely for the purpose
                                of improving our website.
                            </p>
                            <p className="mb-2">
                                You can choose to disable cookies in your browser settings, but this may affect the functionality of our
                                website.
                            </p>
                            <p>We do not use any third-party tracking or advertising services on our website.</p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
                            <p className="mb-2">
                                We take the security of our website and the data we collect very seriously. We use industry-standard
                                security measures to protect our systems and data from unauthorized access or breaches.
                            </p>
                            <p className="mb-2">
                                However, as with any online service, there is always a risk of data breaches or cyber attacks. We cannot
                                guarantee the absolute security of our website or the data we collect.
                            </p>
                            <p>
                                If a data breach were to occur, we would promptly notify any affected users and take appropriate actions to
                                mitigate the issue.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-4 text-2xl font-bold">Changes to this Policy</h2>
                            <p className="mb-2">
                                We may update this privacy policy from time to time to reflect changes in our practices or to comply with
                                legal requirements. We will post any changes on this page and update the "Last Updated" date at the top of
                                the policy.
                            </p>
                            <p>
                                If you have any questions or concerns about our privacy practices, please contact us at privacy@example.com.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default privacy