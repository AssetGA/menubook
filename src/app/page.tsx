"use client";
import Image from "next/image";
import { useState } from "react";
import RadioField from "./components/common/RadioFild";
import ColorChangingLine from "./components/common/ColorChangingLine";
import ColorChangingCircle from "./components/common/ColorChangingCircle";

export default function Home() {
  const [data, setData] = useState("1");

  const handleChange = () => {};
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="w-[35%]">
          <div>Маргарита Преображенская</div>
          <div>тарифный план</div>
          <div>бонусы</div>
        </div>
        <div className="w-full">
          <div>Индекс массы тела</div>
          <div className="w-full flex flex-row rounded-xl shadow-xl">
            <div className="w-[25%] p-5 space-y-2">
              <div className="uppercase text-[#4D9F6F] font-extrabold text-xl">
                Ваш имт
              </div>
              <p className="font-bold text-[#686868] text-2xl my-3">
                30,5<span className="text-sm px-3">кг/м²</span>
              </p>
              <button className="p-4 my-2 bg-[#FF0004] text-white rounded-xl">
                Ожирение
              </button>
              <p>Рекомендуется:</p>
              <span>Снижение веса</span>
            </div>
            <div className="w-full p-5">
              <h3 className="uppercase text-[#4D9F6F] font-extrabold text-xl">
                Рекомендации по подбору плана питания
              </h3>
              <div className="flex flex-row pt-5">
                <div className="w-[35%]">
                  <RadioField
                    options={[
                      { value: "1", name: "Снижение веса" },
                      { value: "2", name: "Поддержание веса" },
                      { value: "3", name: "Набор веса" },
                    ]}
                    value={data}
                    name="weight"
                    onChange={handleChange}
                  />
                  <div>Норма каллорий ккал</div>
                  <ColorChangingLine number={1900} />
                </div>
                <div className="flex flex-col w-full items-center px-5">
                  <div className="grid grid-cols-3 gap-5">
                    <ColorChangingCircle value={10} name="Белки" />
                    <ColorChangingCircle value={30} name="Жиры" />
                    <ColorChangingCircle value={50} name="Углеводы" />
                  </div>
                  <p className="px-5 py-3">
                    *Процент от суточного рациона питания
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
