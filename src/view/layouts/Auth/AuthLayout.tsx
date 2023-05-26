import React, { FunctionComponent } from "react";

interface IAuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout: FunctionComponent<IAuthLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-8">
      <div className="flex flex-col gap-10 w-full max-w-5/10 m-auto mt-40 p-5 items-center border-2 border-gray-800 rounded bg-gray-300">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
