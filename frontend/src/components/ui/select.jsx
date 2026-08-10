import * as React from "react";
import { cn } from "@/utils/cn";

const Select = React.forwardRef(({ className, hasError, children, ...props }, ref) => {
  return (
    <select
      className={cn(
        "h-[60px] w-full appearance-none rounded-full border px-6 font-sans text-base placeholder:text-ink/50 disabled:cursor-not-allowed disabled:opacity-50 transition-colors bg-white",
        hasError 
          ? "border-red-500 focus:bg-red-500/10 focus:outline-none focus:ring-1 focus:ring-red-500"
          : "border-hairline focus:bg-secondary/10 focus:border-secondary/30 focus:outline-none focus:ring-1 focus:ring-secondary/30",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = "Select";

export { Select };
