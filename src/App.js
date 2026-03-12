import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import pictureA from './a.jpg';
import pictureB from './b.jpg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/a" element={<Product name="Product A" price={10} image={pictureA} />} />
          <Route path="/products/b" element={<Product name="Product B" price={30} image={pictureB} />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
