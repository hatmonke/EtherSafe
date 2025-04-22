import React from "react";

type SidesToCenterProps = {
  children?: React.ReactNode;
  className?: string;
  reverse?: boolean;
};

export function SideToSide({ children, className, reverse }: SidesToCenterProps) {
  return (
    <div
      className={`${className} w-full h-full bg-gradient-to-l from-text to-text bg-no-repeat duration-300 bg-[length:0%] hover:bg-[length:100%] active:bg-[length:100%] ${reverse ? 'bg-right' : 'bg-left'}`}
    >
      {children}
    </div>
  );
}

export function BottomUp({ children, className }: SidesToCenterProps) {
  return (
    <div
      className={`${className} bg-gradient-to-l from-neutral to-neutral bg-[length:0%] bg-left bg-no-repeat duration-300 hover:bg-[length:100%] active:bg-[length:100%]`}
    >
      <div className="flex flex-col justify-center">{children}</div>
    </div>
  );
}

export function TopAndBottomToCenter({
  children,
  className,
}: SidesToCenterProps) {
  return (
    <a
      href="#_"
      className={`${className} group relative overflow-hidden bg-black hover:bg-transparent shadow-inner`}
    >
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-200 border-t-2 border-black ease group-hover:w-0"></span>
      <span className="absolute bottom-0 right-0 w-full h-0 transition-all duration-200 border-b-2 border-black ease group-hover:w-0"></span>
      <span className="absolute top-0 left-0 w-full h-full transition-all duration-300 delay-200 bg-black ease group-hover:h-0"></span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 delay-200 bg-black ease group-hover:h-0"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-transparent opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 ease ">
        {children}
      </span>
    </a>
  );
}
