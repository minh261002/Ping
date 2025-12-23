import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Authentication pages",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen w-full h-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
