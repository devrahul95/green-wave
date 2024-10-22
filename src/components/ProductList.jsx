import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
  const navigate = useNavigate();


  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
