import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './features/home/Home';

const Product = lazy(() => import('./features/product/Product'));
const Cart = lazy(() => import('./features/cart/Cart'));

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
