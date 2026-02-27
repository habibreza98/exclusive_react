import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = [
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, subtotal: 650, image: "monitor.png" },
    { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, subtotal: 1100, image: "console.png" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-16 py-12">
      <nav className="text-sm text-gray-400 mb-20">Home / <span className="text-black">Cart</span></nav>

      {/* Table Headers */}
      <div className="hidden md:grid grid-cols-4 shadow-sm p-6 mb-10 rounded text-base font-normal">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="text-right">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="space-y-10 mb-10">
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center shadow-sm p-6 rounded relative group">
            <button className="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">×</button>
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
              <span className="text-base">{item.name}</span>
            </div>
            <div className="text-base">${item.price}</div>
            <div>
              <input type="number" defaultValue={item.quantity} className="w-16 border-2 border-gray-200 rounded px-2 py-1 outline-none" />
            </div>
            <div className="text-right text-base font-normal">${item.subtotal}</div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-20">
        <button className="border border-black px-12 py-4 rounded font-medium">Return To Shop</button>
        <button className="border border-black px-12 py-4 rounded font-medium">Update Cart</button>
      </div>

      {/* Bottom Section: Coupon & Total */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex gap-4 h-14">
          <input type="text" placeholder="Coupon Code" className="border border-black rounded px-6 w-64 outline-none" />
          <button className="bg-[#DB4444] text-white px-12 rounded font-medium hover:bg-[#E07575]">Apply Coupon</button>
        </div>

        <div className="border-2 border-black rounded-md p-8 w-full max-w-md">
          <h3 className="text-xl font-medium mb-6">Cart Total</h3>
          <div className="flex justify-between border-b border-gray-300 pb-4 mb-4 text-base">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-4 mb-4 text-base">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-8 text-base">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <div className="text-center">
            <Link to="/checkout">
  <button className="bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-[#E07575] transition-all">
    Process to checkout
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;