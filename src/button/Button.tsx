export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = ({ children, ...props }: ButtonProps) => {
  //
  return (
    <button
      className=" bg-slate-400 hover:bg-slate-600 text-clip text-white uppercase px-4 flex justify-center items-center min-w-[5rem] max-w-xs h-10 rounded-full"
      {...props}
    >
      {children}
    </button>
  );
};
