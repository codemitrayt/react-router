import GoBackButton from "../components/global/go-back-button";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <div className="flex items-center justify-center h-[calc(100vh_-130px)] w-full">
      <div className="flex items-center justify-center flex-col">
        <GoBackButton />
        <h1 className="text-primary">Product ID: {productId}</h1>
      </div>
    </div>
  );
};

export default SingleProduct;
