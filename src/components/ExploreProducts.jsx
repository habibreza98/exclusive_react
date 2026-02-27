import ProductCard from "./ProductCard";
import card from '../../public/card.png'
import camera from '../../public/camera.png'
import laptop from '../../public/laptop.png'
import cream from '../../public/cream.png'
import car from '../../public/car.png'
import shoes from '../../public/shoes.png'
import controller from '../../public/controller.png'
import jacket from '../../public/jacket.png'

const ExploreProducts = () => {
  // Mock data for the 8 products shown in your screenshot
  const products = [
    { id: 1, title: "Breed Dry Dog Food", price: 100, rating: 35, image: card, reviews: 35 },
    { id: 2, title: "CANON EOS DSLR Camera", price: 360, rating: 95, image: camera, reviews: 95 },
    { id: 3, title: "ASUS FHD Gaming Laptop", price: 700, rating: 325, image: laptop, reviews: 325 },
    { id: 4, title: "Curology Product Set", price: 500, rating: 145, image: cream, reviews: 145 },
    { id: 5, title: "Kids Electric Car", price: 960, rating: 65, image: car, reviews: 65, isNew: true },
    { id: 6, title: "Jr. Zoom Terrex Hiking Shoes", price: 1160, rating: 35, image: shoes, reviews: 35 },
    { id: 7, title: "GP11 Gamepad", price: 660, rating: 55, image: controller, reviews: 55, isNew: true },
    { id: 8, title: "Quilted Satin Jacket", price: 660, rating: 55, image: jacket, reviews: 55 },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-bold">Our Products</span>
      </div>
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-bold">Explore Our Products</h2>
        <div className="flex gap-2">
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">←</button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200">→</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-[#c33a3a] transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts
