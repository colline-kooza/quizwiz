"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Testing() {
  const pathName = usePathname();
  if (pathName.startsWith("/english")) {
    return null;
  }
  if (pathName.startsWith("/login")) {
    return null;
  }
  const pathscience = usePathname();
  if (pathscience.startsWith("/science")) {
    return null;
  }
  const pathSst = usePathname();
  if (pathSst.startsWith("/sst")) {
    return null;
  }
  const pathMath = usePathname();
  if (pathMath.startsWith("/mathFolder")) {
    return null;
  }

  const [displayH2, setDisplayH2] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setDisplayH2(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setDisplayH2(false);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div>
      {displayH2 && (
        <div className="w-[100%] h-[100vh] bg-slate-950 z-50 flex flex-col items-center gap-[3rem] lg:gap-[8rem]">
          <div className="flex justify-center items-center ">
            <img
              className="w-[70%] h-[80vh] object-contain lg:h-[60vh] lg:w-[60%]"
              src="/images/question.png"
              alt=""
            />
          </div>
          <div className="">
            <span class="loader"></span>
          </div>
        </div>
      )}
    </div>
  );
}
