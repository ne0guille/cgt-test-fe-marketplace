import { Link } from 'react-router';
import { useCartActions, useCartData } from '../context/CartContext';

function ProductCard({ id, product }) {
  const { addToCart } = useCartActions();
  const { cart } = useCartData();
  const quantity = cart[id] || 0;

  const handleAddToCart = (e) => {
      e.preventDefault();
      addToCart(id);
    }

  return (
    <Link
      to={`/products/${id}`}
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-video object-cover"
        />
        <span className="absolute top-sm right-sm bg-accent text-primary text-sm font-medium px-sm py-0.5 rounded-full shadow-sm">
          ${product.price}
        </span>
        {quantity > 0 ? (
          <span className="absolute top-sm left-sm bg-green-500 text-white text-sm font-medium px-sm py-0.5 rounded-full shadow-sm">
            ✓ {quantity}
          </span>
        ) : null}
      </div>
      <div className="p-md flex justify-between items-center">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <button
          type='button'
          onClick={handleAddToCart}
          className="px-md py-sm text-sm bg-primary text-white rounded-full shadow-sm hover:opacity-90 transition-opacity"
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
