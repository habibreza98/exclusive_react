
const BrowseCategory = () => {
  const categories = [
    { name: 'Phones', icon: '📱' },
    { name: 'Computers', icon: '💻' },
    { name: 'SmartWatch', icon: '⌚' },
    { name: 'Camera', icon: '📷', active: true }, // Red background in design
    { name: 'HeadPhones', icon: '🎧' },
    { name: 'Gaming', icon: '🎮' },
  ];

  return (
    <section className="container mx-auto px-6 py-12 border-b border-gray-200">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-bold">Categories</span>
      </div>
      <h2 className="text-3xl font-bold mb-10">Browse By Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className={`border border-gray-300 rounded flex flex-col items-center justify-center py-8 gap-4 hover:bg-[#DB4444] hover:text-white transition-all cursor-pointer ${cat.active ? 'bg-[#DB4444] text-white border-none' : ''}`}>
            <span className="text-4xl">{cat.icon}</span>
            <span className="text-sm font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategory
