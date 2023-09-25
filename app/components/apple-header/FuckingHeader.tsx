"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import "./index.css";

const data = [
  {
    name: "فروشگاه",
    child: [
      {
        name: "فروشگاه",
        items: [
          "جدیدترین محصولات",
          "موبایل",
          "لپتاپ",
          "قطعات کامپیوتر",
          "Apple Watch",
          "Accessories",
        ],
      },
      {
        name: "لینک ها",
        items: [
          "نزدیک ترین شعب",
          "خرید حظوری",
          "پشتیبانی فروش",
          "پرسش های قبل از خرید",
          "College Student Offer",
        ],
      },
      {
        name: "Shop Special Stores",
        items: [
          "Certified Refurbished",
          "Education",
          "Business",
          "Veteran and Military",
          "Government",
        ],
      },
    ],
  },
  {
    name: "خدمات",
    child: [
      {
        name: "لینک ها",
        items: [
          "نزدیک ترین شعب",
          "خرید حظوری",
          "پشتیبانی فروش",
          "پرسش های قبل از خرید",
          "College Student Offer",
        ],
      },
      {
        name: "Shop Special Stores",
        items: [
          "Certified Refurbished",
          "Education",
          "Business",
          "Veteran and Military",
          "Government",
        ],
      },
    ],
  },
  {
    name: "محصولات",
    child: [
      {
        name: "Shop Special Stores",
        items: [
          "Certified Refurbished",
          "Education",
          "Business",
          "Veteran and Military",
          "Government",
        ],
      },
      {
        name: "فروشگاه",
        items: [
          "جدیدترین محصولات",
          "موبایل",
          "لپتاپ",
          "قطعات کامپیوتر",
          "Apple Watch",
          "Accessories",
        ],
      },
      {
        name: "لینک ها",
        items: [
          "نزدیک ترین شعب",
          "خرید حظوری",
          "پشتیبانی فروش",
          "پرسش های قبل از خرید",
          "College Student Offer",
        ],
      },
    ],
  },
  {
    name: "iPad",
    child: [],
  },
  {
    name: "Watch",
    child: [],
  },
  {
    name: "Vision",
    child: [],
  },
  {
    name: "AirPods",
    child: [],
  },
  {
    name: "Tv & Home",
    child: [],
  },
  {
    name: "Entertainment",
    child: [],
  },
  {
    name: "Accessories",
    child: [],
  },
  {
    name: "Support",
    child: [],
  },
];

export const HeaderContext = createContext({});

