"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="py-2 px-4 text-black dark:text-white bg-gray-500 dark:bg-black rounded-lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <BsSun className="" /> : <BsMoon className="" />}
    </button>
  );
}
