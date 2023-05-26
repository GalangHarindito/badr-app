interface InputProps {
  type: "text" | "password";
  placeHolder: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input = ({ label, type, placeHolder, required, disabled }: InputProps) => {
  return (
    <div>
      <label className='text-thin'>
        {label} {required && <span className='text-red-600 text-sm'>*</span>}
      </label>

      <input
        placeholder={placeHolder}
        className={`p-2 border-solid border-2 border-input-border rounded-md w-full ${disabled? 'bg-grayDisabled' : ''}`}
        type={type}
        onChange={(e) => e.target.value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
