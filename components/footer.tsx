import Link from "next/link";
import { IconType } from "react-icons";
import { FaMedium } from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaDiscord, FaSteam } from "react-icons/fa6";

const socialLinks: { href: string; label: string; icon: IconType }[] = [
  { href: "https://medium.com", label: "medium", icon: FaMedium },
  { href: "https://discord.com", label: "discord", icon: FaDiscord },
  { href: "https://x.com", label: "twitterX", icon: FaXTwitter },
  { href: "https://youtube.com", label: "youtube", icon: FaYoutube },
  { href: "https://steamcommunity.com", label: "steam", icon: FaSteam },
];

export const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-14">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center text-sm font-light md:text-left text-black">
          &copy;Awward-Winning 2025. All rights reserved
        </p>

        <ul className="flex justify-center gap-6 md:justify-start">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} link`}
                className="text-black transition-colors duration-500 ease-in-out hover:text-white"
              >
                <Icon className="size-8" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline hover:underline-offset-2 md:text-right text-black"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};
