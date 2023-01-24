import { TypographyTagNameProps, TypographyVariantProps } from "../types/types";

export const getTag = (variant: TypographyVariantProps) => {
  let tag: TypographyTagNameProps = "span";
  switch (variant) {
    case "body":
    case "body2":
      tag = "p";
      break;
    case "overline-sm":
    case "overline-lg":
    case "subtitle":
      tag = "h6";
      break;
    case "link":
      tag = "a";
      break;
    default:
      tag = variant;
  }
  return tag;
};
