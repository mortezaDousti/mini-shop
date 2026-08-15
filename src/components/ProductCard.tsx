import type { Product } from '../types/Product';
import './ProductCard.css'

type ProductCardProps = {
    product:Product
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='product-card'>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
