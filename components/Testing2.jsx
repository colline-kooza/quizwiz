"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Testing2() {
  const [displayH2, setDisplayH2] = useState(false);
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setDisplayH2(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setDisplayH2(false);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  return (
    <div className="w-[100%] min-h-[100vh] flex  items-center justify-center fixed top-[5%]">
      {displayH2 && (
        <div className="w-[100%] h-[70vh] z-50 flex  items-center justify-center relative">
          <div className="flex justify-center items-center ">
            <Image
              className="w-[100%] h-[100%] object-contain"
              src="/images/countDown1.gif"
              alt=""
              fill
            />
          </div>
        </div>
      )}
    </div>
  );
}
