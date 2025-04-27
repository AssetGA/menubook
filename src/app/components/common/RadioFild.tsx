import React, { ChangeEvent } from "react";

interface Option {
  name: string;
  value: string;
}

interface RadioFieldProps {
  options: Option[];
  name: string;
  onChange: (field: { name: string; value: string }) => void;
  value: string;
  label?: string;
}

const RadioField: React.FC<RadioFieldProps> = ({
  options,
  name,
  onChange,
  value,
  label,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ name: event.target.name, value: event.target.value });
  };

  return (
    <div className="mb-4">
      {label && <div className="mb-2 text-gray-700 font-medium">{label}</div>}
      <div className="flex flex-col space-y-2">
        {options.map((option) => (
          <label
            key={option.name + "_" + option.value}
            className="inline-flex items-center cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              id={option.name + "_" + option.value}
              value={option.value}
              checked={option.value === value}
              onChange={handleChange}
              className="h-5 w-5 accent-[#4D9F6F] focus:ring-[#4D9F6F] border-gray-300"
            />
            <span className="ml-2 text-gray-700">{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
