import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

const Product = lazy(() => import('./components/Product'));
const Cart = lazy(() => import('./components/Cart'));

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
