"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserPop({ userName }) {
  const [displayH2, setDisplayH2] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setDisplayH2(true);
    }, 10);

    const hideTimer = setTimeout(() => {
      setDisplayH2(false);
    }, 1000000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div>
      {displayH2 && (
        <div className="popup w-[100%] h-[100vh] bg-slate-900 absolute top-0 left-0  items-center justify-center flex flex-col gap-8">
          <p className="text-[50px] font-[900] text-white text-center">
            WELCOME, {userName}😁!
          </p>
          <Link
            className="bg-blue-600 flex items-center justify-center px-8 py-3 rounded-[30px] hover:bg-black  transition-all"
            href="/"
          >
            Lets play
          </Link>
        </div>
      )}
    </div>
  );
}
