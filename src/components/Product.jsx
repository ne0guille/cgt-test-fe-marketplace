import { useParams } from 'react-router';
import products from '../data/products';
import { useCartActions, useCartData } from '../context/CartContext';
import CartCountBadge from './CartCountBadge';

function Product() {
  const { id } = useParams();
  const { addToCart } = useCartActions();
  const { cart } = useCartData();
  const product = products[id];
  const quantity = cart[id] || 0;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <span className="text-xl font-semibold text-secondary">${product.price} USD</span>
      </div>
      <div className="relative mb-4">
        <img src={product.image} className="w-full rounded-lg" alt={product.name} />
        <CartCountBadge quantity={quantity} />
      </div>
      <button
        onClick={() => addToCart(id)}
        className="w-full py-4 px-8 bg-primary text-white text-lg font-semibold rounded-full shadow-sm hover:opacity-90 transition-opacity"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
