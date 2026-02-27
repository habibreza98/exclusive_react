import playstation from '../../public/playstation.png'
import women from '../../public/women.png'
import speaker from '../../public/speaker.png'
import perfume from '../../public/perfume.png'


const NewArrival = () => (
  <section className="container mx-auto px-6 py-12">
    <div className="flex items-center gap-4 mb-5">
      <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
      <span className="text-[#DB4444] font-bold">Featured</span>
    </div>
    <h2 className="text-3xl font-bold mb-10">New Arrival</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
      {/* PS5 Section */}
      <div className="bg-black relative rounded p-8 flex items-end overflow-hidden group">
        <img src={playstation} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain" alt="PS5" />
        <div className="z-10 text-white max-w-xs space-y-4">
          <h3 className="text-2xl font-bold">PlayStation 5</h3>
          <p className="text-sm text-gray-300">Black and White version of the PS5 coming out on sale.</p>
          <button className="border-b border-white pb-1 font-medium">Shop Now</button>
        </div>
      </div>
      
      {/* Right Column Grid */}
      <div className="grid grid-rows-2 gap-8">
        <div className="bg-black relative rounded p-8 flex items-end overflow-hidden">
          <img src={women} className="absolute right-0 bottom-0" alt="Women collection" />
          <div className="z-10 text-white max-w-xs space-y-2">
            <h3 className="text-xl font-bold">Women’s Collections</h3>
            <p className="text-xs text-gray-300">Featured woman collections that give you another vibe.</p>
            <button className="border-b border-white text-sm pb-1 font-medium">Shop Now</button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-black p-8 flex flex-col justify-end relative rounded overflow-hidden">
            <img src={speaker} alt="Speakers" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="text-white z-10 space-y-1">
              <h3 className="text-lg font-bold">Speakers</h3>
              <p className="text-[10px] text-gray-300">Amazon wireless speakers</p>
              <button className="border-b text-xs border-white pb-1 font-medium">Shop Now</button>
            </div>
          </div>
          <div className="bg-black p-8 flex flex-col justify-end relative rounded overflow-hidden">
            <img src={perfume} alt="Perfume" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="text-white z-10 space-y-1">
              <h3 className="text-lg font-bold">Perfume</h3>
              <p className="text-[10px] text-gray-300">GUCCI INTENSE OUD EDP</p>
              <button className="border-b text-xs border-white pb-1 font-medium">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewArrival
