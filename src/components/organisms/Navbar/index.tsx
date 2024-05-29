import { useEffect } from "react";
import Link from "next/link";
import ToggleMenu from "./ToggleMenu";
import MenuLinks from "./MenuLinks";
import TopBar from "./TopBar";

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
      <header className="absolute left-0 top-8 z-10 flex w-full items-center border-b border-b-slate-200 bg-transparent transition-all duration-500">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              className="mr-2 block py-4 text-lg font-bold uppercase"
            >
              Info BMKG
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
