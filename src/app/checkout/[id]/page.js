import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Link from 'next/link'

function page({ params }) {
    let param = params.id
    let total = 2.99 + 5
    return (
        <>
            <Nav />
            <section className='w-full overflow-hidden py-6'>
                <div className='container bg-white shadow-xl overflow-hidden grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 py-6'>
                    <div className='rounded-md p-4'>
                        <div>
                            <h2 className="text-lg font-semibold">Shipping Details</h2>
                            <form className="mt-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name*</Label>
                                        <Input id="firstName" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name*</Label>
                                        <Input id="lastName" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Country/Region*</Label>
                                    <Select>
                                        <SelectTrigger className="w-[180px]" disabled>
                                            <SelectValue placeholder="Australia" />
                                        </SelectTrigger>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address*</Label>
                                    <Input id="address" placeholder="123 Main St" rows={2} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City*</Label>
                                        <Input id="city" placeholder="New York" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="state">State*</Label>
                                        <Input id="state" placeholder="NY" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">Zip Code
                                            (<span className='regular-6 text-gray-500'>optional</span>)
                                        </Label>
                                        <Input id="zip" placeholder="10001" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone*</Label>
                                        <Input id="phone" placeholder="+1 (555) 555-5555" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Separator className='block sm:hidden' />
                    <div className='rounded-md p-4'>
                        <div>
                            <h2 className="text-lg font-semibold">Order Summary</h2>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span>Subtotal</span>
                                    <span>$2.99</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Shipping</span>
                                    <span>$5.00</span>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between font-semibold">
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>

                            </div>
                        </div>
                        <div className="space-y-4 py-8">
                            <Button size="lg" className="w-full">
                                Place Order
                            </Button>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                By placing your order, you agree to our{" "}
                                <Link href="#" className="underline" prefetch={false}>
                                    Terms of Service
                                </Link> and{" "}
                                <Link href="#" className="underline" prefetch={false}>
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page