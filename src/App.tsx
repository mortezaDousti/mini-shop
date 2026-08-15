import ProductCard from './components/ProductCard';
import { products } from './data/products';
function App() {
  return (
    <>
      <h1>Mini Shop</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default App;
