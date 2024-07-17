import React from 'react'
import Image from 'next/image'
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



function nav() {
  return (
    <>
      <section className='p-3 z-50 bg-white border-b border-b-light sticky top-0 flex flex-wrap justify-between items-center shadow'>
        <div className=''>
          <Link href='/'>
            <Image src='/logos.png' width={155} height={80} />
          </Link>
        </div>

        <div className='hidden sm:flex flex-wrap w-6/12 '>
          <Input className="w-full outline-none text-center sm:text-start" type="search" placeholder="Search GurkhaStore...." />
        </div>

        <div className='flex flex-wrap'>
          <div className='px-2 my-1 relative'>

            <CiShoppingCart size={30} className='leading-5 hidden sm:block cursor-pointer' />
            <IoIosSearch size={30} className='leading-5 block sm:hidden cursor-pointer'/>
          </div>
          <div className='px-3'>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href='/'>
                  <DropdownMenuItem>My Orders</DropdownMenuItem>
                </Link>
                <Link href='/'>
                  <DropdownMenuItem>Order Status</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>

        {/* <div className='flex sm:hidden flex-wrap w-full'>
          <Input className="w-full outline-none text-center sm:text-start" type="search" placeholder="Search GurkhaStore...." />
        </div> */}
      </section>
    </>
  )
}

export default nav