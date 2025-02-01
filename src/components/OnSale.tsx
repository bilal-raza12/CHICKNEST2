
import { IProduct } from '@/app/types/types';
import Image from 'next/image';
import { FcRating } from "react-icons/fc";
import Link from 'next/link';

const OnSale = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000" 
  const res = await fetch(`${API_URL}/api/onsale`,{cache:"no-cache"});
  const data :IProduct[] = await res.json();
  return (
    <section>
       <h1 className=' mx-[500px] text-5xl font-extrabold mb-6'>On Sale</h1>
       <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {data.map((item) => (
          <div key={item.slug} className=' relative flex flex-col gap-3 w-auto mx-auto border-[1px] rounded-lg'>
            <div className='w-[200px] h-[150px] mb-6'><Image className='w-full object-cover' src={item.image} alt={item.name} width={400} height={300}  ></Image></div>
            <h1 className='text-2xl font-extrabold'>{item.name}</h1>
            <div className="flex gap-2 items-center">

            <div className='w-6 h-6'><FcRating className='w-[15px] h-[15px]  mt-1'/></div>
            <div className="text-xs">{item.rating}/5.0</div>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold text-xl">${item.price}</h1>
              <h1 className='text-xl opacity-[40%] line-through'>${item.originalPrice}</h1>
              <div className='px-3 py-2 w-[50px] bg-red-500 bg-opacity-[10%] rounded-[62px] text-xs text-red-600'>-{item.discount}%</div>
            </div>
            <div className='bg-red-600 absolute top-0 z-20 text-white text-xs px-2 py-1 w-[50px]'>HOT</div>
            <Link href={`/onsale/${item.slug}`}><button className='bg-blue-400 mb-2 text-sm w-[180px] h-[30px] px-14 py-1 text-white rounded-[62px]'>Buy Now</button></Link>
          </div>
        ))}
       </div>
    </section>
  )
}

export default OnSale