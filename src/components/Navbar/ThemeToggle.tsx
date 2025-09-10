"use client";
import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState("dark");
  return (
    <div
      className="rounded-full   bg-transparent text-sm"
      onClick={() => {
        {
          mode === "dark"
            ? (setTheme("light"), setMode("light"))
            : (setTheme("dark"), setMode("dark"));
        }
      }}
    >
      {mode === "dark" ? <FiSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeToggle;
