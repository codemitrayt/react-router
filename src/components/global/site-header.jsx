import LogoLink from "../links/logo-link";
import HeaderLinks from "../links/header-links";
import AuthLinks from "../links/auth-links";
import BlurEffect from "../effects/blur-effect";

const SiteHeader = () => {
  return (
    <header className="border-gray-25/20 bg-gray-900/95 supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50 w-screen border-b backdrop-blur">
      <BlurEffect className="bg-pink-500 size-[150px]" />
      <nav className="container flex items-center justify-between mx-auto h-16">
        <div className="flex items-center justify-center space-x-6">
          <LogoLink withText />
          <HeaderLinks />
        </div>
        <AuthLinks />
      </nav>
    </header>
  );
};

export default SiteHeader;
