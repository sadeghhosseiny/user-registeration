import Avatar from "@/view/components/Avatar";
import Button from "@/view/components/Button/Button";
import TextField from "@/view/components/TextField";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import * as Yup from "yup";

interface ISignUpProps {}

const SignUpForms: FunctionComponent<ISignUpProps> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const formik = {
    onSubmit: (values: any, { setSubmitting }: any) => {
      router.push("/auth/SignIn");
    },
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("وارد کردن نام الزامی است"),
      password: Yup.string()
        .required("وارد کردن رمز الزامی است")
        .min(8, "کوتاه است. رمز شما باید حداقل 8 حرف باشد."),
    }),
  };

  return (
    <section>
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
          <Form className="flex flex-col h-full gap-5" onSubmit={handleSubmit}>
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
            <Avatar />
            <Button className="mt-10 w-1/2 mx-auto">تایید</Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUpForms;
