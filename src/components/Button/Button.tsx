import { useCallback } from "react";
import clsx from "clsx";

import { ButtonGroup } from "./ButtonGroup";

import ButtonClasses from "./Button.module.css";

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
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
      className="animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="m1,12C1,5.92,5.92,1,12,1"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const spinnerBlack = (
    <svg
      className="animate-spin text-black"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="m1,12C1,5.92,5.92,1,12,1"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        strokeLinecap="round"
      />
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

Button.Group = ButtonGroup;
