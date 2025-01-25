import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className='sm:pl-6 pl-0'>
        <div className="flex md:flex-row flex-col items-center ">
            <div className="flex flex-col justify-between md:ml-7 ml-3 md:mb-[90px] mb-0 mt-9  h-auto md:gap-8 gap-4 md:max-w-[430px] max-w-[280px]">

            <h1 className='font-extrabold md:text-6xl text-4xl'>Welcome To ChicNest!</h1>
            <p className='sm:text-xm opacity-[60%] text-xs'>where timeless elegance meets modern style, bringing you the finest curated collections to elevate your wardrobe and lifestyle.</p>
            <button className='md:w-[200px] h-[40px] w-[200px] px-4 py-1 bg-blue-300 rounded-[62px] text-white'>Shop Now</button>
            </div>
            <div className='md:ml-[230px] ml-2'>
                <Image src={"/images/bg4.jpg"} alt='chicnest' width={470} height={500} className='md:mb-[90px] md:w-[470px] md:h-[500px] w-[300px] h-[320px] mb-0'></Image>
            </div>
        </div>
    </section>
  )
}

export default Hero