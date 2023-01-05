export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  className,
  children,
  disabled,
}: ButtonProps): JSX.Element => {
  const classes = `${className} bg-white font-bold p-4`;
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};
