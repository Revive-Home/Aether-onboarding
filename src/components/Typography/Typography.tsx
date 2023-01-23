import clsx from "clsx";

import typographyClasses from "./Typography.module.css";
import {
  TypographyTagNameProps as TagNameProps,
  TypographyVariantProps as VariantProps,
} from "../../../types/types";
import { getTag } from "../../../utils";

export interface TypographyProps {
  /** Optional HTML tag used for the root node. */
  as?: TagNameProps;
  /** Optional Tailwind class names to override or extend the styles applied to the component. */
  className?: string;
  /** The content of the component. */
  children: React.ReactNode;
  /** Applies the theme typography styles. */
  variant: VariantProps;
  /** Optional attribute applies different font weight */
  weight: "medium" | "semibold" | "bold" | "default";
}

export const Typography = ({
  as,
  className,
  children,
  variant,
  weight = "default",
}: TypographyProps): JSX.Element => {
  const classes = clsx(
    typographyClasses.baseStyle,
    typographyClasses[variant],
    weight && typographyClasses[weight],
    className
  );

  const Tag = as ? as : getTag(variant);
  return <Tag className={classes}>{children}</Tag>;
};
