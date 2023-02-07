import { useCallback, useState } from "react";
import clsx from "clsx";
import {
  InformationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { NumericFormat } from "react-number-format";

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
  /** Specify whether the <input> has error */
  hasError?: boolean;
  /** Provide a unique ID */
  id?: string;
  /** Text for the label to show above the input */
  label?: string;
  /** Provide a name to the input */
  name?: string;
  /** Provide an onChange handler that is called whenever <input> is updated */
  onChange?: (...args: any[]) => any;
  /** Provide placeholder text */
  placeholder?: string;
  /** Prefix to display */
  prefix?: string;
  /** Indicates if the input is required */
  required?: boolean;
  /** If true, show info icon */
  showInfoIcon?: boolean;
  /** If true, the number input will have a thousand separator */
  thousandSeparator?: boolean;
  /** Provide the type of the <input> */
  type?: "text" | "number" | "password";
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
  label,
  name,
  onChange,
  placeholder,
  prefix,
  required,
  showInfoIcon,
  thousandSeparator = true,
  type = "text",
  value,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const classes = clsx(
    inputClasses.baseStyle,
    hasError && inputClasses.errorBorder,
    disabled && inputClasses.disabled,
    prefix && inputClasses.hasPrefix,
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
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

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
        {prefix ? <span className={inputClasses.prefix}>{prefix}</span> : null}
        {/* TODO: Refactor this conditional. Merge if possible. */}
        {type === "number" ? (
          <NumericFormat
            autoFocus={autoFocus}
            className={classes}
            disabled={disabled}
            id={id}
            name={name}
            onChange={handleInputChange}
            placeholder={placeholder}
            thousandSeparator={thousandSeparator ? "," : ""}
            required={required}
            value={value}
            {...rest}
          />
        ) : (
          <input
            autoFocus={autoFocus}
            className={classes}
            disabled={disabled}
            id={id}
            name={name}
            onChange={handleInputChange}
            placeholder={placeholder}
            required={required}
            type={inputType}
            value={value}
            {...rest}
          />
        )}

        {/* TODO: The styling breaks when 2 icons are shown. */}
        <div className={inputClasses.iconWrapper}>
          {/* TODO: Add hover and/or click handler for info icon */}
          {showInfoIcon ? (
            <InformationCircleIcon className={iconClasses} />
          ) : null}
          {type === "password" ? (
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
