import { useCartData, useCartActions } from '../context/CartContext';
import products from '../data/products';

function Cart() {
  const { cart } = useCartData();
  const { removeFromCart } = useCartActions();
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    return <div className="p-md">Your cart is empty.</div>;
  }

  return (
    <div className="p-md">
      <h2 className="text-xl font-bold mb-md">Are you ready to purchase these?</h2>
      <ul>
        {entries.map(([id, qty]) => {
          const product = products[id];
          return (
            <li key={id} className="flex justify-between items-center mb-sm">
              <span>
                {product.name} — ${product.price} USD × {qty}
              </span>
              <button
                onClick={() => removeFromCart(id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
