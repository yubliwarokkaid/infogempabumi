import { HomePage, Loading } from "@/components";
import LayoutRoot from "@/layouts";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const preLoader = document.querySelector<HTMLElement>(".preloader")!;
      preLoader.style.display = "none";
    }, 3000);
  }, []);

  return (
    <LayoutRoot>
      <div className="preloader">
        <Loading />
      </div>
      <HomePage />
    </LayoutRoot>
  );
}
