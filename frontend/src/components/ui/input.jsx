import * as React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({ className, type, hasError, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "h-[60px] w-full rounded-full border px-6 font-sans text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ink/50 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
        hasError 
          ? "border-red-500 focus:bg-red-500/10 focus:outline-none focus:ring-1 focus:ring-red-500"
          : "border-hairline focus:bg-secondary/10 focus:border-secondary/30 focus:outline-none focus:ring-1 focus:ring-secondary/30",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
