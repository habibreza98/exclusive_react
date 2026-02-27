import about from '../../public/about.png'
import about1 from '../../public/about1.png'
import about2 from '../../public/about2.png'
import about3 from '../../public/about3.png'
import { Twitter, Instagram, Linkedin, Store, DollarSign, ShoppingBag, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Store />, value: "10.5k", label: "Sellers active our site", active: false },
    { icon: <DollarSign />, value: "33k", label: "Monthly Product Sale", active: true },
    { icon: <ShoppingBag />, value: "45.5k", label: "Customer active in our site", active: false },
    { icon: <Briefcase />, value: "25k", label: "Annual gross sale in our site", active: false },
  ];

  return (
    <div className="container mx-auto px-4 md:px-16 py-12">
      <nav className="text-sm text-gray-400 mb-20">Home / <span className="text-black">About</span></nav>

      <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl font-semibold tracking-widest">Our Story</h1>
          <p className="leading-relaxed">Launced in 2015, Exclusive is South Asia's premier online shopping maketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="leading-relaxed">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
        </div>
        <div className="flex-1">
          <img src={about} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {stats.map((stat, idx) => (
          <div key={idx} className={`border rounded p-8 text-center flex flex-col items-center gap-4 transition-all hover:bg-[#DB4444] hover:text-white group ${stat.active ? 'bg-[#DB4444] text-white' : ''}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-8 transition-all ${stat.active ? 'bg-white text-black border-white/30' : 'bg-black text-white border-gray-300 group-hover:bg-white group-hover:text-black group-hover:border-white/30'}`}>
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        {[
          { name: "Tom Cruise", role: "Founder & Chairman", img: about1 },
          { name: "Emma Watson", role: "Managing Director", img: about2 },
          { name: "Will Smith", role: "Product Designer", img: about3 }
        ].map((person, idx) => (
          <div key={idx} className="space-y-4">
            <div className="bg-[#F5F5F5] pt-10 px-10 rounded-sm overflow-hidden h-[430px] flex items-end">
              <img src={person.img} alt={person.name} className="size-[400px] grayscale hover:grayscale-0 transition-all duration-300 w-full" />
            </div>
            <h3 className="text-3xl font-medium">{person.name}</h3>
            <p className="text-gray-500">{person.role}</p>
            <div className="flex gap-4">
              <Twitter size={20} className="cursor-pointer" />
              <Instagram size={20} className="cursor-pointer" />
              <Linkedin size={20} className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;