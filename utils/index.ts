import { TypographyTagNameProps, TypographyVariantProps } from "../types/types";

export const getTag = (variant: TypographyVariantProps) => {
  let tag: TypographyTagNameProps = "span";
  switch (variant) {
    case "heading1":
      tag = "h1";
      break;
    case "heading2":
      tag = "h2";
      break;
    case "heading3":
      tag = "h3";
      break;
    case "heading4":
      tag = "h4";
      break;
    case "heading5":
      tag = "h5";
      break;
    case "heading6":
      tag = "h6";
      break;
    case "body":
    case "body2":
    case "subtitle":
      tag = "p";
      break;
    case "link":
      tag = "a";
      break;
    default:
      tag = variant;
  }
  return tag;
};
