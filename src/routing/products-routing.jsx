import react from "react";
import { useNavigate } from "react-router";
const ProductRouting = () => {
  const product = [
    { id: 1, name: "Laptop", price: 5000 },
    { id: 2, name: "Mobile", price: 6000 },
    { id: 3, name: "Mac", price: 7000 },
    { id: 4, name: "Shirt", price: 14000 },
  ];
  const navigate = useNavigate();
  return (
    <div>
      {product.map((item, index) => {
        return (
          <div
            onClick={() => {
              navigate(`/product-details/:${item.id}`);
            }}
          >
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default ProductRouting;
