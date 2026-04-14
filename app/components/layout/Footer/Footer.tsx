import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-[#282828] mt-1">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          
          <div>
            <h3 className="font-semibold text-white text-base mb-6">Furnish</h3>
            <p className="text-white leading-relaxed">
              Modern furniture crafted for simplicity, comfort,
              and everyday living.
            </p>
          </div>

          
          <div>
            <h4 className="font-medium text-white mb-6">Shop</h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/shop" className="hover:text-[#ffae00] transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#ffae00] transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#ffae00] transition">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-medium text-white mb-6">Company</h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/about" className="hover:text-[#ffae00] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ffae00] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#ffae00] transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-medium text-white mb-6">Newsletter</h4>
            <p className="text-white mb-4">
              Subscribe to get updates on new collections.
            </p>

            <div className="flex border">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white text-gray-500 px-3 py-2 outline-none text-sm"
              />
            </div>
              <Button className="bg-[#ffae00] text-white px-4 text-sm mt-2 hover:bg-gray-800 transition">
                Subscribe
              </Button>
          </div>

        </div>

        
        <div className="mt-10 pt-4 border-t text-white text-sm">
          © {new Date().getFullYear()} Furnish. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;