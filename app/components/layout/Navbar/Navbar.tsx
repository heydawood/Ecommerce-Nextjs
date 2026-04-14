"use client"
import { ShoppingCart } from "lucide-react";
//import Logo from  '../../../assets/logo.webp'
import Link from "next/link";
import file from '@/public/file.svg'


export function Navbar() {

  //const cartItems = useAppSelector(state=>state.cart.items)


  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          
          <Link href="/" className="text-xl text-[#ffae00] font-semibold tracking-wide">
            
            <img src={file} alt="Furnish Logo" className="object-contain h-6" />
          </Link>

          
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link
              href="/"
              className="hover:text-[#ffae00] transition-colors"
            >
              SHOP
            </Link>

            <Link
              href="/about"
              className="hover:text-[#ffae00] transition-colors"
            >
              ABOUT
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#ffae00] transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          
          <div className="flex items-center gap-6">
            <Link
              href="/cart"
              className="relative hover:text-[#ffae00] transition-colors"
            >
              <ShoppingCart size={22} />
               {/* {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-[#ffae00] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length} 
                </span>
              )} */}
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}