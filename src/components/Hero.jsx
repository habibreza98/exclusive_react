import heroimage from '../../public/hero.png'

import React, { useState } from 'react';

const Hero = () => {
  // Track which menu is open ('womens', 'mens', or null)
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const categories = [
    { id: 'womens', name: "Woman's Fashion", hasSub: true },
    { id: 'mens', name: "Men's Fashion", hasSub: true },
    { id: 'electronics', name: "Electronics", hasSub: false },
    { id: 'lifestyle', name: "Home & Lifestyle", hasSub: false },
    { id: 'medicine', name: "Medicine", hasSub: false },
    { id: 'sports', name: "Sports & Outdoor", hasSub: false },
    { id: 'baby', name: "Baby's & Toys", hasSub: false },
    { id: 'grocery', name: "Groceries & Pets", hasSub: false },
    { id: 'health', name: "Health & Beauty", hasSub: false },
  ];

  return (
    <section className="container mx-auto px-6 flex flex-col md:flex-row gap-4">
      {/* Sidebar Menu */}
      <aside className="w-full md:w-1/4 border-r border-gray-200 pt-10 pr-4 hidden md:block">
        <ul className="flex flex-col gap-4">
          {categories.map((cat) => (
            <li key={cat.id} className="group">
              <div 
                onClick={() => cat.hasSub && toggleMenu(cat.id)}
                className="flex justify-between items-center cursor-pointer hover:text-[#DB4444] transition-colors"
              >
                <span className="text-base">{cat.name}</span>
                {/* Only show symbol if it has a sub-menu */}
                {cat.hasSub && (
                  <span className={`transition-transform duration-300 ${openSubMenu === cat.id ? 'rotate-90' : ''}`}>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6.5 7L1 12.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </div>

              {/* Dropdown Content */}
              {cat.hasSub && openSubMenu === cat.id && (
                <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600 animate-fadeIn">
                  <li className="hover:text-black cursor-pointer">Dresses</li>
                  <li className="hover:text-black cursor-pointer">T-Shirts</li>
                  <li className="hover:text-black cursor-pointer">Shoes</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Banner (Right side) */}
      <div className="flex-1 mt-10 bg-black text-white p-12 flex items-center justify-between relative rounded-sm min-h-[340px]">
        <div>
          <div className="flex items-center gap-4 mb-5">
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="apple" className="w-10 invert" />
             <p className="text-base">iPhone 14 Series</p>
          </div>
          <h2 className="text-5xl font-bold mb-6 leading-[1.2]">Up to 10% <br/> off Voucher</h2>
          <button className="border-b-2 border-white pb-1 font-semibold hover:text-gray-400 transition inline-flex items-center gap-2">
            Shop Now <span>→</span>
          </button>
        </div>
        <div className="hidden lg:block w-1/2">
           <img src={heroimage} alt="iPhone 14" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero
