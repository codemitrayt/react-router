import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";

const GoBackButton = ({ className }) => {
  const navigate = useNavigate();
  return (
    <button
      className={cn(
        "px-4 py-1 group rounded-full mb-10 border flex items-center justify-center space-x-2 hover:text-pink-500 hover:text-pink-500 tranistion-all",
        className
      )}
      onClick={() => navigate(-1)}
    >
      <IoArrowBack className="group-hover:text-pink-500" />
      <span>Go Back</span>
    </button>
  );
};

export default GoBackButton;
