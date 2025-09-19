"use client";
import React from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="rounded-full bg-transparent text-sm cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <FiSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeToggle;
