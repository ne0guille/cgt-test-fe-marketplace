import { useParams } from 'react-router';
import products from '../data/products';

function Product() {
  const { id } = useParams();
  const product = products[id];

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price} USD</p>
      <button onClick={() => console.warn('Not implemented!')}>Add to cart</button>
      <div><img src={product.image} width={640} alt={product.name} /></div>
    </div>
  );
}

export default Product;
