function CartCountBadge({ quantity }) {
  return quantity > 0 ? (
    <span className="absolute top-2 left-2 bg-green-500 text-white text-sm font-medium px-2 py-0.5 rounded-full shadow-sm">
      ✓ {quantity}
    </span>
  ) : null;
}

export default CartCountBadge;
