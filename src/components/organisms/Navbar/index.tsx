import { useEffect } from "react";
import Link from "next/link";
import ToggleMenu from "./ToggleMenu";
import MenuLinks from "./MenuLinks";
import TopBar from "./TopBar";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");

      if (window.scrollY > 0) {
        header?.classList.add("navbar-fixed");
      } else {
        header?.classList.remove("navbar-fixed");
      }
    });
  }, []);

  return (
    <>
      <TopBar />
      <header className="absolute left-0 top-[35px] z-10 flex w-full items-center border-b border-b-slate-200 bg-transparent transition-all duration-500 md:top-[41px]">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              className="mr-2 flex items-center py-4 text-lg font-extrabold uppercase"
            >
              <Image
                src="/logo/loading.svg"
                width={300}
                height={300}
                alt="logo"
                className="mr-2 h-5 w-5"
              />
              <p className="text-blue-700">
                Info <span className="text-green-700">BMKG</span>
              </p>
            </Link>
            <div className="flex items-center">
              <ToggleMenu />
              <MenuLinks />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
