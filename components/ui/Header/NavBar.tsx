import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SideToSide } from "@/components/Transitions";
import classNames from "@/utils/classNames";
import { LogoPath, ProjectName } from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import AnimateDisclosure from "./AnimateDisclosure";
import { HeaderList } from "./Config";

export default function NavBar() {
  return (
    <div className="flex flex-col flex-1 min-h-0 border-r border-secondary bg-basebg">
      <div className="flex items-center justify-center flex-shrink-0 px-4 py-4 mx-4 mt-4 border-y border-secondary">
        <Image src={LogoPath} alt={ProjectName} width={96} height={220} />
      </div>
      <div className="flex flex-col flex-grow mt-5">
        <nav
          className="flex-1 w-full divide-y h-fit divide-text/40 overflow-clip bg-basebg"
          aria-label="Sidebar"
        >
          {HeaderList.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <Link href={item.href ?? "#"}>
                  <SideToSide className="flex items-center w-full py-2 pl-2 font-semibold group bg-secondary text-text hover:text-secondary hover:text-shadow-xs-neon shadow-secondary">
                    <item.icon
                      className={classNames("mr-3 h-6 w-6 flex-shrink-0")}
                      aria-hidden="true"
                    />
                    {item.name}
                  </SideToSide>
                </Link>
              </div>
            ) : (
              <AnimateDisclosure key={item.name} item={item} />
            )
          )}
        </nav>
      </div>
      <div className="flex flex-shrink-0 p-4 border-t border-secondary">
        <a href="#" className="flex-shrink-0 block w-full group">
          <div className="flex items-center">
          <ConnectButton />
          </div>
        </a>
      </div>
    </div>
  );
}
