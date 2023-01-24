import clsx from "clsx";

import ButtonGroupClasses from "./ButtonGroup.module.css";

export interface ButtonGroupProps {
  align?: "left" | "center" | "right";
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
