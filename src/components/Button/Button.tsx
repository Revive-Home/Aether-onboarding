import clsx from "clsx";

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  label: string;
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
  size?: "default" | "lg";
  theme?: "light" | "dark";
  variant?: "primary" | "secondary" | "grey" | "turquoise";
}

export const Button = ({
  className,
  disabled,
  label,
  leftIcon,
  rightIcon,
  size,
  theme,
  variant,
}: ButtonProps): JSX.Element => {
  const classes = clsx(
    `h-full font-semibold border-0 rounded-lg px-10 py-3 transition-all ease-in-out text-white bg-darkPurple-500 hover:bg-darkPurple-500`,
    className
  );

  return (
    <button className={classes} disabled={disabled}>
      {label}
    </button>
  );
};
