interface InputSelectProps {
  label: string;
  value: string | number;
  selectValue: string;
  onValueChange: (value: string | number) => void;
  onSelectChange: (selectValue: string) => void;
  placeholder?: string;
  type?: "text" | "number";
  step?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export default function InputSelect({
  label,
  value,
  selectValue,
  onValueChange,
  onSelectChange,
  placeholder = "",
  type = "text",
  step,
  required = false,
  options,
}: InputSelectProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (type === "number") {
      onValueChange(parseFloat(newValue) || 0);
    } else {
      onValueChange(newValue);
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          step={step}
          value={value}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all sm:text-sm text-gray-900 pr-20"
          placeholder={placeholder}
          required={required}
        />
        <select
          value={selectValue}
          onChange={(e) => onSelectChange(e.target.value)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 bg-transparent border-none focus:outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}