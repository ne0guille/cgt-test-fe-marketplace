import { useParams } from 'react-router';
import products from '../data/products';

function Product() {
  const { id } = useParams();
  const product = products[id];

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-md">
      <div className="flex justify-between items-center mb-md">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <span className="text-xl font-semibold text-secondary">${product.price} USD</span>
      </div>
      <div className="mb-md">
        <img src={product.image} className="w-full rounded-lg" alt={product.name} />
      </div>
      <button
        onClick={() => console.warn('Not implemented!')}
        className="w-full py-md px-lg bg-primary text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
