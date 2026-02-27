

const TopHeader = () => {
  return (
    <div className="w-full bg-black text-[#FAFAFA] py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Empty div to help center the middle text */}
        <div className="hidden md:block w-32"></div> 
        
        <div className="flex flex-col md:flex-row items-center gap-2 text-xs md:text-sm">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <button className="font-semibold underline hover:text-gray-300 transition-colors">
            ShopNow
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1 text-sm cursor-pointer">
          <span>English</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopHeader
