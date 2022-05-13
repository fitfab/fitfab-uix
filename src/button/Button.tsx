export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * It indicates if the button is primary or not.
   */
  primary?: boolean;
}
export const Button = ({ children, primary = true, ...props }: ButtonProps) => {
  const variant = primary
    ? "bg-black hover:bg-neutral-800"
    : "bg-slate-400 hover:bg-slate-600";
  const btnClasses = `text-clip text-white uppercase px-4 flex justify-center items-center min-w-[5rem] max-w-xs h-10 rounded-full ${variant}`;
  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
};
