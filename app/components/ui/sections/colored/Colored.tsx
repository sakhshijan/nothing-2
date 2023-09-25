import React, { useState } from "react";
import Image from "next/image";
import { ColorChip } from "@/app/components/ui/sections/hero/PhoneAddToCard";
import { PlayState } from "react-gsap";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";

const images = [
  "front.webp",
  "front-25.webp",
  "front-45.webp",
  "side.webp",
  "rear-45.webp",
  "rear-25.webp",
  "rear.webp",
];

function ScaleColoredArea({ color }: { color: string }) {
  return (
    <>
      <div
        className={cn(
          "absolute z-0 aspect-square w-[max(150vh,150vw)] scale-0 rounded-full bg-black transition-transform delay-1000 duration-[1.75s]",
          color === "black" ? "scale-100" : "delay-1000 duration-0"
        )}
      ></div>
      <div
        className={cn(
          "absolute z-0 aspect-square w-[max(150vh,150vw)]  scale-0 rounded-full bg-white transition-transform delay-1000 duration-[1.75s]",
          color === "withe" ? "scale-100" : "delay-1000 duration-0"
        )}
      ></div>
    </>
  );
}

const Colored = () => {
  const [theme, setTheme] = useState("black");
  const [playState, setPlayState] = useState(PlayState.pause);
  const witheVariants = {
    init: (index) => ({ y: (index + 3) * 75 * -1, opacity: 0 }),
    coming: (index) => ({ opacity: 1, y: 0 }),
    exit: (index) => ({ y: index * 75, opacity: 0 }),
  } as Variants;
  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center overflow-hidden py-44",
        theme === "black" ? "bg-white" : "bg-black"
      )}
    >
      <div className="container mx-auto flex flex-col">
        <div className="relative z-10 flex h-96 flex-row-reverse">
          <div className="absolute inset-0 flex flex-row-reverse gap-5">
            <AnimatePresence mode="wait">
              {theme === "black"
                ? images.map((name, index) => (
                    <motion.div
                      transition={{ duration: 1 }}
                      custom={index}
                      initial={"init"}
                      exit={"exit"}
                      animate={"coming"}
                      variants={witheVariants}
                      className="flex flex-1 justify-center"
                      key={name}
                    >
                      <Image
                        draggable={false}
                        width={210}
                        height={430}
                        className="object-contain object-center"
                        src={`/images/black/${name}`}
                        alt={`Nothing phone - ${name.replace(".webp", "")}`}
                      />
                    </motion.div>
                  ))
                : images.map((name, index) => (
                    <motion.div
                      transition={{ duration: 1 }}
                      custom={index}
                      initial={"init"}
                      exit={"exit"}
                      animate={"coming"}
                      variants={witheVariants}
                      className="flex flex-1 justify-center"
                      key={name + "dark"}
                    >
                      <Image
                        draggable={false}
                        width={210}
                        height={430}
                        className="object-contain object-center"
                        src={`/images/white/${name}`}
                        alt={`Nothing phone - ${name.replace(".webp", "")}`}
                      />
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>
        </div>
        <div
          className="mt-20 flex items-center justify-center"
          onClick={() => setPlayState(PlayState.play)}
        >
          <ScaleColoredArea color={theme} />
          <ColorChip
            onChange={(e) =>
              setTheme(() => (e.target.checked ? "black" : "withe"))
            }
            checked={theme === "black"}
            name={"theme"}
            value={"black"}
            color="#000"
            onColor="#fff"
          />
          <ColorChip
            onChange={(e) =>
              setTheme(() => (e.target.checked ? "withe" : "black"))
            }
            checked={theme === "withe"}
            name={"theme"}
            value={"withe"}
            color="#fff"
            onColor="#000"
          />
        </div>

        <div className="relative z-50 mt-52">
          <p
            className={cn(
              "text-justify text-body font-light text-gray-50 transition-colors delay-1000 duration-1000 selection:bg-gray-50 selection:text-neutral-950",
              { "text-gray-900": theme === "withe" }
            )}
          >
            در مورد این مورد رابط Glyph جدید: اطلاعات کلیدی در یک لحظه. توالی
            های مختلف نور و صدا را به هر مخاطب و نوع اعلان اختصاص دهید. از چراغ
            ها برای ردیابی تکامل یا ایجاد آهنگ های زنگ با Glyph Composer استفاده
            کنید. Nothing OS 2.0: یک هویت بصری جدید. برچسب های برنامه، ماژول ها،
            اندازه ویجت ها، تم های رنگی و غیره را سفارشی کنید. فرمت های پوشه
            جدید ویجت هایی را برای تنظیمات سریع ایجاد کنید یا آنها را به صفحه
            قفل خود اضافه کنید تا مجبور نباشید قفل گوشی خود را باز کنید. دوربین:
            نرم افزار داخلی کاملاً به روز شده برای عکس ها و فیلم های پویا دقیق
            تر از همیشه. سنسور جدید بزرگتر جلو (32 مگاپیکسل) برای پرتره های
            عالی. دوربین‌های پشتی دوگانه 50 مگاپیکسلی (اصلی) + 50 مگاپیکسلی (فوق
            عریض) با تنظیمات هوشمندی مانند HDR پیشرفته، Motion Capture 2.0 و
            Night Mode به راحتی زندگی واقعی را ثبت می‌کنند. زوم 2x Super-Res
            جدید بهترین جزئیات را در هر صحنه حفظ می کند. ویدئو: 4k 60fps (دوربین
            اصلی عقب) و 1080P 60fps (دوربین جلو). صفحه نمایش: LTPO AMOLED 6.7
            اینچی با حداکثر روشنایی پیکسل 1600 و گوریلا گلس 5 (جلو و عقب). با
            LTPO، Phone (2) می تواند به طور مستقیم نرخ تجدید 120 هرتز خود را
            برای صرفه جویی در مصرف برق زمانی که از تلفن خود استفاده نمی کنید،
            تطبیق دهد. نمایشگر تمام زمین که عمر باتری را کم نمی کند. باتری: با
            4700 میلی آمپر ساعت، تلفن (2) دارای طولانی ترین باتری ما است. شارژ
            کامل در 55 دقیقه ماندگاری تا 22.5 ساعت سازگار با شارژ بی سیم 15 واتی
            Qi. تلفن (2) همچنین به عنوان یک شارژر بی سیم 5 واتی برای تامین انرژی
            لوازم جانبی مانند Ear (2) در حال حرکت کار می کند. چیپست: با پشتیبانی
            از اسنپدراگون 8+ نسل 1، تلفن (2) عملکرد را نسبت به نسل قبلی خود تا
            80 درصد بهبود می بخشد. اکنون با سرعت بالا، بهترین مدیریت حرارت داخلی
            و قابلیت های دوربین پیشرفته. پایداری: ساختار متوسط ​​از 100٪
            آلومینیوم بازیافتی، 100٪ قلع بازیافت شده روی 9 تخته مدار، 100٪ فیلم
            مس بازیافت شده روی برد مدار اصلی و بیش از 90٪ فولاد بازیافتی روی 28
            قطعات ریخته گری فولادی. و علاوه بر این، 80 درصد از قطعات پلاستیکی از
            منابع پایدار تامین می شود. بسته بندی تلفن (2) بدون پلاستیک است و
            شامل 60٪ کاغذ از منابع بازیافتی است
          </p>
        </div>
      </div>
    </section>
  );
};

export default Colored;
