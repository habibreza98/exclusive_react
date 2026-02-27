
// This is the "Blueprint" that the other sections need to work.
// It doesn't create a section on its own; it just tells React HOW to show a product.
const ProductCard = ({ title, price, oldPrice, discount, reviews, image, isNew }) => (
  <div className="group cursor-pointer w-full">
    <div className="bg-[#F5F5F5] rounded relative flex items-center justify-center h-[250px] overflow-hidden">
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        {discount && <span className="bg-[#DB4444] text-white text-[12px] px-3 py-1 rounded">-{discount}%</span>}
        {isNew && <span className="bg-[#00FF66] text-black text-[12px] px-3 py-1 rounded">NEW</span>}
      </div>
      
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white p-2 rounded-full hover:bg-[#DB4444] hover:text-white transition">❤️</button>
        <button className="bg-white p-2 rounded-full hover:bg-[#DB4444] hover:text-white transition">👁️</button>
      </div>

      <img src={image} alt={title} className="w-40 object-contain group-hover:scale-105 transition duration-300" />
      
      <button className="absolute bottom-0 w-full bg-black text-white py-2 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        Add To Cart
      </button>
    </div>
    
    <div className="mt-4 flex flex-col gap-1 text-left">
      <h3 className="font-bold text-base truncate uppercase">{title}</h3>
      <div className="flex gap-3 items-center">
        <span className="text-[#DB4444] font-semibold">${price}</span>
        {oldPrice && <span className="text-gray-400 line-through text-sm">${oldPrice}</span>}
      </div>
      <div className="flex items-center gap-2">
        <div className="text-[#FFAD33] text-sm">★★★★★</div>
        <span className="text-gray-500 text-xs font-semibold">({reviews})</span>
      </div>
    </div>
  </div>
);

export default ProductCard
