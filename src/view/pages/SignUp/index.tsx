import Avatar from "@/view/components/Avatar";
import TextField from "@/view/components/TextField";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import React, { FunctionComponent, useState } from "react";

interface ISignUpProps {}

const SignUpForms: FunctionComponent<ISignUpProps> = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex flex-col gap-10 w-full mt-40 items-center">
      <TextField
        name="name"
        label="نام"
        type="text"
        placeholder="لطفا نام خود را وارد کنید"
        className="w-1/3"
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
        setShowPassword={setShowPassword}
        label="رمز"
        type={showPassword ? "text" : "password"}
        placeholder="لطفا رمز خود را وارد کنید"
        className="w-1/3"
      />
      <Avatar />
    </section>
  );
};

export default SignUpForms;
