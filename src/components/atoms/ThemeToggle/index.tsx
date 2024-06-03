import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="ml-4">
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="hidden"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div
          className={`label-dark flex h-[22] w-10 items-center overflow-hidden rounded-full bg-slate-300 p-[2px] duration-300 ease-in-out dark:bg-slate-500 ${darkMode ? "justify-end" : "justify-start"}`}
        >
          {darkMode === true ? (
            <div
              className="bg-dark flex h-[18px] w-[18px] items-center justify-center rounded-full p-1 shadow-md transition duration-300 ease-in-out"
              title="Dark"
            >
              <BsMoonStarsFill className="text-sm text-slate-100" />
            </div>
          ) : (
            <div
              className="bg-light flex h-[18px] w-[18px] items-center justify-center rounded-full p-1 shadow-md transition duration-300 ease-in-out"
              title="Light"
            >
              <BsSunFill className="text-sm text-slate-700" />
            </div>
          )}
        </div>
      </label>
    </div>
  );
}
