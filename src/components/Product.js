function Product({ name, price, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Price: {price} USD</p>

      <button onClick={() => console.warn('Not implemented!')}>
        Add to cart
      </button>

      <div><img src={image} width={640} alt={name} /></div>
    </div>
  );
}

export default Product;
