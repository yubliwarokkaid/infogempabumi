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
      <tbody className="divide-y divide-slate-100 bg-transparent dark:divide-slate-700">
        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800">
          <td className="table-body-xs-date font-mono">
            {tanggal},&nbsp;{jam}
          </td>
          <td className="table-body-sm">{koordinat}</td>
          <td className="table-body-sm">{lintang}</td>
          <td className="table-body-sm">{bujur}</td>
          <td
            className={`table-body-magnitudo ${jost.className}`}
            title={`Gempabumi dengan magnitudo ${magnitude} Skala Richter - ${potensi}`}
          >
            <div className="flex items-center">
              {magnitude}
              <Image
                src="/icon/ic-magnitudo.svg"
                width={10}
                height={10}
                alt={`${magnitude} Skala Richter`}
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
    <tbody className="divide-y divide-slate-100 bg-transparent dark:divide-slate-700">
      <tr className="hover:bg-slate-50 hover:dark:bg-slate-800">
        <td className="table-body-xs-date font-mono">
          {tanggal},&nbsp;{jam}
        </td>
        <td className="table-body-sm">{koordinat}</td>
        <td className="table-body-sm">{lintang}</td>
        <td className="table-body-sm">{bujur}</td>
        <td
          className={`table-body-magnitudo ${jost.className}`}
          title={`Gempabumi dengan magnitudo ${magnitude} Skala Richter - ${wilayah}`}
        >
          <div className="flex items-center justify-center">
            {magnitude}
            <Image
              src="/icon/ic-magnitudo.svg"
              width={10}
              height={10}
              alt={`${magnitude} Skala Richter`}
              className="ml-2 w-3"
            />
          </div>
        </td>
        <td className="table-body-sm">{kedalaman}</td>
        <td className="table-body-xs text-wrap">
          <p className="mb-1">{wilayah},</p>
          <span className="text-xs font-semibold uppercase text-amber-500">
            {dirasakan}
          </span>
        </td>
      </tr>
    </tbody>
  );
}
