import { cn } from "../../lib/utils";

const BlurEffect = ({ className }) => {
  return (
    <span
      className={cn("absolute top-0 size-[200px] blur-[150px]", className)}
    />
  );
};

export default BlurEffect;
