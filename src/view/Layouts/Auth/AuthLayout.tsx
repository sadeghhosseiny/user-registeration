import React, { FunctionComponent } from "react";

interface IAuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout: FunctionComponent<IAuthLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-8">{children}</div>
  );
};

export default AuthLayout;
