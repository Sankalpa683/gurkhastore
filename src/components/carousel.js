import React from 'react'

function carousel() {
  return (
    <>
      <section class="z-0 w-full py-20 lg:py-28 bg-black flex items-center justify-center relative">
      <div class="absolute h-40 w-40 rounded-full blur-3xl bg-opacity-50 bg-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <h1 class="relative z-[5] text-white text-3xl lg:text-5xl max-w-2xl text-center font-medium">
            The <span class="font-extrabold text-yellow-500">modern</span> way for everyone to shop groceries at Gurkha Suparmarket.
          </h1>       
      </section>
    </>
  )
}

export default carousel