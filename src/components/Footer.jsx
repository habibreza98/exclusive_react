import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#FAFAFA] pt-20 pb-6 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-800 pb-16">
        
        {/* 1. Exclusive Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-wider">Exclusive</h2>
          <h3 className="text-xl font-medium">Subscribe</h3>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="flex items-center border border-[#FAFAFA] rounded p-2 max-w-[220px]">
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="bg-transparent text-sm outline-none w-full"
            />
            <button>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 2. Support Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Support</h2>
          <p className="text-sm leading-6">111 Bijoy sarani, Dhaka, <br/>  DH 1515, Bangladesh.</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* 3. Account Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Account</h2>
          <ul className="text-sm flex flex-col gap-3">
            <li className="hover:underline cursor-pointer">My Account</li>
            <li className="hover:underline cursor-pointer">Login / Register</li>
            <li className="hover:underline cursor-pointer">Cart</li>
            <li className="hover:underline cursor-pointer">Wishlist</li>
            <li className="hover:underline cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* 4. Quick Link Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Quick Link</h2>
          <ul className="text-sm flex flex-col gap-3">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms Of Use</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 5. Download App Section (The missing part) */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Download App</h2>
          <p className="text-[12px] text-gray-400 font-medium">Save $3 with App New User Only</p>
          
          <div className="flex gap-2 items-center">
            {/* QR Code Placeholder */}
            <div className="bg-white p-1 rounded-sm w-20 h-20">
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Exclusive" alt="QR Code" className="w-full h-full" />
            </div>
            
            {/* Store Badges */}
            <div className="flex flex-col gap-2">
              <button className="hover:opacity-80 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-28" />
              </button>
              <button className="hover:opacity-80 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-28" />
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
             <button className="hover:text-gray-400 transition"><Facebook /></button>
             <button className="hover:text-gray-400 transition"><Twitter /></button>
             <button className="hover:text-gray-400 transition"><Instagram /></button>
             <button className="hover:text-gray-400 transition"><Linkedin /></button>
          </div>
        </div>

      </div>
      
      <p className="text-center text-gray-600 mt-6 text-sm">
        © Copyright Rimel 2026. All rights reserved
      </p>
    </footer>
  );
};

export default Footer
