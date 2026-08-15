import './App.css';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="container">
      <h1>Mini Shop</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
