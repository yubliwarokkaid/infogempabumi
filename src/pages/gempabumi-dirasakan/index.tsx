import {
  BreadCrumb,
  EarthquakeDetailItem,
  Footer,
  LatestFeltEarthquakeItem,
  Loading,
  Navbar,
  Partner,
} from "@/components";
import LayoutRoot from "@/layouts";
import { getEarthquakeFelt } from "@/services/data_api";
import { EarthquakeTypes } from "@/services/data_types";
import { useEffect } from "react";

export interface GempaBumiDirasakanProps {
  earthquake: EarthquakeTypes[];
}

export default function GempaBumiDirasakan(props: GempaBumiDirasakanProps) {
  const { earthquake } = props;

  useEffect(() => {
    setTimeout(() => {
      const preLoader = document.querySelector<HTMLElement>(".preloader")!;
      preLoader.style.display = "none";
    }, 3000);
  }, []);

  return (
    <LayoutRoot title="Gempabumi Dirasakan | BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)">
      <div className="preloader">
        <Loading />
      </div>
      <Navbar />
      <div className="mb-20 mt-[60px]">
        <BreadCrumb title="Gempabumi Dirasakan" description="Gempabumi" />
      </div>
      <LatestFeltEarthquakeItem earthquake={earthquake} type="dirasakan" />
      <Partner />
      <Footer />
    </LayoutRoot>
  );
}

export async function getServerSideProps() {
  const earthquake: any = await getEarthquakeFelt();

  return {
    props: {
      earthquake: earthquake.gempa,
    },
  };
}
