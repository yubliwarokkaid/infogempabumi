import { EarthquakeTypes } from "@/services/data_types";
import EarthquakeDetailItem from "../EarthquakeDetailItem";

export interface LatestFeltEarthquakeItemProps {
  earthquake: EarthquakeTypes[];
  type: "terkini" | "dirasakan";
}

export default function LatestFeltEarthquakeItem(
  props: LatestFeltEarthquakeItemProps,
) {
  const { earthquake, type } = props;

  if (type === "terkini") {
    return (
      <section className="dark:bg-image-bmkg-dark h-full w-full bg-image-bmkg bg-center bg-no-repeat object-cover pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full table-auto border-collapse divide-y divide-slate-200 border border-slate-200 dark:divide-slate-700 dark:border-slate-700">
                    <caption className="mb-2 caption-top uppercase tracking-wide dark:text-sky-500">
                      Sumber Data: BMKG - Badan Meteorologi, Klimatologi, dan
                      Geofisika
                    </caption>
                    <thead className="bg-slate-100 dark:bg-slate-900">
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
    );
  }

  return (
    <section className="dark:bg-image-bmkg-dark h-full w-full bg-image-bmkg bg-center bg-no-repeat object-cover pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full table-auto border-collapse divide-y divide-slate-200 border border-slate-200 dark:divide-slate-700 dark:border-slate-700">
                  <caption className="mb-2 caption-top uppercase tracking-wide dark:text-sky-500">
                    Sumber Data: BMKG - Badan Meteorologi, Klimatologi, dan
                    Geofisika
                  </caption>
                  <thead className="bg-slate-100 dark:bg-slate-900">
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
                        Dirasakan (Skala MMI)
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
                        dirasakan={item.Dirasakan}
                        type="dirasakan"
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
  );
}
