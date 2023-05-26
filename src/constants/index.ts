import { UserInformationTypes } from "@/types/authTypes.types";
import * as Yup from "yup";

export const initialValues: UserInformationTypes = {
  username: "",
  password: "",
};

export const useValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required("وارد کردن نام الزامی است"),
    password: Yup.string()
      .required("وارد کردن رمز الزامی است")
      .min(8, "کوتاه است. رمز شما باید حداقل 8 حرف باشد."),
  });
};

export const useValidationSchemaSignIn = (values: UserInformationTypes) => {
  return Yup.object().shape({
    username: Yup.string()
      .required("وارد کردن نام الزامی است")
      .equals([values.username], "مطابقت ندارد"),
    password: Yup.string()
      .required("وارد کردن رمز الزامی است")
      .min(8, "کوتاه است. رمز شما باید حداقل 8 حرف باشد.")
      .equals([values.password], "مطابقت ندارد"),
  });
};
