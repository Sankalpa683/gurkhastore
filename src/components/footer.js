import React from 'react'
import Link from 'next/link'
import { IoStorefrontSharp } from "react-icons/io5"

function footer() {
  return (
    <>
      <hr />
      <footer className="bg-muted">
        <div className="container py-9 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
              <IoStorefrontSharp className="h-6 w-6" />
              <span>Gurkha Supermarket</span>
            </Link>
            <p className="text-muted-foreground">The modern way for everyone to shop groceries at Gurkha Suparmarket.
            </p>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="grid gap-1">
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="/shop" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Shop
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Information</h4>
            <nav className="grid gap-1">
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Shipping
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Returns
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Contact</h4>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                <span>24 Good St, Granville Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                <a href="#" className="hover:underline hover:underline-offset-4">
                  +61 (415) 033-953
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-muted-foreground" />
                <a href="#" className="hover:underline hover:underline-offset-4">
                  reganluitel47@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='container w-full py-4'>
          <center>
            <p>
              Copyright © 2024 GurkhaSuperMarket
            </p>
          </center>
        </div>
      </footer>
    </>
  )
  function MailIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }


  function MapPinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }


  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }


  function PhoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
}

export default footer