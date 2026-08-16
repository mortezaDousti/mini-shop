import type { Product } from '../types/Product';
import './ProductCard.css';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>add to cart</button>
    </div>
  );
}

export default ProductCard;
