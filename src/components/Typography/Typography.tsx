import clsx from "clsx";

type TagProps =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "a"
  | "label"
  | "small"
  | "span";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label" | "span";
  className?: string;
  children: React.ReactNode;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle"
    | "body"
    | "text"
    | "link"
    | "small";
}

export const Typography = ({
  as,
  className,
  children,
  variant,
}: TypographyProps): JSX.Element => {
  const classes = clsx(``, className);
  let el: TagProps = "span";
  switch (variant) {
    case "body":
    case "subtitle":
    case "text":
      el = "p";
      break;
    case "link":
      el = "a";
      break;
    default:
      el = variant;
  }
  const Tag = as ? as : el;
  return <Tag>{children}</Tag>;
};
