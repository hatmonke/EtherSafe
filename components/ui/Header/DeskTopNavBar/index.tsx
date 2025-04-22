import { chainId, LogoPath, ProjectName } from "@/utils/config";
import { HeaderList } from "../Config";
import Link from "next/link";
import { NavigationItem } from "../Config";
import { usePathname } from "next/navigation";
import autoAnimate from "@formkit/auto-animate";
import { useRef, useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import classNames from "@/utils/classNames";
import SvgLogo from "./SvgLogo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function NavLink({ href, icon, name, current, children }: NavigationItem) {
  const parent = useRef(null);
  const parent2 = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    parent2.current && autoAnimate(parent2.current);
  }, [parent2]);

  const Icon = icon;

  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-text" : "text-text/60 hover:text-sub",
                "group inline-flex items-center rounded-md text-xl font-bold underline-offset-4 outline-none hover:underline tracking-widest"
              )}
            >
              {children ? (
                <div
                  className={` flex w-full items-center justify-between duration-500
                              ${current ? "text-text group-hover:text-sub" : ""}
                           `}
                  ref={parent}
                >
                  <Icon className="flex-shrink-0 w-6 h-6 mr-3" />
                  <p className="text-sm text-transparent duration-300 group-hover:text-text">
                    {name}
                  </p>
                </div>
              ) : (
                <Link href={href ?? ""} className={`group w-full`}>
                  <div
                    className={`w-fit flex items-center justify-between duration-500
                              ${current ? "text-text group-hover:text-sub" : ""}
                           `}
                    ref={parent}
                  >
                    <Icon className="flex-shrink-0 w-6 h-6 mr-3" />
                    <p className="overflow-hidden text-sm text-transparent duration-300 group-hover:text-text">
                      {name}
                    </p>
                  </div>
                </Link>
              )}
            </Popover.Button>
            {children && (
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute inset-x-0 z-10 hidden transform shadow-lg bg-basebg/60 top-full md:block">
                  <div className="grid grid-cols-4 max-w-7xl gap-7">
                    {children.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "hover:border-text hover:text-text text-text/70 duration-300",
                          "flex flex-row items-center border-b-2 border-transparent py-2 "
                        )}
                      >
                        <p>{item.name}</p>
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            )}
          </>
        )}
      </Popover>
    </>
  );
}

export default function DeskTopNavBar() {
  const path = usePathname();

  return (
    <nav className="relative flex flex-wrap items-center justify-between w-full px-6 py-2 tracking-widest bg-basebg/90 ">
      <div className="flex flex-wrap items-center justify-between w-full mx-auto max-w-7xl ">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link
          href="/"
          className="relative w-16 duration-500 hover:scale-105"
        >
          <img src={LogoPath} alt={ProjectName} width={32} height={32} />
        </Link>
      </div>
      <div className="relative flex flex-wrap items-center justify-around w-full max-w-xl">
{/*         {HeaderList.map((item, index) => (
          <NavLink
            key={index}
            icon={item.icon}
            href={item.href}
            name={item.name}
            current={item.href === path}
            children={item.children}
          />
        ))} */}
      </div>
      <div className="flex">
        <ConnectButton />
      </div>
      </div>
    </nav>
  );
}
