export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children, disabled }: ButtonProps): JSX.Element => {
  return (
    <button className="vite test button" disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
