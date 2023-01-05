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
  const classes = `${className} h-full font-bold border-0 rounded-lg px-8 py-3 transition-all ease-in-out text-white bg-green hover:bg-greenDark`;
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};
