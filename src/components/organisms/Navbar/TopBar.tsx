import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

export default function TopBar() {
  const fullDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  });

  let localtime = new Date().toLocaleTimeString("id-ID", {
    timeZoneName: "short",
  });

  const [ctime, setCtime] = useState(localtime);

  useEffect(() => {
    const updateTime = () => {
      let localtime = new Date().toLocaleTimeString("id-ID", {
        timeZoneName: "short",
      });
      setCtime(localtime);
    };

    setInterval(updateTime, 1000);

    const darkToggle: any = document.querySelector("#dark-toggle");
    const html = document.querySelector("html");

    darkToggle?.addEventListener("click", function () {
      if (darkToggle.checked) {
        html?.classList.add("dark");
      } else {
        html?.classList.remove("dark");
      }
    });
  }, []);

  return (
    <section className="w-full bg-gradient-to-t from-slate-700 via-slate-950 to-slate-800 py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-xs uppercase tracking-wider text-slate-100 antialiased">
            {fullDate}
          </p>
          <div className="flex items-center">
            <p className="hidden text-xs uppercase tracking-wider text-slate-100 antialiased md:block">
              Standar Waktu Indonesia
            </p>
            <span className="font-time w-[112px] text-right">{ctime}</span>
            <div className="hidden md:block">
              <div className="ml-6 flex flex-wrap items-center">
                <Link
                  href="https://www.facebook.com/yubliwarokka/"
                  target="_blank"
                  className="group mr-3 flex h-[26px] w-[26px] items-center justify-center rounded-md bg-facebook transition duration-300 ease-in hover:bg-blue-600"
                  title="Official Facebook"
                >
                  <FaFacebook className="text-base text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/yubliwarokka__/"
                  target="_blank"
                  className="group mr-3 flex h-[26px] w-[26px] items-center justify-center rounded-md bg-instagram transition duration-300 ease-in hover:bg-fuchsia-700"
                  title="Official Instagram"
                >
                  <LuInstagram className="text-base text-white" />
                </Link>
                <Link
                  href="https://github.com/yubliwarokkaid"
                  target="_blank"
                  className="group flex h-[26px] w-[26px] items-center justify-center rounded-md bg-zinc-600 transition duration-300 ease-in hover:bg-zinc-700"
                  title="Github Repository"
                >
                  <FaGithub className="text-base text-white" />
                </Link>
              </div>
            </div>
            <div className="ml-4 flex items-center">
              <span className="mr-2 text-sm text-slate-200">
                <MdLightMode />
              </span>
              <input type="checkbox" className="hidden" id="dark-toggle" />
              <label htmlFor="dark-toggle">
                <div className="flex h-4 w-8 cursor-pointer items-center rounded-full bg-slate-200 p-1">
                  <div className="toggle-circle h-[10px] w-[10px] rounded-full bg-slate-500 transition duration-300 ease-in-out" />
                </div>
              </label>
              <span className="ml-2 text-sm text-slate-200">
                <IoMoon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
