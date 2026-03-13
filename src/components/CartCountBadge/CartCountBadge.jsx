export const CartCountBadge = ({ quantity }) => {
  return quantity > 0 ? (
    <span role="status" className="absolute top-2 left-2 bg-green-500 text-white text-sm font-medium px-2 py-0.5 rounded-full shadow-sm">
      <span aria-hidden="true">✓</span> {quantity}
    </span>
  ) : null;
}

