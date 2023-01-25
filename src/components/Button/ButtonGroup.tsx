import clsx from "clsx";

import ButtonGroupClasses from "./ButtonGroup.module.css";

export interface ButtonGroupProps {
  /** The button group alignment */
  align?: "left" | "center" | "right";
  /** The content of the component. */
  children: React.ReactNode;
}

export const ButtonGroup = ({ align, children }: ButtonGroupProps) => {
  const classes = clsx(
    "aether-button-group",
    ButtonGroupClasses.baseStyle,
    align && ButtonGroupClasses[align]
  );

  return <div className={classes}>{children}</div>;
};

ButtonGroup.displayName = "Button.Group";
