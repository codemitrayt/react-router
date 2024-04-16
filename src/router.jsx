import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  useNavigation,
} from "react-router-dom";

import { getProducts } from "./api";

import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Stores from "./pages/stores";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";

import SiteHeader from "./components/global/site-header";
import SiteFooter from "./components/global/site-footer";
import { BounceLoader } from "react-spinners";
import NotFound from "./pages/not-found";
import SingleProduct from "./pages/single-product";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="bg-gray-900 relative flex min-h-screen flex-col text-white">
      <SiteHeader />
      <div className="flex-1">
        {navigation.state === "loading" ? (
          <div className="flex items-center h-[calc(100vh_-130px)] justify-center">
            <BounceLoader color="#fd366e" />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <SiteFooter />
    </div>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} loader={getProducts} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route path="stores" element={<Stores />} />
      <Route path="cart" element={<Cart />} />
      <Route path="auth">
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
