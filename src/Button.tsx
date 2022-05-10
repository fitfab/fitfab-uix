export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
