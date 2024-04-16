import { cn } from "../../lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative container py-10 lg:py-16 xl:py-20 border-b xl:border-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
