import * as React from "react";
import { cn } from "@/utils/cn";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "font-sans font-light text-lg tracking-tight text-ink",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
