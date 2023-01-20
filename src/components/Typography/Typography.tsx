import clsx from "clsx";

import typographyClasses from "./Typography.module.css";
import {
  TypographyTagNameProps as TagNameProps,
  TypographyVariantProps as VariantProps,
} from "../../../types/types";
import { getTag } from "../../../utils";

export interface TypographyProps {
  as?: TagNameProps;
  className?: string;
  children: React.ReactNode;
  variant: VariantProps;
  weight?: "medium" | "semibold" | "bold" | "default";
}

export const Typography = ({
  as,
  className,
  children,
  variant,
  weight,
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
