import AuthLayout from "@/view/Layouts/Auth/AuthLayout";
import React from "react";
import { NextPageWithLayout } from "../_app";

interface ISignUpProps {}

const SignUp: NextPageWithLayout<ISignUpProps> = () => {
  return <div>SignUp</div>;
};

SignUp.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignUp;
