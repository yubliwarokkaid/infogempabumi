import {
  BreadCrumb,
  Footer,
  LatestFeltEarthquakeItem,
  Loading,
  Navbar,
  Partner,
} from "@/components";
import LayoutRoot from "@/layouts";
import { getEarthquakeLatest } from "@/services/data_api";
import { EarthquakeTypes } from "@/services/data_types";
import { useEffect } from "react";

export interface GempaBumiTerkiniProps {
  earthquake: EarthquakeTypes[];
}

export default function GempaBumiTerkini(props: GempaBumiTerkiniProps) {
  const { earthquake } = props;

  useEffect(() => {
    setTimeout(() => {
      const preLoader = document.querySelector<HTMLElement>(".preloader")!;
      preLoader.style.display = "none";
    }, 3000);
  }, []);

  return (
    <LayoutRoot title="Gempabumi Terkini (M ≥ 5.0) | BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)">
      <div className="preloader">
        <Loading />
      </div>
      <Navbar />
      <div className="mb-20 mt-[60px]">
        <BreadCrumb
          title="Gempabumi Terkini (M ≥ 5.0)"
          description="Gempabumi"
        />
      </div>
      <LatestFeltEarthquakeItem earthquake={earthquake} type="terkini" />
      <Partner />
      <Footer />
    </LayoutRoot>
  );
}

export async function getServerSideProps() {
  const earthquake: any = await getEarthquakeLatest();

  return {
    props: {
      earthquake: earthquake.gempa,
    },
  };
}
