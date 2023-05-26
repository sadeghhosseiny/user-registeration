import AuthLayout from "@/view/layouts/Auth/AuthLayout";
import React from "react";
import { NextPageWithLayout } from "../_app";
import SignInForms from "@/view/pages/SignIn";

interface ISignInProps {}

const SignIn: NextPageWithLayout<ISignInProps> = () => {
  return <SignInForms />;
};

SignIn.getLayout = function getLayout(page: JSX.Element) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignIn;
