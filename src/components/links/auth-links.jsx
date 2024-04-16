import { Link } from "react-router-dom";

const AuthLinks = () => {
  return (
    <div className="flex items-center justify-center space-x-6">
      <Link
        to="/auth/sign-in"
        className="z-10 group relative flex items-center justify-center px-4 py-1.5 rounded-md text-sm border border-pink-500  transition-all cursor-pointer"
      >
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-pink-500 h-[10px] w-full blur-[20px]"></div>
        Sign In
      </Link>

      <Link
        to="/auth/sign-up"
        className="z-10 group relative flex items-center justify-center px-4 py-1.5 rounded-md text-sm bg-button-gradient transition-all cursor-pointer"
      >
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-pink-500 h-[10px] w-full blur-[20px]"></div>
        Sign Up
      </Link>
    </div>
  );
};

export default AuthLinks;
