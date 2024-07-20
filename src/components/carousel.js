import React from 'react'

function carousel({text,highlight,first}) {
  return (
    <>
      <section class="z-0 w-full py-20 lg:py-28 bg-black flex items-center justify-center relative">
      <h1 class="relative z-[5] text-white text-3xl lg:text-5xl max-w-2xl text-center font-medium">
            {first}<span class="font-extrabold text-yellow-500">{highlight}</span>{text} 
          </h1>       
      </section>
    </>
  )
}

export default carousel