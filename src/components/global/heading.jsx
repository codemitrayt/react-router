import { cn } from "../../lib/utils";

const Heading = ({ className, title, text }) => {
  return (
    <div
      className={cn(
        "max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center",
        className
      )}
    >
      <h2 className="h1 font-bold text-gray-200">{title}</h2>
      {text && <p className="body-2 mt-4 text-gray-500">{text}</p>}
    </div>
  );
};

export default Heading;
