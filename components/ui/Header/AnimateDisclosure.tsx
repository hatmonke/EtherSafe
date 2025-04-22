import { Disclosure } from "@headlessui/react";
import classNames from "@/utils/classNames";
import autoAnimate from "@formkit/auto-animate";
import { ForwardRefExoticComponent, SVGProps, useEffect, useRef } from "react";
import { SideToSide } from "@/components/Transitions";
import { NavigationItem } from "./Config";

export default function AnimateDisclosure({ item }: { item: NavigationItem }) {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <Disclosure as="div" key={item.name} className="" ref={parent}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames("w-full items-center  focus:outline-none ")}
          >
            <SideToSide className="flex items-center w-full py-2 pl-2 font-semibold group hover:text-shadow-xs-neon shadow-secondary bg-secondary text-text hover:text-secondary">
              <item.icon
                className={classNames("mr-3 h-6 w-6 flex-shrink-0")}
                aria-hidden="true"
              />
              {item.name}
              <svg
                className={classNames(
                  open ? "rotate-90 text-bgbase" : "text-white",
                  "ml-auto h-5 w-5 flex-shrink-0  transform transition-colors duration-150 ease-in-out group-hover:text-bgbase"
                )}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
              </svg>
            </SideToSide>
          </Disclosure.Button>
          <Disclosure.Panel className="divide-y divide-secondary">
            {item.children &&
              item.children.map((subItem) => (
                <Disclosure.Button
                  key={subItem.name}
                  as="a"
                  href={subItem.href}
                  className="flex items-center w-full py-2 pr-2 text-sm font-semibold group bg-neutral/40 pl-11 text-text hover:bg-text hover:text-neutral"
                >
                  {subItem.name}
                </Disclosure.Button>
              ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
