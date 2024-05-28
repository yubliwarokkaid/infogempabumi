import { useEffect } from "react";

export default function ToggleMenu() {
  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger?.addEventListener("click", () => {
      hamburger?.classList.toggle("hamburger-active");
      navMenu?.classList.toggle("hidden");
    });
  }, []);

  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      className="absolute right-4 block lg:hidden"
    >
      <span className="hamburger-line origin-top-left transition-all duration-300 ease-in-out" />
      <span className="hamburger-line transition-all duration-300 ease-in-out" />
      <span className="hamburger-line origin-bottom-left transition-all duration-300 ease-in-out" />
    </button>
  );
}
