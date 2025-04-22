import classNames from "@/utils/classNames";

type GradientBorderProps = {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

export default function GradientBorder({ children, className, noPadding }: GradientBorderProps) {
  return (
      <div
        className={classNames(
          noPadding ? "" : "p-1",
          className + " flex flex-col justify-center bg-gradient-to-br from-primary to-[#FAFAB9] via-secondary rounded animate-gradient-xy"
        )}
      >
        <div className="w-full h-full rounded">
          {children}
        </div>
      </div>
  );
}
