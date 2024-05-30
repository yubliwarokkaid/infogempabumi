import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

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

    setInterval(updateTime);
  }, [1000]);

  return (
    <section className="sticky left-0 top-0 mb-10 w-full bg-gradient-to-t from-slate-800 via-slate-950 to-slate-800 py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-xs uppercase tracking-wider text-slate-100 antialiased">
            {fullDate}
          </p>
          <div className="flex items-center">
            <p className="mr-2 hidden text-xs uppercase tracking-wider text-slate-100 antialiased md:block">
              Standar Waktu Indonesia
            </p>
            <span className="font-time w-[98px] text-right">{ctime}</span>
            <div className="hidden md:block">
              <div className="ml-4 flex flex-wrap items-center">
                <Link
                  href="https://www.facebook.com/yubliwarokka/"
                  target="_blank"
                  className="group mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-facebook transition duration-300 ease-in hover:bg-blue-600"
                  title="Official Facebook"
                >
                  <FaFacebook className="text-base text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/yubliwarokka__/"
                  target="_blank"
                  className="group mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-instagram transition duration-300 ease-in hover:bg-fuchsia-700"
                  title="Official Instagram"
                >
                  <LuInstagram className="text-base text-white" />
                </Link>
                <Link
                  href="https://github.com/yubliwarokkaid"
                  target="_blank"
                  className="group flex h-7 w-7 items-center justify-center rounded-full bg-githubHover transition duration-300 ease-in hover:bg-github"
                  title="Github Repository"
                >
                  <FaGithub className="text-base text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
