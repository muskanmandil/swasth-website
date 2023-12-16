
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from "./Components/Footer/Footer.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />}></Route>
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
