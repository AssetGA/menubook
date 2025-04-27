import React, { useEffect, useState } from "react";

type Props = {
  value: number; // Значение от 0 до 100
  name: string;
};

const ColorChangingCircle: React.FC<Props> = ({ value, name }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value);
  }, [value]);

  const getColor = (val: number) => {
    const ratio = val / 100;
    const r = Math.floor(255 * (1 - ratio));
    const g = Math.floor(255 * ratio);
    return `rgb(${r}, ${g}, 0)`; // Плавный переход от красного к зеленому
  };

  const size = 120; // Размер svg
  const strokeWidth = 10; // Толщина круга
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * -circumference;

  return (
    <div className="flex justify-center items-center">
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Фон круга */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Прогресс по кругу */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(progress)}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease, stroke 0.5s ease",
          }}
        />
      </svg>
      {/* Текст по центру круга */}
      <div className="absolute">
        <div className="flex justify-center text-xl font-bold">
          {Math.round(progress)}%
        </div>
        <p className="flex justify-center">{name}</p>
      </div>
    </div>
  );
};

export default ColorChangingCircle;
