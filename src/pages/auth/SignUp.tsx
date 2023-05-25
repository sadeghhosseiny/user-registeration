import AuthLayout from "@/view/layouts/Auth/AuthLayout";
import React from "react";
import { NextPageWithLayout } from "../_app";
import SignUpForms from "@/view/pages/SignUp";

interface ISignUpProps {}

const SignUp: NextPageWithLayout<ISignUpProps> = () => {
  return <SignUpForms />;
};

SignUp.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignUp;
