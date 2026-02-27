import signimage from '../../public/signimage.png'
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10 lg:gap-20">
      {/* Left Side: Image */}
      <div className="flex-1 rounded-r-md overflow-hidden bg-[#CBE4E8] min-h-[400px] flex items-center justify-center">
        <img 
          src={signimage} 
          alt="Sign up" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 max-w-md">
        <h2 className="text-4xl font-bold mb-4 tracking-wider">Create an account</h2>
        <p className="mb-10 text-gray-600 font-medium text-base">Enter your details below</p>
        
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#DB4444] transition-all" 
          />
          <input 
            type="email" 
            placeholder="Email or Phone Number" 
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#DB4444] transition-all" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#DB4444] transition-all" 
          />
          
          <button className="w-full bg-[#DB4444] text-white py-4 rounded font-medium hover:bg-[#c33a3a] transition-all mt-4">
            Create Account
          </button>
          
          <button className="w-full border border-gray-300 py-4 rounded font-medium flex items-center justify-center gap-4 hover:bg-gray-50 transition-all">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="google" />
            Sign up with Google
          </button>
        </form>
        
        <p className="mt-8 text-center text-gray-600">
          Already have an account? 
          <Link to="/login" className="text-black font-bold border-b border-black ml-4 pb-1 hover:text-[#DB4444] hover:border-[#DB4444] transition-all">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;