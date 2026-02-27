import signimage from '../../public/signimage.png'

const LoginPage = () => {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10 lg:gap-20">
      <div className="flex-1 rounded-r-md overflow-hidden bg-[#CBE4E8]">
        {/* Placeholder for the Side Image */}
        <img src={signimage} alt="Login side" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 max-w-md">
        <h2 className="text-4xl font-bold mb-4 tracking-wider">Log in to Exclusive</h2>
        <p className="mb-10 text-gray-600 font-medium">Enter your details below</p>
        <form className="space-y-8">
          <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#DB4444]" />
          <input type="password" placeholder="Password" className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#DB4444]" />
          <div className="flex justify-between items-center pt-4">
            <button className="bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-[#c33a3a] transition-all">Log In</button>
            <button type="button" className="text-[#DB4444] hover:underline">Forget Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;