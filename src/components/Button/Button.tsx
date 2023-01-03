export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children, disabled }: ButtonProps): JSX.Element => {
  return (
    <button className="bg-white font-bold p-4" disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
