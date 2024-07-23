import React from 'react'
import NewArrival from './NewArrival'
import Genre from './genre'
import { Separator } from '../ui/separator'
import PopularProduct from './PopularProduct'
import Benefit from './benefit'
import NewsLetter from './NewsLetter'
import YouMayLike from './YouMayLike'

function products() {
  return (
    <>
      <NewArrival />
      <Separator />
      <Genre />
      <Separator />
      <PopularProduct />
      <Separator />
      <Benefit />
      <Separator />
      <YouMayLike />
      <Separator />
      <NewsLetter />
    </>
  )
}

export default products