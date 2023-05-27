interface InputProps {
  type: "text" | "password" | 'number';
  placeHolder: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  onChanges?: any;
  name?: any;
  value?: any;
}

const Input = ({ name, onChanges,label, type, placeHolder, required, disabled, value }: InputProps) => {
  return (
    <div>
      <label className='text-thin'>
        {label} {required && <span className='text-red-600 text-sm'>*</span>}
      </label>

      <input
        placeholder={placeHolder}
        className={`p-2 border-solid border-2 border-input-border rounded-md w-full ${disabled? 'bg-grayDisabled' : ''}`}
        type={type}
        onChange={(e) => onChanges(e)}
        disabled={disabled}
        name={name}
        value={value}

      />
    </div>
  );
};

export default Input;
