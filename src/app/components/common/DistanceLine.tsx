import React, { useState } from "react";

const DistanceLine: React.FC = () => {
  const [length, setLength] = useState(50);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value));
  };

  // Генерируем цвет: от синего к красному
  const getColor = (length: number) => {
    if (length < 100) return "bg-blue-500";
    if (length < 200) return "bg-green-500";
    if (length < 300) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-8">
      <input
        type="range"
        min="0"
        max="400"
        value={length}
        onChange={handleInputChange}
        className="w-full mb-6"
      />
      <div
        className={`h-2 rounded ${getColor(
          length
        )} transition-all duration-300`}
        style={{ width: `${length}px` }}
      />
      <p className="mt-4 text-gray-600">Длина линии: {length}px</p>
    </div>
  );
};

export default DistanceLine;
