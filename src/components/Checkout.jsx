import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 py-12">
      <nav className="text-sm text-gray-400 mb-20">Account / My Account / Product / View Cart / <span className="text-black">CheckOut</span></nav>
      <h1 className="text-4xl font-medium mb-12">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-24">
        {/* Left: Billing Form */}
        <div className="flex-1 space-y-8">
          {[
            { label: "First Name", required: true },
            { label: "Company Name", required: false },
            { label: "Street Address", required: true },
            { label: "Apartment, floor, etc. (optional)", required: false },
            { label: "Town/City", required: true },
            { label: "Phone Number", required: true },
            { label: "Email Address", required: true },
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">
                {field.label}{field.required && <span className="text-[#DB4444]">*</span>}
              </label>
              <input type="text" className="bg-[#F5F5F5] p-3 rounded outline-none" />
            </div>
          ))}
          <div className="flex items-center gap-4">
            <input type="checkbox" id="save" className="w-5 h-5 accent-[#DB4444]" />
            <label htmlFor="save" className="text-sm cursor-pointer">Save this information for faster check-out next time</label>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-[500px] space-y-8 pt-4">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="monitor.png" alt="item" className="w-12 h-12 object-contain" />
                <span>LCD Monitor</span>
              </div>
              <span>$650</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="gamepad.png" alt="item" className="w-12 h-12 object-contain" />
                <span>H1 Gamepad</span>
              </div>
              <span>$1100</span>
            </div>
          </div>

          <div className="border-b border-gray-300 pb-4 space-y-4">
            <div className="flex justify-between"><span>Subtotal:</span><span>$1750</span></div>
            <div className="flex justify-between border-b border-gray-300 pb-4"><span>Shipping:</span><span>Free</span></div>
            <div className="flex justify-between pt-2"><span>Total:</span><span>$1750</span></div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" id="bank" className="accent-black w-5 h-5" />
                <label htmlFor="bank">Bank</label>
              </div>
              <img src="https://via.placeholder.com/150x30?text=Payment+Icons" alt="cards" className="h-6" />
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="payment" id="cod" className="accent-black w-5 h-5" defaultChecked />
              <label htmlFor="cod">Cash on delivery</label>
            </div>
          </div>

          <div className="flex gap-4">
            <input type="text" placeholder="Coupon Code" className="border border-black rounded px-6 py-4 flex-1 outline-none" />
            <button className="bg-[#DB4444] text-white px-10 py-4 rounded font-medium">Apply Coupon</button>
          </div>

          <button className="bg-[#DB4444] text-white w-full py-4 rounded font-medium hover:bg-[#E07575] transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;