import { BreadCrumb, EarthquakeDetailItem, Loading } from "@/components";
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
    <LayoutRoot>
      <div className="preloader">
        <Loading />
      </div>
      <div className="mt-[60px]">
        <BreadCrumb
          title="Gempabumi Terkini (M ≥ 5.0)"
          description="Gempabumi Terkini"
        />
      </div>
      <section className="h-full w-full bg-[url('/background/background.svg')] bg-cover bg-center bg-no-repeat pb-20">
        <div className="container mx-auto px-6 pt-20">
          <p className="mb-2 text-xs italic md:text-right">
            Sumber Data: BMKG - Badan Meteorologi, Klimatologi, dan Geofisika
          </p>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full table-fixed divide-y divide-slate-200 border border-slate-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th scope="col" className="table-head">
                          Waktu Gempa
                        </th>
                        <th scope="col" className="table-head">
                          Koordinat
                        </th>
                        <th scope="col" className="table-head">
                          Lintang
                        </th>
                        <th scope="col" className="table-head">
                          Bujur
                        </th>
                        <th scope="col" className="table-head">
                          Magnitudo
                        </th>
                        <th scope="col" className="table-head">
                          Kedalaman
                        </th>
                        <th scope="col" className="table-head">
                          Wilayah
                        </th>
                      </tr>
                    </thead>
                    {earthquake.map((item: EarthquakeTypes) => {
                      return (
                        <EarthquakeDetailItem
                          tanggal={item.Tanggal}
                          jam={item.Jam}
                          koordinat={item.Coordinates}
                          lintang={item.Lintang}
                          bujur={item.Bujur}
                          magnitude={item.Magnitude}
                          kedalaman={item.Kedalaman}
                          wilayah={item.Wilayah}
                          potensi={item.Potensi}
                          type="terkini"
                        />
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
