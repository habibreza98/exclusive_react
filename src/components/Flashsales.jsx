import ProductCard from "./ProductCard"
import keyboard from '../../public/keyboard.png'
import chair from '../../public/chair.png'
import console from '../../public/console.png'
import monitor from '../../public/monitor.png'

const Flashsales = () => {
  return (
    <section className="container mx-auto px-6 py-10 border-b">
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-5 h-10 bg-exclusive-red rounded-sm"></div>
      <span className="text-exclusive-red font-bold">Today's</span>
    </div>
    <h2 className="text-3xl font-bold mb-8">Flash Sales</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <ProductCard title="HAVIT HV-G92 Gamepad" price={120} discount={40} rating={88} image={console} />
      <ProductCard title="AK-900 Wired Keyboard" price={960} discount={35} rating={75} image={keyboard} />
      <ProductCard title="IPS LCD Gaming Monitor" price={370} discount={30} rating={99} image={monitor} />
      <ProductCard title="S-Series Comfort Chair" price={375} discount={25} rating={99} image={chair} />
    </div>
  </section>
  )
}

export default Flashsales
