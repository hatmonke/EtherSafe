import { FaHome, FaPaperPlane, FaTwitter } from "react-icons/fa";
import Logo from "./logo";
import { homeUrl, telegramUrl, twitterUrl } from "@/utils/config";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <footer className="sticky top-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="order-1 sm:col-span-12 lg:col-span-4 lg:order-none">
          <div className="flex flex-row items-center justify-between w-full h-full py-2">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0">
              <div className="">
                <Logo />
              </div>
            </div>
            {/* Social links */}
            <div className="flex flex-row items-center justify-center gap-2">
            <Link
              className="flex items-center justify-center transition duration-300 ease-in-out text-primary hover:text-secondary hover:scale-105"
              href={homeUrl}
              aria-label="Home"
              >
              <FaHome size="24" />
            </Link>

            <Link
              className="flex items-center justify-center transition duration-300 ease-in-out text-primary hover:text-secondary hover:scale-105"
              href={twitterUrl}
              aria-label="Twitter"
              >
              <FaTwitter size="24" />
            </Link>

            <Link
              className="flex items-center justify-center transition duration-300 ease-in-out text-primary hover:text-secondary hover:scale-105"
              href={telegramUrl}
              aria-label="Dev.to"
              >
              <FaPaperPlane size="24" />
            </Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
