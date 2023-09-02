import React from "react";
import { Ndot55 } from "@/font/ndot55";
import Image from "next/image";
import { Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

function PhoneBanner() {
  const from = { x: "-100%", opacity: 0.3 };
  const to = { x: 0, opacity: 0.1 };
  return (
    <Tween from={from} to={to} position={0}>
      <div
        className={`${Ndot55.className} absolute inset-0 flex items-center justify-center text-[24rem] uppercase opacity-30`}
      >
        Phone
      </div>
    </Tween>
  );
}

function TheHand() {
  const from = { x: "40%", rotation: 25, y: "45" };
  const to = { x: 0, rotation: 0, y: 0 };
  return (
    <Tween from={from} to={to} position={0}>
      <div className="absolute inset-0 left-0 top-0 flex items-center">
        <Image
          className="absolute -right-[36%] mt-[15%]"
          src="/images/woman-hand.webp"
          draggable={false}
          width={1510}
          height={610}
          alt="Woman hand"
        />
      </div>
    </Tween>
  );
}

function TheFeatures() {
  return (
    <div className="flex w-1/2 flex-col gap-10 text-neutral-900">
      <h3 className="text-heading font-medium">رابط جدید Glyph</h3>
      <p className="max-w-sm text-body font-light">
        برای دنیایی با زمان بیشتر برای خودم و زمان کمتری روی صفحه نمایش، رابط
        Glyph را ایجاد کردیم. برای هر نوع تماس یا نوتیفیکیشن، توالی‌های نورانی و
        صوتی متفاوتی را اختصاص دهید و از افرادی که با شما تماس می‌گیرند، یک شروع
        داشته باشید. اطلاعات کلیدی در یک نگاه. راهی برای حضور در گوشی بدون حضور
        در گوشی.
      </p>
    </div>
  );
}

function PhoneFront() {
  const from = { x: "-50%" };
  const to = { x: 0 };
  return (
    <Tween from={from} to={to} position={0}>
      <Image
        draggable={false}
        width={370}
        height={570}
        src="/images/nothing-front.webp"
        alt="Nothing phone - front"
      />
    </Tween>
  );
}

const Features = () => {
  return (
    <Scene
      duration={3000}
      pin
      indicators={process.env.NODE_ENV == "development"}
      triggerHook="onLeave"
    >
      {(progress: number) => (
        <section className="relative flex min-h-screen overflow-hidden bg-gray-50">
          <Timeline paused totalProgress={progress}>
            <PhoneBanner />
            <TheHand />
            <div className="relative flex min-h-screen flex-1">
              <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-1/2 justify-end">
                  <PhoneFront />
                </div>
                <TheFeatures />
              </div>
            </div>
          </Timeline>
        </section>
      )}
    </Scene>
  );
};

export default Features;
