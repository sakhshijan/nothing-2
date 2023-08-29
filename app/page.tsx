"use client";

import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import Image from "next/image";

export default function Home() {
  return (
    <Controller>
      <div>
        <Scene
          duration={1000}
          pin
          indicators={process.env.NODE_ENV == "development"}
          triggerHook="onLeave"
        >
          {(progress: number) => (
            <div className="min-h-screen w-full overflow-hidden bg-yellow-400">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ scale: 1 }}
                  to={{ scale: 4, opacity: 0 }}
                  duration={1000}
                >
                  <Image
                    className="w-full absolute z-10 top-0 left-0"
                    src={"/images/phone-cover.webp"}
                    alt="Phone cover"
                    height="960"
                    width="1980"
                  />
                </Tween>
              </Timeline>
            </div>
          )}
        </Scene>
      </div>
    </Controller>
  );
}
