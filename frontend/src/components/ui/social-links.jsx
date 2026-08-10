import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  XIcon,
  LinkedinIcon,
} from "./social-icons";
import { cn } from "@/utils/cn";

const NETWORK_MAP = {
  facebook: {
    Icon: FacebookIcon,
    label: "Facebook",
  },
  instagram: {
    Icon: InstagramIcon,
    label: "Instagram",
  },
  youtube: {
    Icon: YoutubeIcon,
    label: "YouTube",
  },
  twitter: {
    Icon: XIcon,
    label: "Twitter / X",
  },
  linkedin: {
    Icon: LinkedinIcon,
    label: "LinkedIn",
  },
};

export function SocialLinks({
  networks = [],
  variant = "footer",
  className,
  ...props
}) {
  if (variant === "share") {
    return (
      <div className={cn("flex items-center gap-4", className)} {...props}>
        {networks.map(({ name, url }) => {
          const net = NETWORK_MAP[name];
          if (!net) return null;
          const { Icon, label } = net;

          return (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full bg-canvas transition-all duration-200 ease-out hover:scale-110"
            >
              <Icon className="size-[22px] text-secondary-dark" />
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      {networks.map(({ name, url }) => {
        const net = NETWORK_MAP[name];
        if (!net) return null;
        const { Icon, label } = net;

        return (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-primary transition-colors duration-200 hover:text-secondary"
          >
            <Icon className="size-6" />
          </Link>
        );
      })}
    </div>
  );
}

export default SocialLinks;
