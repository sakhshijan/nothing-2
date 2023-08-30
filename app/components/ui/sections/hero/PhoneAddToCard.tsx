"use client";
import React from "react";

export function Chip({
  children,
  checked,
  value,
}: {
  children: React.ReactNode;
  checked?: boolean;
  value?: string;
}) {
  return (
    <label className="relative z-0 flex h-16 cursor-pointer items-center px-8 pt-1 text-body text-gray-50">
      <input type="radio" className="peer" name="class" value={value} hidden />
      <div className="absolute inset-0 rounded-2xl border-2 border-neutral-600 transition-all duration-300 peer-checked:border-dashed peer-checked:border-gray-50 peer-checked:bg-neutral-800"></div>
      <span className="relative">{children}</span>
    </label>
  );
}

const PhoneAddToCard = () => {
  return (
    <>
      <h2 className="text-heading font-light text-gray-50">ناتینگ فون 2</h2>
      <ul className="text-body text-neutral-500">
        <li>رم: 12گیگابایت</li>
        <li>پردازنده: Snapdragon 8+ Gen 1</li>
        <li>صفحه نمایش: LTPO OLED</li>
        <li>باطری: 4700 میلی آمپر ساعت</li>
        <li>دوربین: 50/50مگاپیکسل</li>
      </ul>
      <div className="mt-5 flex flex-wrap gap-5">
        <Chip value={"1"}>128GB+8</Chip>
        <Chip value={"2"}>256GB+12</Chip>
        <Chip value={"3"}>512GB+12</Chip>
      </div>
    </>
  );
};

export default PhoneAddToCard;
