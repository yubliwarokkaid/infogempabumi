import { Footer, HomePage, Loading, Navbar, Partner } from "@/components";
import LayoutRoot from "@/layouts";
import { useEffect } from "react";

export interface HomeProps {
  data: string;
}

export default function Home(props: HomeProps) {
  const { data } = props;

  useEffect(() => {
    setTimeout(() => {
      const preLoader = document.querySelector<HTMLElement>(".preloader")!;
      preLoader.style.display = "none";
    }, 3000);
  }, []);

  console.log("Output Data", data);

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
