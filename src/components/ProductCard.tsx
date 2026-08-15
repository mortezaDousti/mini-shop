import type { Product } from '../types/Product';

type ProductCardProps = {
    product:Product
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </>
  );
}

export default ProductCard;
