import products from '../data/products';
import ProductCard from './ProductCard';

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center pt-lg">Welcome to our shop!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(products).map(([id, product]) => (
          <ProductCard key={id} id={id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
