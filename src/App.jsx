import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home';
import About from './Routes/About';
import Products from './Routes/Products';
import Infrastructure from './Routes/Infrastructure';
import Clientele from './Routes/Clientele';
import Testimonials from './Routes/Testimonials';
import Business from './Routes/Business';
import Support from './Routes/Support';
import Contact from './Routes/Contact';


function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/opportunities" element={<Business />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      
    </>
  );
}

export default App;