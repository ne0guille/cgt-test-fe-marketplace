function cartItems() {
  return [];
}

function Cart() {
  return (
    <div>
      Are you ready to purchase these?

      <ul>
        {cartItems().map((cartItem) => <li key={cartItem}>{cartItem}</li>)}
      </ul>
    </div>
  );
}

export default Cart;
