import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-800 via-slate-950 to-slate-800 py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <Link
            href="https://github.com/yubliwarokkaid/infogempabumi"
            className="mb-2 flex items-center text-center text-xs font-light text-slate-400 transition duration-300 ease-in-out hover:text-sky-500 md:mb-0"
          >
            Design with&nbsp;<span className="text-red-600">❤</span>
            &nbsp;by Yubli Audy Warokka™
          </Link>
          <Link
            href="https://data.bmkg.go.id/"
            target="_blank"
            title="BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)"
            className="text-center text-xs font-light uppercase tracking-wide text-slate-300 transition duration-300 ease-in-out hover:text-sky-500"
          >
            Sumber Data: BMKG - (Badan Meteorologi, Klimatologi, dan Geofisika)
          </Link>
        </div>
      </div>
    </footer>
  );
}
