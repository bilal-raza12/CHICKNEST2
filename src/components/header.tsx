"use client";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import {FaBars,FaTimes} from "react-icons/fa";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
const Header = () => {


    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
    <header className="sm:py-4 sm:px-4 py-3 px-2 w-full sticky top-0 z-50 bg-white shadow-md ">
       <nav className="flex md:justify-between justify-evenly items-center">
          <h1 className="md:text-3xl text-xl font-extrabold">CHICNEST</h1>
            <div className="md:hidden">
                <button onClick={handleMenu} className="p-2">{menuOpen?<FaTimes className="w-4 h-4"/> : <FaBars className="w-4 h-4"/>}</button>
            </div>
          <ul className=" space-x-8 text-sm hidden md:flex ">
                <Link href={"/"}><li className="hover:text-blue-300">Home</li></Link>
                <Link href={"/"}><li className="hover:text-blue-300">OnSale</li></Link> 
                <Link href={"/"}><li className="hover:text-blue-300">Bags</li></Link>
                <Link href={"/"}><li className="hover:text-blue-300">Sneakers</li></Link>
                <Link href={"/"}><li className="hover:text-blue-300">Contact</li></Link>
          </ul>
          <div className="flex md:gap-4 gap-2">
          <div className="w-6 h-6"><LuShoppingCart className="w-[20px] h-[17px] mt-1 ml-[3px]"/></div>
          <div className="w-6 h-6"><CiHeart  className="w-[20px] h-[17px] mt-1 ml-2"/></div>
          </div>
       </nav>
    </header>
  )
}

export default Header