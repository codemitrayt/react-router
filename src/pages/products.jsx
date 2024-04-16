import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/cards/product-card";
import Container from "../components/global/container";
import Heading from "../components/global/heading";

const Products = () => {
  const { products } = useLoaderData();

  return (
    <div className="min-h-screen relative">
      <Container>
        <Heading title="Choose Your Favourite Food and Enjoy" />
        <div className="grid grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
