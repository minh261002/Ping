import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen w-full h-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
