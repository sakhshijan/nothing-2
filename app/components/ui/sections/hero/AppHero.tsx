import React from "react";
import { Timeline, Tween } from "react-gsap";
import Image from "next/image";
import { Scene } from "react-scrollmagic";
import { Ndot55 } from "@/font/ndot55";
import PhoneAddToCard from "@/app/components/ui/sections/hero/PhoneAddToCard";

function ImageCover() {
  const from = { scale: 1 };
  const to = { scale: 4, opacity: 0, x: "-45%" };
  return (
    <Tween from={from} to={to} position={1}>
      <Image
        className="pointer-events-none absolute left-0 top-0 z-[3] h-screen w-full object-cover object-center"
        src="/images/phone-cover.webp"
        draggable={false}
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
      <div className="pointer-events-none absolute top-0 z-[4] flex min-h-screen w-full items-center ">
        <div className={`${Ndot55.className} mr-auto w-1/2`}>
          <h2 className="pr-16 text-right text-3xl text-[10rem] uppercase text-black">
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
    <div className="z-[1] flex w-1/2 items-center justify-center">
      <Tween from={from} to={to}>
        <Image
          draggable={false}
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
      <div className="pointer-events-none absolute left-0 top-0 z-[2] min-h-screen w-full bg-neutral-950" />
    </Tween>
  );
}

function PhoneDetailCard() {
  const from = { opacity: 0 };
  const to = { opacity: 1 };
  return (
    <Tween from={from} to={to} position={3}>
      <PhoneAddToCard />
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
        <div className="flex min-h-screen w-full select-none items-center justify-center overflow-hidden">
          <Timeline paused duration={3000} totalProgress={progress}>
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
