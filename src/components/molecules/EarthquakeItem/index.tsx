import { getEarthquake } from "@/services/data_api";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function EarthquakeItem() {
  const [data, setData] = useState({
    Tanggal: "",
    DateTime: "",
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

  const localDate = new Date(data.DateTime).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const localTime = new Date(data.DateTime).toLocaleDateString("id-ID", {
    timeStyle: "full",
  });

  return (
    <section className="mb-32 mt-40">
      <div className="flex flex-wrap items-center rounded bg-slate-100 p-2">
        <div className="mr-0 h-auto w-full overflow-hidden rounded-md lg:mr-10 lg:w-1/2">
          <img
            src={`https://data.bmkg.go.id/DataMKG/TEWS/${data.Shakemap}`}
            alt={data.Wilayah}
            className="h-full w-full object-contain"
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
                {data.Tanggal},&nbsp;{data.Jam}&nbsp;-&nbsp;{localDate},&nbsp;
                {localTime}
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
    </section>
  );
}
