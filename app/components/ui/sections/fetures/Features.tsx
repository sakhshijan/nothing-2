import React from "react";
import { Ndot55 } from "@/font/ndot55";
import Image from "next/image";

function PhoneName() {
  return (
    <div
      className={`${Ndot55.className} absolute inset-0 flex items-center justify-center text-[24rem] uppercase`}
    >
      Phone
    </div>
  );
}

function TheHand() {
  return (
    <div className="absolute inset-0 left-0 top-0 flex items-center">
      <Image
        className="absolute -right-[35%] mt-[10%]"
        src="/images/woman-hand.webp"
        width={1510}
        height={610}
        alt="Woman hand"
      />
    </div>
  );
}

const Features = () => {
  return (
    <section className="relative flex min-h-screen bg-gray-50">
      <PhoneName />
      <TheHand />
      <div className="relative flex min-h-screen flex-1">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-1/2 justify-end">
            <Image
              draggable={false}
              width={370}
              height={570}
              src="/images/nothing-front.webp"
              alt="Nothing phone - front"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-10">
            <h3 className="text-heading font-medium">رابط جدید Glyph</h3>
            <p className="max-w-sm text-body font-light">
              برای دنیایی با زمان بیشتر برای خودم و زمان کمتری روی صفحه نمایش،
              رابط Glyph را ایجاد کردیم. برای هر نوع تماس یا نوتیفیکیشن،
              توالی‌های نورانی و صوتی متفاوتی را اختصاص دهید و از افرادی که با
              شما تماس می‌گیرند، یک شروع داشته باشید. اطلاعات کلیدی در یک نگاه.
              راهی برای حضور در گوشی بدون حضور در گوشی.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
