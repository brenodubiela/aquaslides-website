import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const textScale = [
  "h1",
  "h2",
  "h3",
  "card-h",
  "lead",
  "p",
  "card-p",
  "small",
  "blockquote",
  "inline-code",
  "button-md",
  "button-sm",
  "nav-link",
  "eyebrow",
  "spec-label",
  "h1-mobile",
  "h2-mobile",
  "h3-mobile",
  "p-mobile",
  "card-p-mobile",
];

const spacingScale = [
  "xs",
  "sm",
  "md",
  "base",
  "lg",
  "xl",
  "xxl",
  "block",
  "section",
];

const shadowScale = [
  "halo-primary",
  "halo-secondary",
  "halo-vertical",
  "focus-ring",
];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: textScale,
      spacing: spacingScale,
      shadow: shadowScale,
      container: ["content"],
    },
  },
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
