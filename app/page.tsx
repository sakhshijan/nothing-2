"use client";

import { Controller } from "react-scrollmagic";
import AppHero from "@/app/components/ui/sections/hero/AppHero";
import Features from "@/app/components/ui/sections/fetures/Features";
import Colored from "@/app/components/ui/sections/colored/Colored";
import FuckingHeader from "@/app/components/apple-header/FuckingHeader";

export default function Home() {
  return (
    <Controller>
      <FuckingHeader />
      <AppHero />
      <Features />
      <Colored />
    </Controller>
  );
}
