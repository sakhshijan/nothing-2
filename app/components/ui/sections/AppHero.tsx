import React from "react";
import { Timeline, Tween } from "react-gsap";
import Image from "next/image";
import { Scene } from "react-scrollmagic";
import { Ndot55 } from "@/font/ndot55";

function ImageCover() {
  const from = { scale: 1 };
  const to = { scale: 4, opacity: 0, x: "-45%" };
  return (
    <Tween from={from} to={to} position={1}>
      <Image
        className="absolute left-0 top-0 z-10 h-screen w-full object-cover object-center"
        src="/images/phone-cover.webp"
        alt="Phone cover"
        height="960"
        width="1980"
      />
    </Tween>
  );
}

function PhoneName() {
  const from = { scale: 1 };
  const to = { opacity: 0, x: "-15%" };
  return (
    <Tween from={from} to={to} position={1}>
      <div className="absolute z-20 flex min-h-screen w-full items-center">
        <div className={`${Ndot55.className} mr-auto w-1/2`}>
          <h2 className="mt-6 pr-16 text-right text-3xl text-[10rem] uppercase text-black">
            Phone
          </h2>
        </div>
      </div>
    </Tween>
  );
}

function ThePhone() {
  const from = { scale: 3.9, y: "56.5%", rotation: 90, x: "-370%" };
  const to = { scale: 1, y: 0, rotation: 0, x: 0 };
  return (
    <div className="flex w-1/2 items-center justify-center">
      <Tween from={from} to={to}>
        <Image
          className="w-64"
          src="/images/phone.webp"
          alt="Nothing phone 2"
          height="960"
          width="1980"
        />
      </Tween>
    </div>
  );
}

function CameraCover() {
  const from = { opacity: 1 };
  const to = { opacity: 0 };
  return (
    <Tween from={from} to={to}>
      <div className="absolute left-0 top-0 z-10 min-h-screen w-full bg-neutral-950" />
    </Tween>
  );
}

function PhoneDetailCard() {
  const from = { opacity: 0 };
  const to = { opacity: 1 };
  return (
    <Tween from={from} to={to}>
      <div className="flex w-1/2 flex-col">
        <h2 className="text-heading font-light text-gray-50">ناتینگ فون 2</h2>
        <ul className="text-body text-neutral-500">
          <li>رم: 12گیگابایت</li>
          <li>پردازنده: Snapdragon 8+ Gen 1</li>
          <li>صفحه نمایش: LTPO OLED</li>
          <li>باطری: 4700 میلی آمپر ساعت</li>
          <li>دوربین: 50/50مگاپیکسل</li>
        </ul>
      </div>
    </Tween>
  );
}

const AppHero = () => {
  return (
    <Scene
      duration={3000}
      pin
      indicators={process.env.NODE_ENV == "development"}
      triggerHook="onLeave"
    >
      {(progress: number) => (
        <div className="flex min-h-screen w-full items-center justify-center overflow-hidden">
          <Timeline duration={3000} totalProgress={progress}>
            <CameraCover />
            <div className="container mx-auto flex min-h-screen items-center gap-10">
              <ThePhone />
              <PhoneDetailCard />
            </div>
            <ImageCover />
            <PhoneName />
          </Timeline>
        </div>
      )}
    </Scene>
  );
};

export default AppHero;
