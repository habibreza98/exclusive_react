import React from 'react';
import { Trash2, ShoppingCart, Eye } from 'lucide-react';

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: "Gucci duffle bag", price: 960, oldPrice: 1160, discount: 35, image: "gucci.png" },
    { id: 2, name: "RGB liquid CPU Cooler", price: 1960, image: "cooler.png" },
    { id: 3, name: "GP11 Shooter USB Gamepad", price: 550, image: "controller.png" },
    { id: 4, name: "Quilted Satin Jacket", price: 750, image: "jacket.png" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-16 py-12">
      {/* Wishlist Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-normal">Wishlist (4)</h2>
        <button className="border border-black px-12 py-4 rounded font-medium hover:bg-black hover:text-white transition">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {wishlistItems.map((product) => (
          <div key={product.id} className="group">
            <div className="bg-[#F5F5F5] rounded relative h-[250px] flex items-center justify-center overflow-hidden">
              {product.discount && (
                <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full">
                <Trash2 size={18} />
              </button>
              <img src={product.image} alt={product.name} className="w-40 object-contain" />
              <button className="absolute bottom-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShoppingCart size={18} /> Add To Cart
              </button>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-bold text-base">{product.name}</h3>
              <div className="flex gap-3">
                <span className="text-[#DB4444] font-medium">${product.price}</span>
                {product.oldPrice && <span className="text-gray-400 line-through">${product.oldPrice}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
          <h2 className="text-xl font-normal">Just For You</h2>
        </div>
        <button className="border border-black px-12 py-4 rounded font-medium hover:bg-black hover:text-white transition">
          See All
        </button>
      </div>

      {/* Recommendations Grid */}
      {/* Reuse your ProductCard component here */}
    </div>
  );
};

export default Wishlist;