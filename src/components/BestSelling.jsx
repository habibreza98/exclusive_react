import ProductCard from './ProductCard'
import coat from '../../public/coat.png'
import gucci from '../../public/gucci.png'
import cooler from '../../public/cooler.png'
import shelf from '../../public/shelf.png'

const BestSelling = () => {
  const bestProducts = [
    { 
      id: 101, 
      title: "The north coat", 
      price: 260, 
      oldPrice: 360, 
      rating: 65, 
      reviews: 65, 
      image: coat
    },
    { 
      id: 102, 
      title: "Gucci duffle bag", 
      price: 960, 
      oldPrice: 1160, 
      rating: 65, 
      reviews: 65, 
      image: gucci 
    },
    { 
      id: 103, 
      title: "RGB liquid CPU Cooler", 
      price: 160, 
      oldPrice: 170, 
      rating: 65, 
      reviews: 65, 
      image: cooler
    },
    { 
      id: 104, 
      title: "Small Bookshelf", 
      price: 360, 
      rating: 65, 
      reviews: 65, 
      image: shelf
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Subtitle with Red Decoration */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-bold">This Month</span>
      </div>

      {/* Header with View All Button */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Best Selling Products</h2>
        <button className="bg-[#DB4444] text-white px-10 py-3 rounded font-medium hover:bg-[#c33a3a] transition-colors">
          View All
        </button>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling
