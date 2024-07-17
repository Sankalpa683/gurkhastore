import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function page({ params }) {
    return (
        <>
            <Nav />
            <div className='container p-4 w-fit'>
                <Card className="w-full max-w-xs rounded-xl border width">
                    <div className="grid gap-4 p-4">
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                            <img
                                src="https://media.thuprai.com/__sized__/products/Sapiens__A_Brief_History_of_Humankind-thumbnail-280x405-70.jpg"
                                alt="Product image"
                                width="400"
                                height="500"
                                className="aspect-[4/5] object-cover border w-full"
                            />
                        </div>
                        <div className="grid gap-1.5">
                            <h3 className="font-semibold text-sm md:text-base">Sapiens</h3>
                            <p className="font-semibold text-sm md:text-base">$12</p>
                            <p className="text-sm md:text-base text-muted">A Brief History of Humankind
                            </p>
                        </div>
                        <Button size="sm" variant="destructive">Buy Now</Button>
                    </div>
                </Card>
            </div>
            <Footer />
        </>
    )
}

export default page