export function useHeader() {
  return useContext(HeaderContext) as {
    prevHeight: number;
    setPrevHeight: React.Dispatch<React.SetStateAction<number>>;
    state: number;
    height: number;
    currentIndex: number;
    isMobile: boolean;
    setState: React.Dispatch<React.SetStateAction<number>>;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

enum States {
  Close,
  ShowMenu,
  ShowSubMenu,
}

function getHeight(item: any) {
  return item.length > 0 ? (item[0]?.items?.length || 0) * 3 + 7 : 0;
}

const states = ["", "open-menu", "open-sub-menu"];

const FuckingHeader = () => {
  const [state, setState] = useState(States.Close);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const [prevHeight, setPrevHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", () => onResize());
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // if (isMobile && state > 0) document.body.style.position = "fixed";
    // else document.body.style.position = "initial";
  }, [isMobile, state]);

  useEffect(() => {
    setCurrentIndex(-1);
    setState(States.Close);
  }, [isMobile]);

  function onResize() {
    const width = window.innerWidth;
    if (width < 768) setIsMobile(true);
    else setIsMobile(false);
  }

  return (
    <HeaderContext.Provider
      value={{
        state,
        currentIndex,
        height,
        isMobile,
        prevHeight,
        setState,
        setCurrentIndex,
        setHeight,
        setPrevHeight,
      }}
    >
      <TheHeader />
      <div
        className={`${
          state > 0 ? "opened" : ""
        } header-background-cover fixed inset-0 z-40 backdrop-blur`}
      ></div>
    </HeaderContext.Provider>
  );
};

export default FuckingHeader;
const TheHeader = function () {
  const { setState, state, isMobile, prevHeight } = useHeader();

  function onMouseLeave() {
    if (isMobile) return;
    setState(States.Close);
  }

  function toggleButtonClick() {
    if (!isMobile) return;
    setState((state) => (state > 0 ? 0 : 1));
  }

  return (
    <header
      style={{ "--prev-height": `${prevHeight}rem` } as React.CSSProperties}
      dir="ltr"
      className={`${states[state]} global-header fixed left-0 right-0 top-0 z-50 flex h-11 overflow-hidden bg-neutral-950/80 text-gray-50 backdrop-blur md:overflow-visible`}
      onMouseLeave={onMouseLeave}
    >
      <div className="header-cover absolute inset-0 z-[54] h-11 bg-neutral-950"></div>
      <ul
        dir="rtl"
        className="container mx-auto flex w-full justify-between gap-2 px-5 text-xs sm:px-0 md:max-h-[2.8rem] md:items-center"
      >
        <li className="back-btn" onClick={() => setState((state) => state - 1)}>
          <button>Back</button>
        </li>
        <li className="nav-items">Any</li>
        <li className="menu">
          {data.map((item, index) => (
            <TheFuckingMenu
              key={item.name}
              index={index}
              name={item.name}
              child={item.child}
            />
          ))}
        </li>
        <li className="nav-items mr-auto md:mr-0">Cool</li>
        <li className="nav-items">Thing</li>
        <li
          className="relative z-[55] flex h-11 items-center justify-center md:hidden"
          onClick={toggleButtonClick}
        >
          {state > 0 ? "Close" : "Open"}
        </li>
      </ul>
    </header>
  );
};

type TheFuckingMenuProps = {
  child: any[];
  name: string;
  index: number;
};

function TheFuckingMenu({ name, child, index }: TheFuckingMenuProps) {
  const { setState, setCurrentIndex, setPrevHeight, isMobile, currentIndex } =
    useHeader();
  const height = getHeight(child);

  function onMouseEnter() {
    if (isMobile) return;
    if (child.length > 0) {
      setState(States.ShowSubMenu);
      setCurrentIndex(index);
    } else setState(States.Close);
    setPrevHeight(height);
  }

  function onMouseLeave() {
    // setPrevHeight(height);
  }

  function onClick() {
    if (!isMobile) return;
    if (child.length > 0) {
      setState(States.ShowSubMenu);
      setCurrentIndex(index);
    } else setState(States.Close);
  }

  return (
    <div
      onMouseLeave={onMouseLeave}
      className="container mx-auto md:mx-0 md:w-auto"
      style={
        {
          "--menu-height": `${height}rem`,
          "--menu-number": index + 1,
        } as React.CSSProperties
      }
    >
      <div className="menu-item">
        <ul onClick={onClick} className="cursor-pointer">
          <li onMouseEnter={onMouseEnter}>{name}</li>
          <li className="hidden"></li>
        </ul>
      </div>
      <div
        dir="ltr"
        className={`${currentIndex === index ? "open" : ""} submenu `}
      >
        <div className="group-container" dir="rtl">
          {child.map((item: any, index) => (
            <TheFuckingItemGroup
              key={item.name}
              index={index}
              items={item.items}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TheFuckingItemGroup({ items, name, index }: any) {
  return (
    <div
      className="items-group"
      style={
        {
          "--group-number": index + 1,
          "--total-items": items.length + 1,
        } as React.CSSProperties
      }
    >
      <h2
        style={{ "--item-number": 1 } as React.CSSProperties}
        className="single-item mb-1 cursor-default text-xs font-normal text-neutral-200"
      >
        {name}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((item: any, index: number) => (
          <TheFuckingItem item={item} key={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

function TheFuckingItem({ item, index }: any) {
  return (
    <li
      className="single-item"
      style={{ "--item-number": index + 2 } as React.CSSProperties}
    >
      <a href="#">{item}</a>
    </li>
  );
}
