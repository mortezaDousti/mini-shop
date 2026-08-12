type ProductCardProps = {
  name: string;
  price: number;
};

function ProductCard({ name, price }: ProductCardProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>${price}</p>
    </>
  );
}

export default ProductCard;
