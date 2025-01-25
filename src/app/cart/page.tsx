"use client"
import Image from 'next/image'
import { useCart } from '../context/CartContext'
const Cart = () => {
    const {cartItems, increaseQuantity, decreaseQuantity} = useCart()
  return (
    <div>
        <h1 className='text-4xl font-extrabold ml-[50px] mt-16'>YOUR CART</h1>
        {cartItems.length === 0 && <div className='text-2xl font-bold ml-[50px] mt-16'>Your cart is empty</div>}
        {cartItems.map(item => (
            <div key={item.slug} className='flex h-[150px] border-2 w-fit border-black flex-row items-center gap-12'>
                 <div className='w-[200px] h-full object-cover'><Image src={item.image} alt={item.name} width={200} height={150} className='w-full object-cover h-full'></Image></div>
                 <div className="flex flex-col">
                    <h2 className='text-xl font-extrabold'>{item.name}</h2>
                    <div className="flex gap-2 items-center">
                    <p className='text-sm opacity-[40%] line-through'> ${item.originalPrice}</p>
                    <p className='text-sm font-bold '>${item.price}</p>
                    <div className='px-3 py-2 w-[50px] bg-red-500 bg-opacity-[10%] rounded-[62px] text-xs text-red-600'>-{item.discount}%</div>
                    </div>
                   
                 </div>
                 <div className="flex gap-4 item-center px-3 py-2 bg-[#f0f0f0]">
                  <button onClick={() => increaseQuantity(item.slug)} className='text-sm '>+</button>
                  <h1>{item.quantity}</h1>
                  <button onClick={() => decreaseQuantity(item.slug)} className='text-sm'>-</button>
                 </div>
                 <div className="flex flex-col gap-5">
                  <h1 className='text-xl font-bold'>Total</h1>
                  <h1 className='text-2xl font-bold'>${item.price * item.quantity}</h1>
                 </div>
            </div>
        ))}
        
      
            
                
    </div>
  )
}

export default Cart