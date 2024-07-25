import React from 'react'
import { IoPricetag } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { MdPayments, MdSupportAgent  } from "react-icons/md";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function benefit() {
  return (
    <section className='container py-12'>
      <div className='flex flex-col flex-wrap justify-center items-center py-6'>
        <h1 className='text-2xl sm:text:2xl lg:text-4xl font-bold capitalize text-center'>Gurkha supermarket offers</h1>
      </div>
      <div className='grid grid-cols-2 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        <div>
          <Card>
            <CardHeader>
              <div className='flex flex-wrap justify-center gap-4'>
                <div className='flex justify-center items-center'>
                  <IoPricetag className='w-20 h-8' />
                </div>
                <div>
                  <h1 className='text-center text-lg font-medium'>Best Price</h1>
                </div>
              </div>

            </CardHeader>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <div className='flex flex-wrap justify-center gap-4'>
                <div className='flex justify-center items-center'>
                  <GiReturnArrow className='w-20 h-8' />
                </div>
                <div>
                  <h1 className='text-center text-lg font-medium'>Return Policy</h1>
                </div>
              </div>

            </CardHeader>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <div className='flex flex-wrap justify-center gap-4'>
                <div className='flex justify-center items-center'>
                  <MdPayments className='w-20 h-8' />
                </div>
                <div>
                  <h1 className='text-center text-lg font-medium'>Securely Pay</h1>
                </div>
              </div>

            </CardHeader>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <div className='flex flex-wrap justify-center gap-4'>
                <div className='flex justify-center items-center'>
                  <MdSupportAgent className='w-20 h-8' />
                </div>
                <div>
                  <h1 className='text-center text-lg font-medium'>24*7 Support</h1>
                </div>
              </div>

            </CardHeader>
          </Card>
        </div>

      </div>

    </section>
  )
}

export default benefit