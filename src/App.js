import {BrowserRouter as Router , Routes ,Roure, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<ProductDetails />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </Router>
  );
}

export default App;
