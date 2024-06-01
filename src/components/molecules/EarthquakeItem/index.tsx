import { getEarthquake } from "@/services/data_api";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function EarthquakeItem() {
  const [data, setData] = useState({
    Tanggal: "",
    Jam: "",
    Coordinates: "",
    Lintang: "",
    Bujur: "",
    Magnitude: "",
    Kedalaman: "",
    Wilayah: "",
    Potensi: "",
    Dirasakan: "",
    Shakemap: "",
  });

  const getEarthquakeList = useCallback(async () => {
    const response = await getEarthquake();
    setData(response.gempa);
  }, [getEarthquake]);

  useEffect(() => {
    getEarthquakeList();
  }, []);

  const ROOT_IMG = process.env.NEXT_PUBLIC_API;

  return (
    <section className="flex items-center justify-center">
      <div className="mb-32 mt-40 flex w-full items-center justify-center lg:w-3/4">
        <div className="flex flex-wrap items-center rounded-md bg-slate-100 p-2 dark:border dark:border-slate-700 dark:bg-slate-900 lg:flex-nowrap">
          <div className="mr-0 h-auto w-full overflow-hidden rounded-md lg:mr-10 lg:w-1/2">
            <img
              src={`${ROOT_IMG}/${data.Shakemap}`}
              alt={data.Wilayah}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="my-8 px-4 lg:my-0 lg:px-0">
            <div className="mb-4 flex items-center">
              <Image
                src="/icon/ic-jam.svg"
                width={10}
                height={10}
                alt="Icon Jam"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Waktu:</p>
                <span className="subTitle-earthquake">
                  {data.Tanggal},&nbsp;{data.Jam}
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Image
                src="/icon/ic-magnitudo.svg"
                width={10}
                height={10}
                alt="Icon Magnitudo"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Magnitudo:</p>
                <span className="subTitle-earthquake">
                  {data.Magnitude}&nbsp;SR
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Image
                src="/icon/ic-kedalaman.svg"
                width={10}
                height={10}
                alt="Icon Kedalaman"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Kedalaman:</p>
                <span className="subTitle-earthquake">{data.Kedalaman}</span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Image
                src="/icon/ic-lokasi.svg"
                width={10}
                height={10}
                alt="Icon Lokasi"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Lokasi:</p>
                <span className="subTitle-earthquake">
                  {`${data.Lintang} - ${data.Bujur}`}
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Image
                src="/icon/ic-koordinat.svg"
                width={10}
                height={10}
                alt="Icon Koordinat"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Koordinat:</p>
                <span className="subTitle-earthquake">{data.Coordinates}</span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Image
                src="/icon/ic-wilayah.svg"
                width={10}
                height={10}
                alt="Icon Wilayah"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Wilayah:</p>
                <span className="subTitle-earthquake">{data.Wilayah}</span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Image
                src="/icon/ic-tsunami.svg"
                width={10}
                height={10}
                alt="Icon Tsunami"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Potensi:</p>
                <span className="subTitle-earthquake">{data.Potensi}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/icon/ic-dirasakan.svg"
                width={10}
                height={10}
                alt="Icon Dirasakan"
                className="w-5"
              />
              <div className="ml-4">
                <p className="title-earthquake">Dirasakan (Skala MMI):</p>
                <span className="subTitle-earthquake">{data.Dirasakan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
