"use client";
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiFillInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsFacebook, BsFillArrowRightCircleFill, BsSun } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FcTimeline } from "react-icons/fc";
import { sst } from "questions.js";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "@/components/ToggleButton";

export default function Page() {
  const [selectOptions, setSelectOptions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(7);

  const question = sst[currentQuestion];

  // const correctSound = new Audio("/images/success.mp3");
  // const wrongSound = new Audio("/images/error.mp3");

  function handleOptionsSelect(option) {
    setSelectOptions(option);
    setShowAnswer(true);
    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1);
      // correctSound.play();
    } else {
      // wrongSound.play();
    }
  }

  function handleNext() {
    if (currentQuestion === sst.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeLeft(7);
      setShowAnswer(false);
    }
  }
  function Restart() {
    setShowResults(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(7);
  }
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 3000);
    } else {
      handleNext();
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);
  return (
    <>
      {showResults ? (
        <div className=" bg-gray-300 w-[100%] h-[100vh] items-center justify-center flex flex-col dark:bg-gray-800">
          <div className="bg-slate-700 w-[90%] lg:w-[35%] h-[90%]  successBg text-white flex flex-col items-center gap-3 shadow-blue-500/90 shadow-2xl p-5 rounded-[20px] relative ">
            <div className="absolute left-5 top-5 text-slate-400 hover:text-red-400 ">
              <Link href="/">
                <AiFillHome size={25} />
              </Link>
            </div>
            <div className="absolute right-5 top-5 text-slate-400 hover:text-red-400 ">
              <ToggleButton />
            </div>
            <div className="w-[50%] h-[30vh] relative flex items-center justify-center">
              <Image
                src="/images/winner2.gif"
                alt=""
                fill
                objectFit="contain"
              />
            </div>
            <h2 className="text-gray-300 dark:text-gray-400 font-[800] text-[24px]">
              Congrats!
            </h2>
            <div className="flex gap-2">
              <h2 className="text-green-400 dark:text-green-300 text-[29px]">
                {score}
              </h2>
              <h2 className="text-green-400 text-[29px]">Score</h2>
            </div>
            <h3 className="text-slate-300 dark:text-slate-400 font-[800] text-[20px] text-center">
              Quiz completed successfully.
            </h3>
            <p className="text-gray-300 text-[16px] font-[500] text-center">
              You attempted{" "}
              <span className="text-blue-700 font-[800]">5 questions </span>
              and from that{" "}
              <span className="text-green-700 font-[900]">{score} </span>is
              correct{" "}
            </p>
            <div className="w-[50%] h-[30vh] relative flex items-center justify-center">
              <Image src="/images/gif.gif" alt="" fill objectFit="contain" />
            </div>
            <div className="flex items-center text-[18px] gap-2 font-[700]">
              <p>Share with us : </p>
              <div className="flex gap-1 text-orange-500">
                <AiFillInstagram size={18} />
                <BsFacebook size={18} />
                <IoLogoWhatsapp size={18} />
              </div>
            </div>
            <button
              className="bg-blue-800 px-[30px] py-[12px] shadow-red-500/90 shadow-sm font-[700] rounded-[20px] mt-3 hover:bg-slate-600 transition-all"
              onClick={Restart}
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[100%] min-h-[100vh] flex background relative justify-center">
          <div className="flex flex-col w-[100%] lg:w-[50%] min-h-[40vh] p-8  text-white ">
            <div className="lg:h-[15%] h-[10%] flex justify-between p-8 bg-gray-300 items-center shadow-cyan-500/50 dark:bg-slate-800">
              <h1 className="font-[900] text-[20px] lg:text-[22px] flex items-center gap-3 text-black dark:text-white">
                <FcTimeline />
                SOCIAL STUDIES
              </h1>
              <ToggleButton />
            </div>
            <div className="flex justify-between px-[1rem] py-4 lg:py-2 lg:px-[3rem]">
              <h2 className="font-[900] text-[18px] flex gap-2  lg:text-[20px]">
                Quiz:
                <span className="text-orange-500 flex dark:text-orange-800">
                  {currentQuestion + 1}/
                  <h2 className="text-green-400">{sst.length}</h2>
                </span>{" "}
              </h2>
              <p className="font-[500] text-[19px]">
                {Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}
                :
                {Math.floor(timeLeft % 60)
                  .toString()
                  .padStart(2, "0")}{" "}
                min
              </p>
            </div>
            <hr />
            <div className="flex flex-col px-[.8rem] lg:px-[3rem] lg:text-[20px] gap-3 text-[18px] py-[2rem]">
              <h2 className="text-gray-100 font-[800] shadow-cyan-500/50 dark:text-gray-300">
                {question.id}.{question.question}
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-white flex flex-col gap-6 items-center">
                {question.Options.map((option) => {
                  return (
                    <div
                      key={option.id}
                      onClick={() => handleOptionsSelect(option)}
                      className={`flex gap-8 px-4 bg-gray-300 rounded-[30px] lg:w-[60%] w-[100%] py-3 shadow-lg shadow-cyan-500/50 cursor-pointer ${
                        showAnswer && option === question.answer
                          ? "correct"
                          : showAnswer && option === selectOptions
                          ? "Incorrect "
                          : ""
                      }`}
                    >
                      <h2 className="bg-green-500 dark:text-black text-white dark:bg-orange-500 shadow-lg shadow-cyan-500/50 px-3 py-3 rounded-[50%] text-[20px]">
                        <AiOutlineArrowRight />
                      </h2>
                      <button className="text-black font-[600]">
                        {option}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-center mt-[4rem]">
              <button
                onClick={handleNext}
                className="bg-orange-600 text-lg flex items-center justify-center text-black font-[700] w-[35%] lg:w-[28%] py-2 rounded-[30px] gap-1 cursor-pointer hover:bg-orange-400 transition-all shadow-yellow-500/50 dark:bg-white"
              >
                NEXT <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
