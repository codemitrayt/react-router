import Container from "../components/global/container";
import Heading from "../components/global/heading";
import ServeCard from "../components/cards/serve-card";

import { TbFreezeRow } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

const Home = () => {
  return (
    <div className="relative w-screen overflow-hidden min-h-screen">
      <Container>
        <div className="relative">
          <Heading
            title="Your Favourite Food Delivery Partner Fudo"
            text="We are focused on being the best helping hand to local bussinesses"
            className="!mb-6"
          />
          <div className="flex items-center justify-center">
            <a
              href="/products"
              className="z-10 group relative flex items-center justify-center px-4 py-1.5 rounded-md text-sm bg-button-gradient transition-all cursor-pointer"
            >
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-pink-500 h-[10px] w-full blur-[20px]"></div>
              Order Now
            </a>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-2xl text-gray-200">What We Serve</h1>
          <p className="text-gray-500">
            Be The Fastest In Delivering Your Food
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-10 gap-8">
          <ServeCard
            icon={<FaShippingFast className="size-20 text-yellow-500" />}
            title="Fastest Delivery"
            description="Delivery that is always ontime even faster."
          />

          <ServeCard
            icon={<TbFreezeRow className="size-20 text-orange-500" />}
            title="Easy To Order"
            description="You only need a few steps in ordering food."
          />

          <ServeCard
            icon={<GiHotMeal className="size-20 text-mint-500" />}
            title="Best Quality"
            description="Not only fast for us quality is also number one."
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
