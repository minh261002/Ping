"use client";

import { useAtomValue } from "jotai";
import { AlertTriangleIcon } from "lucide-react";
import { errorMessageAtom } from "../../atoms/widget-atoms";
import WidgetHeader from "../components/widget-header";

const WidgetErrorScreen = () => {
  const errorMessage = useAtomValue(errorMessageAtom);

  return (
    <div className="flex h-full flex-col">
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6">
          <p className="text-3xl">Hi there!</p>
          <p className="text-lg">Let&apos;s get you started</p>
        </div>
      </WidgetHeader>

      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4 text-muted-foreground">
        <AlertTriangleIcon className="text-red-500" />
        <p className="text-sm">
          {errorMessage ||
            "An unexpected error occurred. Please try again later."}
        </p>
      </div>
    </div>
  );
};

export default WidgetErrorScreen;
