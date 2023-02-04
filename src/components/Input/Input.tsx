import { useCallback } from "react";
import clsx from "clsx";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

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
  /** Text for the label to show above the input */
  label?: string;
  /** Provide a name to the input */
  name?: string;
  /** Provide an onChange handler that is called whenever <input> is updated */
  onChange?: (...args: any[]) => any;
  /** Indicates if the input is required */
  required?: boolean;
  /** If true, show info icon */
  showInfoIcon?: boolean;
  /** Provide the value of the <input> */
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  assistiveText,
  className,
  disabled,
  hasError = false,
  label,
  onChange,
  required,
  showInfoIcon,
  value,
}) => {
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
      {showInfoIcon ? <InformationCircleIcon className={iconClasses} /> : null}
    </div>
  );

  return (
    <div className="flex flex-col">
      {label ? (
        <Typography
          variant="overline-lg"
          weight="medium"
          as="label"
          className="!text-sm mb-2"
        >
          {label}
        </Typography>
      ) : null}
      {customInput}
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
