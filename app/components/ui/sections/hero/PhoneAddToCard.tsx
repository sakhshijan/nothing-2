"use client";
import React from "react";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <label className="relative flex h-16 items-center px-5 pt-1 text-body text-gray-50">
      <input type="radio" className="peer" name="class" hidden />
      <div className="absolute inset-0 rounded-2xl border border-neutral-600 transition-all duration-300 peer-checked:border-dashed peer-checked:border-gray-50 peer-checked:bg-neutral-800"></div>
      <span className="relative">{children}</span>
    </label>
  );
}

const PhoneAddToCard = () => {
  return (
    <div className="flex w-1/2 flex-col">
      <h2 className="text-heading font-light text-gray-50">ناتینگ فون 2</h2>
      <ul className="text-body text-neutral-500">
        <li>رم: 12گیگابایت</li>
        <li>پردازنده: Snapdragon 8+ Gen 1</li>
        <li>صفحه نمایش: LTPO OLED</li>
        <li>باطری: 4700 میلی آمپر ساعت</li>
        <li>دوربین: 50/50مگاپیکسل</li>
      </ul>
      <div className="mt-5 flex flex-wrap gap-5">
        <Chip>128GB+8</Chip>
        <Chip>256GB+12</Chip>
        <Chip>512GB+12</Chip>
      </div>
    </div>
  );
};

export default PhoneAddToCard;
