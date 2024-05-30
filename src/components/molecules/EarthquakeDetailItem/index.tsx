import { Jost } from "next/font/google";
import Image from "next/image";

export interface EarthquakeDetailItemProps {
  tanggal: string;
  jam: string;
  koordinat: string;
  lintang: string;
  bujur: string;
  magnitude: string;
  kedalaman: string;
  wilayah: string;
  potensi: string;
  dirasakan: string;
  type: "terkini" | "dirasakan";
}

const jost = Jost({
  subsets: ["latin"],
  style: "normal",
});

export default function EarthquakeDetailItem(
  props: Partial<EarthquakeDetailItemProps>,
) {
  const {
    tanggal,
    jam,
    koordinat,
    lintang,
    bujur,
    magnitude,
    kedalaman,
    wilayah,
    potensi,
    dirasakan,
    type,
  } = props;

  if (type === "terkini") {
    return (
      <tbody className="divide-y divide-gray-100 bg-transparent">
        <tr className="hover:bg-slate-50">
          <td className="table-body-xs font-mono">
            {tanggal},&nbsp;{jam}
          </td>
          <td className="table-body-sm">{koordinat}</td>
          <td className="table-body-sm">{lintang}</td>
          <td className="table-body-sm">{bujur}</td>
          <td
            className={`cursor-help  whitespace-nowrap px-6 py-4 text-base font-semibold tracking-wider text-red-600 ${jost.className}`}
            title={`${tanggal} - Gempabumi dengan kekuatan ${magnitude} Skala Richter - ${potensi}`}
          >
            <div className="flex items-center">
              {magnitude}
              <Image
                src="/icon/ic-magnitudo.svg"
                width={10}
                height={10}
                alt="Icon Magnitudo"
                className="ml-2 w-3"
              />
            </div>
          </td>
          <td className="table-body-sm">{kedalaman}</td>
          <td className="table-body-sm">{wilayah}</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="divide-y divide-gray-100 bg-transparent">
      <tr className="hover:bg-slate-50">
        <td className="table-body-xs font-mono">
          {tanggal},&nbsp;{jam}
        </td>
        <td className="table-body-sm">{koordinat}</td>
        <td className="table-body-sm">{lintang}</td>
        <td className="table-body-sm">{bujur}</td>
        <td
          className={`cursor-help whitespace-nowrap px-6 py-4 text-base font-semibold tracking-wider text-sky-500 ${jost.className}`}
          title={`${tanggal} - Gempabumi dengan kekuatan ${magnitude} Skala Richter - ${wilayah}`}
        >
          <div className="flex items-center justify-center">
            {magnitude}
            <Image
              src="/icon/ic-magnitudo-sky.svg"
              width={10}
              height={10}
              alt="Icon Magnitudo"
              className="ml-2 w-3"
            />
          </div>
        </td>
        <td className="table-body-sm">{kedalaman}</td>
        <td className="table-body-xs text-wrap">
          <p className="mb-1">{wilayah},</p>
          <span className="text-xs font-semibold uppercase text-sky-500">
            {dirasakan}
          </span>
        </td>
      </tr>
    </tbody>
  );
}
