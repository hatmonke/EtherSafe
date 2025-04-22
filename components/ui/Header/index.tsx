import autoAnimate from "@formkit/auto-animate";
import { LogoPath, ProjectName } from "@/utils/config";
import { useEffect, useRef, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import NavBar from "./NavBar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DeskTopNavBar from "./DeskTopNavBar";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="w-full overflow-x-hidden">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <NavBar />
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14"></div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="flex flex-col justify-between w-full h-full overflow-y-auto">
        <div className="hidden lg:flex">
          <DeskTopNavBar />
        </div>
        <div className="sticky top-0 z-10 flex justify-between w-full p-1 bg-basebg/90 sm:pl-3 sm:pt-3 lg:hidden">
          <div className="flex">
            <img
              src={LogoPath}
              alt={ProjectName}
              width={32}
              height={32}
              className="my-2 mr-2"
            />
            <div className="inset-0 self-center text-base font-bold tracking-widest text-center uppercase top-2 text-text ">
              {ProjectName}
            </div>
          </div>
          <ConnectButton />
        </div>
        {children}
      </div>
    </div>
  );
}
