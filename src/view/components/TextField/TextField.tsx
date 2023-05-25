import {
  Dispatch,
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  SetStateAction,
} from "react";
import Text from "../Text/Text";

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
}

const TextField: FunctionComponent<ITextFieldProps> = (props) => {
  const {
    component = "input",
    className,
    label,
    id,
    direction,
    icon,
    setShowPassword,
    ...otherProps
  } = props;

  const defaultStyle =
    "text-gray-800 w-full text-base border rounded-md p-3 focus:outline-teal-500 border-solid border-2";

  return (
    <div className={`flex items-center justify-between gap-5 ${direction}`}>
      <Text>
        <label htmlFor={id}>{label}</label>
      </Text>
      {icon ? (
        <div className="flex relative">
          <input className={`${defaultStyle}`} {...otherProps} />
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
        <input className={defaultStyle} {...otherProps} />
      )}
    </div>
  );
};

export default TextField;
