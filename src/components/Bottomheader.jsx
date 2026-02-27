import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import the specific icons from lucide-react
import { 
  User, 
  ShoppingBag, 
  XCircle, 
  Star, 
  LogOut, 
  Search, 
  Heart, 
  ShoppingCart 
} from 'lucide-react';

const Bottomheader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className=" bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-bold tracking-wider">EXCLUSIVE</Link>
        
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><Link to="/" className="hover:text-[#DB4444]">Home</Link></li>
  <li><Link to="/contact" className="hover:text-[#DB4444]">Contact</Link></li>
  <li><Link to="/about" className="hover:text-[#DB4444]">About</Link></li>
  <li><Link to="/signup" className="hover:text-[#DB4444]">Sign Up</Link></li>
        </ul>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="bg-gray-100 px-3 py-2 rounded flex items-center">
            <input type="text" placeholder="What are you looking for?" className="bg-transparent text-xs outline-none w-40" />
            <Search size={18} className="cursor-pointer text-gray-600" />
          </div>

          <Link to="/wishlist">
  <Heart size={24} className="cursor-pointer hover:text-[#DB4444]" />
</Link>

<Link to="/cart" className="relative hover:text-[#DB4444]">
  <ShoppingCart size={24} />
  <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
    2
  </span>
</Link>
          
          {/* Account Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`p-1.5 rounded-full transition-all ${
                isDropdownOpen ? 'bg-[#DB4444] text-white' : 'hover:bg-gray-100'
              }`}
            >
              <User size={24} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-black/80 backdrop-blur-md text-white rounded-md shadow-lg py-4 z-[60] animate-fadeIn">
                <ul className="flex flex-col">
                  <li 
  className="px-4 py-2 hover:bg-white/10 flex items-center gap-4 cursor-pointer text-sm"
  onClick={() => setIsDropdownOpen(false)} // Closes the menu on click
>
  <User size={18} />
  <Link to="/account" className="w-full">Manage My Account</Link>
</li>
                  <li className="px-4 py-2 hover:bg-white/10 flex items-center gap-4 cursor-pointer text-sm">
                    <ShoppingBag size={18} /> My Order
                  </li>
                  <li className="px-4 py-2 hover:bg-white/10 flex items-center gap-4 cursor-pointer text-sm">
                    <XCircle size={18} /> My Cancellations
                  </li>
                  <li className="px-4 py-2 hover:bg-white/10 flex items-center gap-4 cursor-pointer text-sm">
                    <Star size={18} /> My Reviews
                  </li>
                  <li className="px-4 py-2 hover:bg-white/10 flex items-center gap-4 cursor-pointer text-sm border-t border-white/20 mt-2 pt-3">
                    <LogOut size={18} />Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Bottomheader;