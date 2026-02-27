import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 py-12">
      <nav className="text-sm text-gray-400 mb-20">Home / <span className="text-black">Contact</span></nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Info */}
        <div className="w-full lg:w-1/3 shadow-sm rounded p-10 space-y-8">
          <div className="border-b border-gray-300 pb-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#DB4444] p-3 rounded-full text-white"><Phone size={24} /></div>
              <h3 className="font-medium text-lg">Call To Us</h3>
            </div>
            <p className="text-sm">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#DB4444] p-3 rounded-full text-white"><Mail size={24} /></div>
              <h3 className="font-medium text-lg">Write To US</h3>
            </div>
            <p className="text-sm">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 shadow-sm rounded p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Your Name *" className="bg-[#F5F5F5] p-4 rounded outline-none" required />
              <input type="email" placeholder="Your Email *" className="bg-[#F5F5F5] p-4 rounded outline-none" required />
              <input type="tel" placeholder="Your Phone *" className="bg-[#F5F5F5] p-4 rounded outline-none" required />
            </div>
            <textarea placeholder="Your Massage" rows="8" className="w-full bg-[#F5F5F5] p-4 rounded outline-none resize-none"></textarea>
            <div className="flex justify-end">
              <button className="bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-[#E07575] transition">
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;