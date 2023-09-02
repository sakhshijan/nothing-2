import React from "react";
import { Ndot55 } from "@/font/ndot55";
import Image from "next/image";
import { Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

function PhoneBanner() {
  const from = { x: "-100%", opacity: 0.3 };
  const to = { x: 0, opacity: 0.05 };
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

function WomanHand() {
  const from = { x: "40%", rotation: 25, y: "45" };
  const to = { x: 0, rotation: 0, y: 0 };
  return (
    <Tween from={from} to={to} position={0}>
      <div className="absolute inset-0 left-0 top-0 flex items-center">
        <Image
          className="absolute -right-[37%] mt-[8%]"
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
  const from = { opacity: 0 };
  const to = { opacity: 1 };
  return (
    <Tween from={from} to={to} position={1}>
      <div className="flex w-1/2 flex-col gap-10 text-neutral-900">
        <h3 className="text-heading font-medium">رابط جدید Glyph</h3>
        <p className="max-w-sm text-body font-light">
          برای دنیایی با زمان بیشتر برای خودم و زمان کمتری روی صفحه نمایش، رابط
          Glyph را ایجاد کردیم. برای هر نوع تماس یا نوتیفیکیشن، توالی‌های نورانی
          و صوتی متفاوتی را اختصاص دهید و از افرادی که با شما تماس می‌گیرند، یک
          شروع داشته باشید. اطلاعات کلیدی در یک نگاه. راهی برای حضور در گوشی
          بدون حضور در گوشی.
        </p>
      </div>
    </Tween>
  );
}

function PhoneFront() {
  const from = { x: "-50%", opacity: 0.5 };
  const to = { x: 0, opacity: 1 };
  return (
    <Tween from={from} to={to} position={0}>
      <div className="flex w-1/2 justify-end">
        <Image
          draggable={false}
          width={370}
          height={570}
          src="/images/nothing-front.webp"
          alt="Nothing phone - front"
        />
      </div>
    </Tween>
  );
}

function PhoneDetails() {
  return (
    <div className="mt-auto w-full flex-col">
      <div>
        <p className="text-body font-light">
          شرکت ناتینگ همین چند روز گذشته از گوشی جدید خود یعنی ناتینگ فون 2
          رونمایی کرد. گوشی ناتینگ فون 1 یکی از جنجالی‌ترین گوشی‌هایی بود که در
          سال 2022 شاهد آن بودیم. این گوشی موبایل با طراحی منحصر به فرد و جذابیت
          ظاهری بسیار زیاد، نظر بسیاری از کاربران را به سمت خود جلب کرد. اکنون
          سری دوم این گوشی یعنی گوشی Nothing Phone 2در شرف عرضه به بازار است.
          طبق آنچه در مراسم رونمایی گذشت ناتیگ فون 2 به تراشه جدید اسنپدراگون
          سری 8 کوالکام مجهز شده است که نشان از قدرت بالای این گوشی است. در
          ادامه به مشخصات بیشتر گوشی جدید ناتینگ خواهیم پرداخت.
        </p>
      </div>
    </div>
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
            <WomanHand />
            <div className="relative flex min-h-screen flex-1">
              <div className="container mx-auto flex flex-col justify-center">
                <div className="mt-auto flex w-full items-center">
                  <PhoneFront />
                  <TheFeatures />
                </div>
                <PhoneDetails />
              </div>
            </div>
          </Timeline>
        </section>
      )}
    </Scene>
  );
};

export default Features;
