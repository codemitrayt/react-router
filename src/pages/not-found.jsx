import React from "react";
import GoBackButton from "../components/global/go-back-button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh_-130px)]">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-white text-2xl">Oops Page Not Found!</h1>
        <GoBackButton className="mt-8" />
      </div>
    </div>
  );
};

export default NotFound;
