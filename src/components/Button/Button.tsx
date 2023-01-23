import { useCallback } from "react";
import clsx from "clsx";

import ButtonClasses from "./Button.module.css";

export interface Props {
  /** Provide a custom area-label that is applied directly to the button */
  ariaLabel?: string;
  /** Text within the button */
  children: React.ReactNode | React.ReactNode[];
  /** Provide a custom className that is applied directly to the button */
  className?: string;
  /** Specify whether the control is disabled */
  disabled?: boolean;
  /** Icon to display on the left */
  leftIcon?: JSX.Element;
  /** When true, it disables the button. */
  loading?: boolean;
  /** Provide an onClick handler that is called whenever button is clicked */
  onClick?: () => void;
  /** Icon to display on the right */
  rightIcon?: JSX.Element;
  /** Provide the type of the button */
  type?: "submit" | "button";
  /** Specify the style of the button */
  variant: "primary" | "secondary" | "gray" | "turquoise";
}

export const Button = ({
  ariaLabel,
  children,
  className,
  disabled,
  leftIcon,
  loading,
  onClick,
  rightIcon,
  type,
  variant,
  ...rest
}: Props & React.HTMLAttributes<HTMLButtonElement>) => {
  const hasIcon = leftIcon ? !!leftIcon : undefined;
  const classes = clsx(
    "aether-button",
    ButtonClasses.baseStyle,
    ButtonClasses[variant],
    disabled && ButtonClasses.disabled,
    hasIcon && ButtonClasses.hasIcon,
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

  return (
    <button
      className={classes}
      onClick={handleOnClick}
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  );
};
