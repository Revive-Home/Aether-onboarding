import { useCallback, useState } from "react";
import clsx from "clsx";
import {
  InformationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";

import inputClasses from "./Input.module.css";

import { Typography } from "../Typography";

export interface InputProps {
  /** Provide additional info text that is displayed below the <input> */
  assistiveText?: string;
  /** Automatically sets focus to the input if true */
  autoFocus?: boolean;
  /** Optional Tailwind class names to override or extend the styles applied to the component. */
  className?: string;
  /** Specify whether the control is disabled */
  disabled?: boolean;
  /** Specify whether the control is disabled */
  hasError?: boolean;
  /** Provide a unique ID */
  id?: string;
  /** Provide a unique ID */
  isPassword?: boolean;
  /** Text for the label to show above the input */
  label?: string;
  /** Provide a name to the input */
  name?: string;
  /** Provide an onChange handler that is called whenever <input> is updated */
  onChange?: (...args: any[]) => any;
  /** Provide placeholder text */
  placeholder?: string;
  /** Indicates if the input is required */
  required?: boolean;
  /** If true, show info icon */
  showInfoIcon?: boolean;
  /** Provide the value of the <input> */
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  assistiveText,
  autoFocus,
  className,
  disabled,
  hasError,
  id,
  isPassword,
  label,
  onChange,
  placeholder,
  required,
  showInfoIcon,
  value,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const classes = clsx(
    inputClasses.baseStyle,
    hasError && inputClasses.errorBorder,
    disabled && inputClasses.disabled,
    className
  );

  const iconClasses = clsx(
    inputClasses.icon,
    disabled && inputClasses.disabled,
    hasError && inputClasses.error
  );

  const handleInputChange = useCallback(
    (value: any) => {
      if (!disabled) {
        if (onChange) onChange(value);
      }
    },
    [disabled, onChange]
  );

  const ShowPasswordIcon = showPassword ? EyeSlashIcon : EyeIcon;
  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";

  return (
    <div className="flex flex-col">
      {label ? (
        <div className="flex">
          <Typography
            variant="overline-lg"
            weight="medium"
            as="label"
            className="!text-sm mb-2"
          >
            {label}
          </Typography>
          {required ? (
            <span className="text-md text-red-300 font-normal ml-0.5">*</span>
          ) : null}
        </div>
      ) : null}

      <div className="w-full relative">
        <input
          autoFocus={autoFocus}
          className={classes}
          disabled={disabled}
          id={id}
          onChange={handleInputChange}
          placeholder={placeholder}
          required={required}
          type={inputType}
          value={value}
          {...rest}
        />

        {/* TODO: The styling breaks when 2 icons are shown. */}
        <div className={inputClasses.iconWrapper}>
          {/* TODO: Add hover and/or click handler for info icon */}
          {showInfoIcon ? (
            <InformationCircleIcon className={iconClasses} />
          ) : null}
          {isPassword ? (
            <ShowPasswordIcon
              className={iconClasses}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : null}
        </div>
      </div>

      {assistiveText ? (
        <Typography
          variant="body2"
          weight="default"
          className={`mt-1 pl-4 text-gray-400 ${
            hasError && inputClasses.error
          }`}
        >
          {assistiveText}
        </Typography>
      ) : null}
    </div>
  );
};
