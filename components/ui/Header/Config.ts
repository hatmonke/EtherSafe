import { homeUrl, mediumUrl, telegramUrl, twitterUrl } from "@/utils/config";
import { FaClipboardList,  FaUser } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";
import { ForwardRefExoticComponent, SVGProps } from "react";

export type NavigationItem = {
  name: string;
  icon:
    | React.ComponentType<{ className: string }>
    | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  current?: boolean;
  href?: string;
  children?: NavigationItemChildren[];
};

type NavigationItemChildren = {
  name: string;
  href: string;
};

export const HeaderList: NavigationItem[] = [
  {
    name: "NFT Claim",
    href: "/",
    icon: FaClipboardList,
    current: false,
  },
  {
    name: "Socials",
    icon: FaUser,
    current: false,
    children: [
      {
        name: "Home",
        href: homeUrl,
      },
      {
        name: "Twitter",
        href: twitterUrl,
      },
      {
        name: "Telegram",
        href: telegramUrl,
      },
      {
        name: "Medium",
        href: mediumUrl,
      },
    ],
  },
  {
    name: "Docs",
    href: "/#",
    icon: SlDocs,
    current: false,
  },
];
