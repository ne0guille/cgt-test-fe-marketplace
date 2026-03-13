import { useCartData, useCartActions } from '../../context/CartContext';
import products from '../../data/products';
import { calculateCartTotal } from '../../utils/cartUtils';
import { Price } from '../../components/Price/Price';

const trashIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

function Cart() {
  const { cart } = useCartData();
  const { removeFromCart } = useCartActions();
  const cartItems = Object.entries(cart);
  const total = calculateCartTotal(cart, products);

  if (cartItems.length === 0) {
    return <div className="p-4">Your cart is empty.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-pretty">Are you ready to purchase these?</h1>
      <ul>
        {cartItems.map(([id, qty]) => {
          const product = products[id];
          return (
            <li key={id} className="flex justify-between items-center mb-2">
              <div className="flex gap-3 items-center">
                <img src={product.image} alt={product.name} width={48} height={48} className="w-12 h-12 object-cover rounded" />
                <span>
                  {product.name} — <Price amount={product.price} /> × {qty}
                </span>
              </div>
              <button
                type='button'
                onClick={() => removeFromCart(id)}
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Remove from cart"
              >
                {trashIcon}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="border-t pt-4 mt-4 text-right font-bold text-lg">
        Total: <Price amount={total} />
      </div>
    </div>
  );
}

export default Cart;
