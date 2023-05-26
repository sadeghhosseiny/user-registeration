import { initialValues, useValidationSchemaSignIn } from "@/constants";
import useRQGlobalState from "@/store/ReactQuery/useRQGlobalState";
import Button from "@/view/components/Button/Button";
import TextField from "@/view/components/TextField";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";

interface ISignInProps {}

const SignInForms: FunctionComponent<ISignInProps> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const [userInformation] = useRQGlobalState("userInformation", {
    username: "",
    password: "",
  });

  const signInValidationSchema = useValidationSchemaSignIn(userInformation);

  const formik = {
    onSubmit: (values: any, { setSubmitting }: any) => {
      router.push("/");
    },
    initialValues: initialValues,
    validationSchema: signInValidationSchema,
  };

  return (
    <section className="w-full">
      <Formik
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
        onSubmit={formik.onSubmit}
      >
        {({
          values,
          errors,
          handleSubmit,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <Form
            className="flex flex-col h-full max-w-8/10 mx-auto gap-5"
            onSubmit={handleSubmit}
          >
            <TextField
              name="username"
              id="username"
              type="text"
              label="نام"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="لطفا نام خود را وارد کنید"
              className="w-1/3"
              errors={errors}
              touched={touched}
            />

            <TextField
              icon={
                showPassword ? (
                  <EyeSlashIcon width="20px" />
                ) : (
                  <EyeIcon width="20px" />
                )
              }
              name="password"
              id="password"
              setShowPassword={setShowPassword}
              label="رمز"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="لطفا رمز خود را وارد کنید"
              className="w-1/3"
              errors={errors}
              touched={touched}
            />
            <Button className="mt-10 w-1/2 mx-auto">تایید</Button>
          </Form>
        )}
      </Formik>
      <div className="flex justify-end mt-20">
        <Link href="SignUp">
          <Button className="bg-slate-600 hover:bg-teal-800 transition-colors transition-300">
            بازگشت به صفحه ی قبل
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SignInForms;
