import { useCallback } from "react";
import clsx from "clsx";

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
  /** Provide a name to the input */
  name?: string;
  /** Provide an onChange handler that is called whenever <input> is updated */
  onChange?: (...args: any[]) => any;
  /** Indicates if the input is required */
  required?: boolean;
  /** Provide the value of the <input> */
  value?: string;
}

export const Input = ({
  assistiveText,
  className,
  disabled,
  hasError = false,
  onChange,
  required,
  value,
}: InputProps) => {
  const classes = clsx(
    inputClasses.baseStyle,
    hasError && inputClasses.errorBorder,
    disabled && inputClasses.disabled,
    className
  );

  const suffixClasses = clsx(
    inputClasses.infoIcon,
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

  const inputLabel = (
    <Typography
      variant="overline-lg"
      weight="medium"
      as="label"
      className="!text-sm mb-2"
    >
      Label
    </Typography>
  );

  const assistiveMessage = (
    <Typography
      variant="body2"
      weight="default"
      className={`mt-1 pl-4 text-gray-400 ${hasError && inputClasses.error}`}
    >
      {assistiveText}
    </Typography>
  );

  const infoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );

  const customInput = (
    <div className="w-full relative">
      <input
        className={classes}
        disabled={disabled}
        onChange={handleInputChange}
        placeholder="Input text"
        required={required}
        type="text"
        value={value}
      />
      <span className={suffixClasses}>{infoIcon}</span>
    </div>
  );

  return (
    <div className="flex flex-col">
      {inputLabel}
      {customInput}
      {assistiveMessage}
    </div>
  );
};
