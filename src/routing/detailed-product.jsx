import react from "react";
import { useParams } from "react-router";

const DetailedProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Detailed product {id}</h1>
    </div>
  );
};
export default DetailedProduct;
