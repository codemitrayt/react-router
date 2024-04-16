import { IoLogoStencil } from "react-icons/io5";
import siteConfig from "../../config/site-config";
import { Link } from "react-router-dom";

const LogoLink = ({ withText = false }) => {
  return (
    <Link
      to="/"
      className="z-50 flex items-center justify-center space-x-1 cursor-pointer"
    >
      <IoLogoStencil className="text-pink-500 size-6" />
      {withText && <h1 className="text-xl text-white">{siteConfig.name}</h1>}
    </Link>
  );
};

export default LogoLink;
