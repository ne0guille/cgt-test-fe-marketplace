import { Link } from 'react-router';
import { useCartActions, useCartData } from '../../../context/CartContext';
import { CartCountBadge } from '../../../components/CartCountBadge/CartCountBadge';
import { Price } from '../../../components/Price/Price';

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
          width={640}
          height={360}
          loading="lazy"
          className="w-full aspect-video object-cover"
        />
        <span className="absolute top-2 right-2 bg-accent text-primary text-sm font-medium px-2 py-0.5 rounded-full shadow-sm">
          <Price amount={product.price} />
        </span>
        <CartCountBadge quantity={quantity} />
      </div>
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <button
          type='button'
          onClick={handleAddToCart}
          className="px-4 py-2 text-sm bg-primary text-white rounded-full shadow-sm hover:bg-zinc-700 transition-colors"
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
