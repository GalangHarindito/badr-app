interface ButtonProps {
  label: string;
  buttonStyle: string;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean
}

const Button = ({ label, onClick, buttonStyle, type, disabled, ...props }: ButtonProps) => {

  return (
    <button
      className={`${buttonStyle} rounded-md px-5 py-2 ${buttonStyle === 'buttonTransparent' ? 'text-black' : 'text-white'} font-bold h-12`}
      type={type}
      onClick={onClick}
      {...props}
      disabled = {disabled}
    >
      {label}
    </button>
  );
};

export default Button;
