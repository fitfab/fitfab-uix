export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * It indicates if the button is primary or not and
   * it defaults to true.
   */
  primary?: boolean;
  /**
   * The content of the button.
   */
  children?: React.ReactNode;
}
export const Button = ({ children, primary = true, ...props }: ButtonProps) => {
  const variant = primary
    ? "bg-black hover:bg-neutral-800"
    : "bg-slate-500 hover:bg-slate-600";
  const btnClasses = `text-white tracking-wide uppercase px-4 truncate min-w-[5rem] max-w-xs h-10 rounded-full ${variant}`;
  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
};
