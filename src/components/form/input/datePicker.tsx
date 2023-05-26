interface DatePickerProps {
  placeHolder: string;
  label?: string;
  required?: boolean;
}

const DatePicker = ({ placeHolder, label, required }: DatePickerProps) => {
  return (
    <div>
      <label className='text-thin'>
        {label} {required && <span className='text-red-600 text-sm'>*</span>}
      </label>

      <input
        placeholder={placeHolder}
        className='p-2 border-solid border-2 border-input-border rounded-md w-full'
        type='date'
        onChange={(e) => e.target.value}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
    </div>
  );
};

export default DatePicker;
