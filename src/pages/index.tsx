import { Footer, HomePage, Loading, Navbar, Partner } from "@/components";
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
    <LayoutRoot title="Informasi Gempabumi dan Cuaca | BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)">
      <div className="preloader">
        <Loading />
      </div>
      <Navbar />
      <HomePage />
      <Partner />
      <Footer />
    </LayoutRoot>
  );
}
