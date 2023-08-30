"use client";

import { Controller } from "react-scrollmagic";
import AppHero from "@/app/components/ui/sections/hero/AppHero";

export default function Home() {
  return (
    <Controller>
      <AppHero />
    </Controller>
  );
}
