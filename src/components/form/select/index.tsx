interface SelectProps {
  options: any;
  placeHolder: string;
  label?: string;
  required?: boolean;
  onChanges?: any;
  name?: any;
}

const Select = ({ name, onChanges, options, label, required }: SelectProps) => {
  return (
    <div>
      <label className='text-thin'>
        {label} {required && <span className='text-red-600 text-sm'>*</span>}
      </label>

      <select name={name} onChange={(e) => onChanges(e)} className='bg-white p-2 border-solid border-2 border-input-border rounded-md w-full'>
        <option value=''>Select product name</option>
        <optgroup>
          {options &&
            options.map((item: any) => {
              return <option value={item.id}>{item.name}</option>;
            })}
        </optgroup>
      </select>
    </div>
  );
};

export default Select;
