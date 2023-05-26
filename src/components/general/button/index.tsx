interface ButtonProps {
  label: string;
  buttonStyle: string;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ label, onClick, buttonStyle, type, ...props }: ButtonProps) => {

  return (
    <button
      className={`${buttonStyle} rounded-md px-5 py-2 ${buttonStyle === 'buttonTransparent' ? 'text-black' : 'text-white'} font-bold h-12`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
