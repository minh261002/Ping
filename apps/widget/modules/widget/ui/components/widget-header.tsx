import { cn } from "@workspace/ui/lib/utils";
import React from "react";

const WidgetHeader = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-primary to-[#0b63f3] p-4 text-primary-foreground",
        className
      )}
    >
      {children}
    </div>
  );
};

export default WidgetHeader;
