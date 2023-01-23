import { useCallback } from "react";
import clsx from "clsx";

import ButtonClasses from "./Button.module.css";

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  /** Provide a custom area-label that is applied directly to the button */
  ariaLabel?: string;
  /** Text within the button */
  children: React.ReactNode | React.ReactNode[];
  /** Provide a custom className that is applied directly to the button */
  className?: string;
  /** Specify whether the control is disabled */
  disabled?: boolean;
  /** The URL to link to when the button is clicked. If defined, an a element will be used as the root node. */
  href?: string;
  /** If true, the button will take up the full width of its container. */
  fullWidth?: boolean;
  /** Icon to display on the left */
  leftIcon?: JSX.Element;
  /** When true, it disables the button. */
  loading?: boolean;
  /** Provide an onClick handler that is called whenever button is clicked */
  onClick?: () => void;
  /** Icon to display on the right */
  rightIcon?: JSX.Element;
  /** Specify the size of the button */
  size?: "sm" | "lg";
  /** Provide the type of the button */
  type?: "submit" | "button";
  /** Specify the theme of the button */
  variant: "primary" | "secondary" | "gray" | "turquoise";
}

export const Button = ({
  ariaLabel,
  children,
  className,
  disabled,
  fullWidth,
  href,
  leftIcon,
  loading,
  onClick,
  rightIcon,
  size = "lg",
  type,
  variant,
  ...rest
}: Props) => {
  const classes = clsx(
    "aether-button",
    ButtonClasses.baseStyle,
    ButtonClasses[size],
    ButtonClasses[variant],
    disabled && ButtonClasses.disabled,
    fullWidth && ButtonClasses.fullWidth,
    loading && ButtonClasses.loading,
    className
  );

  if (loading) {
    rest["aria-busy"] = true;
    rest["aria-label"] = rest["aria-label"] || "Label";
    rest["aria-live"] = "polite";
  }

  const handleOnClick = useCallback(() => {
    if (!disabled) {
      if (onClick) {
        onClick();
      }
    }
  }, [disabled, onClick]);

  const spinnerWhite = (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-50"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-100"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  const spinnerBlack = (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  const spinner = variant === "gray" ? spinnerBlack : spinnerWhite;

  if (href && !disabled)
    return (
      <a href={href}>
        <button className={classes} type="button" {...rest}>
          {leftIcon ? leftIcon : null}
          {children}
          {rightIcon ? rightIcon : null}
        </button>
      </a>
    );

  if (loading)
    return (
      <button
        className={classes}
        type={type === "submit" ? "submit" : "button"}
        disabled={true}
        {...rest}
      >
        {loading ? spinner : null}
        {children}
      </button>
    );

  return (
    <button
      className={classes}
      onClick={handleOnClick}
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
      {...rest}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  );
};
