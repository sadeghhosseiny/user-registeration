import {
  Dispatch,
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  SetStateAction,
} from "react";
import Text from "../Text/Text";
import { FormikErrors, FormikTouched } from "formik";

interface ITextFieldProps extends HTMLAttributes<Element> {
  component?: ElementType;
  type: string;
  placeholder: string;
  className?: string;
  label?: string;
  id?: string;
  name: string;
  direction?: string;
  icon?: JSX.Element;
  ref?: any;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
  value: string;
  errors: any;
  touched: FormikTouched<Record<string, any>>;
}

const TextField: FunctionComponent<ITextFieldProps> = (props) => {
  const {
    component = "input",
    className,
    label,
    id,
    name,
    errors,
    touched,
    direction,
    icon,
    setShowPassword,
    ...otherProps
  } = props;

  const defaultStyle =
    "text-gray-800 w-full text-base border rounded-md p-3 focus:outline-teal-500 border-solid border-2";

  return (
    <div className={`flex flex-col justify-between gap-2 ${direction}`}>
      <div className="flex items-center gap-5">
        <Text>
          <label htmlFor={id}>{label}</label>
        </Text>
        {icon ? (
          <div className="flex relative flex-1">
            <input
              id={id}
              name={name}
              className={`${defaultStyle} ${className}`}
              {...otherProps}
            />
            <div
              onClick={() =>
                setShowPassword && setShowPassword((prev: boolean) => !prev)
              }
              className="absolute p-3 z-10 bg-white left-1 top-[6px]"
            >
              {icon}
            </div>
          </div>
        ) : (
          <input id={id} name={name} className={defaultStyle} {...otherProps} />
        )}
      </div>
      <Text className="text-sm mr-11 text-red-500">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </Text>
    </div>
  );
};

export default TextField;
