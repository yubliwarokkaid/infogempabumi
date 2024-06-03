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
          className={`flex h-5 w-10 items-center overflow-hidden rounded-full bg-gray-400 duration-300 ease-in-out dark:bg-gray-600 ${darkMode ? "justify-end" : "justify-start"}`}
        >
          {darkMode === true ? (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-400 shadow-md transition duration-300 ease-in-out">
              <BsMoonStarsFill className="text-sm text-slate-700" />
            </div>
          ) : (
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 shadow-md transition duration-300 ease-in-out">
              <BsSunFill className="text-sm text-slate-100" />
            </div>
          )}
        </div>
      </label>
    </div>
  );
}
