import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components
import TopHeader from './components/TopHeader';
import Bottomheader from './components/Bottomheader';
import Hero from './components/Hero';
import Flashsales from './components/Flashsales';
import BrowseCategory from './components/BrowseCategory';
import BestSelling from './components/BestSelling';
import EnhanceMusic from './components/EnhanceMusic';
import ExploreProducts from './components/ExploreProducts';
import NewArrival from './components/NewArrival';
import Features from './components/Features';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Account from './components/Account';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';


// PAGE IMPORTS - Make sure these files exist in your components folder!
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage'; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-black">
        <TopHeader />
        <Bottomheader />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Flashsales />
              <BrowseCategory />
              <BestSelling />
              <EnhanceMusic />
              <ExploreProducts />
              <NewArrival />
              <Features />
            </main>
          } />

          
  <Route path="/" element={<App />} />
  <Route path="/signup" element={<SignUpPage />} /> {/* MUST BE LOWERCASE 'signup' */}
  <Route path="/login" element={<LoginPage />} />
  <Route path="/wishlist" element={<Wishlist />} />
<Route path="/cart" element={<Cart />} />
<Route path="/account" element={<Account />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;