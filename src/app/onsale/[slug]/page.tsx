"use client"
import { IProduct } from "@/app/types/types"
import { OnSale } from "@/app/data/onsale"
import Image from "next/image"
import { FcRating } from "react-icons/fc"
import { useCart } from "@/app/context/CartContext"
import Link from "next/link"

interface IOnSaleDetail {
    params: {
        slug: string
    }
}
const OnsaleDetail = ({params}:IOnSaleDetail) => {
   const {addToCart} = useCart()
    const product:IProduct | undefined= OnSale.find((item) => item.slug === params.slug)
    if(!product) {
        return <div>Product not found</div>
    }
    const handleAddCart = () => {
        addToCart(product)
        alert('Product added to cart')
    }
  return (
    <main>
        <div className="flex gap-16 items-center">
            <div className="w-[500px] ml-4 h-[570px]"><Image src={product.image} alt={product.name} width={400} height={500} className="w-full h-full object-cover"></Image></div>
            <div className="flex flex-col gap-6">
                <h1 className="font-extrabold text-5xl">{product.name}</h1>
                <h2 className="text-xl opacity-[40%] max-w-[600px]">{product.description}</h2>
                <div className="flex gap-3 items-center">
                    <div className="w-6 h-6"><FcRating className="w-5 h-5 mt-[3px] ml-2"/></div>
                    <div className="text-sm">{product.rating}/5.0</div>
                </div>
                <div className="flex gap-4">
              <h1 className="font-bold text-xl">${product.price}</h1>
              <h1 className='text-xl opacity-[40%] line-through'>${product.originalPrice}</h1>
              <div className='px-3 py-2 w-[50px] bg-red-500 bg-opacity-[10%] rounded-[62px] text-xs text-red-600'>-{product.discount}%</div>
            </div>
            <Link href={"/cart"}><button onClick={handleAddCart} className="bg-blue-400 text-white px-4 py-2 w-[300px] h-[35px] text-sm rounded-[62px]">Add To Cart</button></Link>
            </div>
        </div>
    </main>
  )
}

export default OnsaleDetail