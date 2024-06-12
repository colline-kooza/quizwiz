"use client";
import { motion, useAnimation } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import SwiperCard from "@/components/SwiperCards";
import SwiperHome from "@/components/SwiperHome";
import { TypedScript } from "@/components/TypedScript";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swiper from "swiper";

export default function SetTime() {
  const [displayH2, setDisplayH2] = useState();

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setDisplayH2(true);
    }, 3000);
    return () => {
      clearTimeout(showTimer);
    };
  }, []);
  const AnswerEffect = {
    hidden: {
      x: -900,
      opacity: 0,
      scale: 0.2,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.35,
        type: "spring",
        stiffness: 150,
      },
    },
  };
  return (
    <div>
      {displayH2 && (
        <div className="bg w-[100%] min-h-[100vh] text-white ">
          <SwiperHome />
          <div className="flex flex-col  lg:px-[5rem] lg:flex-row gap-8 lg:gap-0  lg:p-8  w-[100%]">
            <motion.h2
              variants={AnswerEffect}
              initial="hidden"
              animate="animate"
              className="w-[100%] lg:w-[50%] flex flex-col lg:gap-8 gap-5 px-[2rem] py-4"
            >
              <h1 className="font-[900] text-[24px]  lg:text-[30px]">
                Quiz Wiz Challenge 😍
              </h1>
              <TypedScript />
            </motion.h2>
            <div className="lg:w-[50%] w-[100%]">
              <SwiperCard />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 flex-col gap-[3rem]">
            <div className="flex gap-1">
              <p className="w-[22px] h-[8px] bg-orange-900 rounded"></p>
              <p className="w-[9px] h-[8px] bg-blue-900 rounded"></p>
              <p className="w-[9px] h-[8px] bg-blue-900 rounded"></p>
            </div>
            <div className="flex flex-col gap-3 py-7">
              <Sheet>
                <SheetTrigger className="bg-blue-600 px-8 py-3 rounded-[30px] hover:bg-black  transition-all">
                  Start Quiz 😁😁
                </SheetTrigger>
                <SheetContent className="bg-slate-800">
                  <SheetHeader>
                    <SheetTitle>
                      <h2 className="text-white">SELECT A SUBJECT TO START</h2>
                    </SheetTitle>
                    <SheetDescription>
                      <div className="flex flex-col gap-4 text-[16px] text-gray-300 items-start">
                        <Link className="flex gap-3" href="mathFolder">
                          <p>👌</p>
                          <p>Math</p>
                        </Link>
                        <Link className="flex gap-3" href="/sst">
                          <p>👍</p>
                          <p>Social Studies</p>
                        </Link>
                        <Link className="flex gap-3" href="/science">
                          <p>🙌</p>
                          <p>Science</p>
                        </Link>
                        <Link className="flex gap-3" href="/english">
                          <p>😊</p>
                          <p>English</p>
                        </Link>
                      </div>
                    </SheetDescription>
                    <SheetTitle>
                      <h2 className="text-white text-[17px] mt-5">
                        RULES AND REGULATIONS{" "}
                      </h2>
                      <div className="text-gray-300 text-[15px]">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="flex text-[15px] ">
                              . Player should be time contious?
                            </AccordionTrigger>
                            <AccordionContent className="flex text-[15px]">
                              . No cheating , looking into books , googling, or
                              any other mult Practice
                            </AccordionContent>
                            <AccordionContent className="flex  text-[15px]">
                              . Marks will be displayed at every end of the play
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              {/* <Link
                className="bg-gray-600 flex items-center justify-center px-8 py-3 rounded-[30px] hover:bg-black  transition-all"
                href="/login"
              >
                Login/Signup
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
