import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-10 ${wide ? "max-w-[1600px]" : "max-w-[1120px]"} ${className}`}
    >
      {children}
    </div>
  );
}
