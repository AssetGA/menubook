import React, { useState, useEffect } from "react";

type Props = {
  number: number;
};

const ColorChangingLine = ({ number }: Props) => {
  const [value, setValue] = useState<number>(0);

  // Функция для вычисления цвета на основе значения переменной
  const getColor = (value: number) => {
    const ratio = value / 5000; // нормализуем значение от 0 до 1
    const r = Math.floor(255 * (1 - ratio)); // Красный цвет уменьшается
    const g = Math.floor(255 * ratio); // Зеленый увеличивается
    return { ratio: ratio, elemClass: `rgb(${r}, ${g}, 0)` }; // Создаем градиент от красного к зеленому
  };

  // Симуляция изменения переменной
  useEffect(() => {
    //   функция изменения цвета необходимо добавить входящие данные
    setValue(number);
  }, [number]);
  console.log("num", getColor(value));

  return (
    <div className="flex flex-col">
      <div className="relative mt-6">
        {value > 0 && (
          <div
            className="absolute -top-6 text-sm"
            style={{
              left: `${getColor(value).ratio * 100}%`, // 👈 Динамическая позиция через style
              transform: "translateX(-50%)", // Чтобы текст был по центру над линией
            }}
          >
            {value}
          </div>
        )}
        <div className="h-2 rounded bg-gray-300 w-full"></div>
        <div
          className="h-2 rounded z-20 -translate-y-2"
          style={{
            width: `${getColor(value).ratio * 100}%`,
            backgroundColor: getColor(value).elemClass,
            transition: "width 0.1s ease, background-color 0.3s ease", // Плавный переход
          }}
        />
      </div>

      <div className="flex flex-row justify-between">
        <div>0</div>
        <div>5000</div>
      </div>
    </div>
  );
};

export default ColorChangingLine;
