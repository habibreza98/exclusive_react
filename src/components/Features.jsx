const DeliveryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13H26V28H10V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 18H33L37 22V28H26V18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15" cy="31" r="3" stroke="white" strokeWidth="2"/>
    <circle cx="31" cy="31" r="3" stroke="white" strokeWidth="2"/>
  </svg>
);

const ServiceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33 20C33 27.1797 27.1797 33 20 33C12.8203 33 7 27.1797 7 20C7 12.8203 12.8203 7 20 7C27.1797 7 33 12.8203 33 20Z" stroke="white" strokeWidth="2"/>
    <path d="M25 16L18 23L15 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GuaranteeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5L5 11V21C5 29.5 11.5 36.5 20 39C28.5 36.5 35 29.5 35 21V11L20 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Features = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-[#C1C1C1] rounded-full flex items-center justify-center">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <DeliveryIcon />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl uppercase tracking-tight">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-black">Free delivery for all orders over $140</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-[#C1C1C1] rounded-full flex items-center justify-center">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <ServiceIcon />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl uppercase tracking-tight">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-black">Friendly 24/7 customer support</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-[#C1C1C1] rounded-full flex items-center justify-center">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <GuaranteeIcon />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl uppercase tracking-tight">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-black">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Features
