"use client";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

export function Chip({
  children,
  value,
}: {
  children: React.ReactNode;
  checked?: boolean;
  value?: string;
}) {
  return (
    <label className="relative z-0 flex h-16 cursor-pointer items-center px-8 pt-1 text-body text-gray-50">
      <input type="radio" className="peer" name="class" value={value} hidden />
      <div className="absolute inset-0 rounded-2xl border-2 border-neutral-600 transition-all duration-300 peer-checked:border-dashed peer-checked:border-gray-50 peer-checked:bg-neutral-900"></div>
      <span className="relative">{children}</span>
    </label>
  );
}

function ColorChip({
  children,
  value,
  color,
  onColor,
}: {
  children: React.ReactNode;
  value?: string;
  color?: string;
  onColor?: string;
}) {
  return (
    <label className="relative z-0 flex h-16 cursor-pointer items-center gap-3 pt-1 text-body text-gray-50">
      <input type="radio" className="peer" name="color" value={value} hidden />
      <div
        className="after: flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-400 after:absolute after:mb-1 after:h-4 after:w-2 after:rotate-90 after:scale-0  after:border-b-2 after:border-r-2 after:border-[--border-color] after:opacity-0 after:transition-all after:duration-200 peer-checked:after:rotate-45 peer-checked:after:scale-100 peer-checked:after:opacity-100"
        style={
          {
            backgroundColor: color,
            "--border-color": onColor,
          } as React.CSSProperties
        }
      ></div>
      <span className="relative">{children}</span>
    </label>
  );
}

function ReviewCard() {
  return (
    <div className="flex gap-2 text-2xl text-gray-50">
      <BiSolidStar className="text-yellow-400" />
      <span>8/10</span>
      <RxDotFilled className={"mt-1"} />
      <span>15 برسی</span>
    </div>
  );
}

const PhoneAddToCard = () => {
  return (
    <>
      <h2 className="text-heading font-light text-gray-50">ناتینگ فون 2</h2>
      <ReviewCard />
      <ul className="mt-5 text-body text-neutral-500">
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
      <div className="mt-5 flex flex-wrap gap-8">
        <ColorChip value={"with"} color="#fff" onColor="#000">
          مشکی
        </ColorChip>
        <ColorChip value={"black"} color="#000" onColor="#fff">
          سفید
        </ColorChip>
      </div>
    </>
  );
};

export default PhoneAddToCard;
