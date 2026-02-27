import jbl from '../../public/jbl.png'

const EnhanceMusic = () => (
  <section className="container mx-auto px-6 my-20">
    <div className="bg-black text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between rounded-sm">
      <div className="flex flex-col gap-8 max-w-lg text-center md:text-left">
        <span className="text-[#00FF66] font-bold">Categories</span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Enhance Your <br/> Music Experience</h2>
        
        {/* Timer Circles */}
        <div className="flex justify-center md:justify-start gap-4">
          {['23 Hours', '05 Days', '59 Min', '35 Sec'].map((t, i) => (
            <div key={i} className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center">
              <span className="font-bold text-sm leading-tight">{t.split(' ')[0]}</span>
              <span className="text-[10px] leading-tight">{t.split(' ')[1]}</span>
            </div>
          ))}
        </div>
        
        <button className="bg-[#00FF66] text-white px-10 py-4 rounded font-bold w-fit mx-auto md:mx-0 hover:bg-[#00e65c] transition">Buy Now!</button>
      </div>
      <div className="mt-10 md:mt-0">
        <img src={jbl} alt="Speaker" className="drop-shadow-[0_20px_50px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  </section>
);

export default EnhanceMusic
