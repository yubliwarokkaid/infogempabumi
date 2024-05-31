import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-800 via-slate-950 to-slate-800 py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <Link
            href="https://data.bmkg.go.id/"
            target="_blank"
            title="BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)"
            className="text-center text-xs font-light tracking-widest text-slate-300 md:text-sm lg:text-left"
          >
            Sumber Data: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)
          </Link>
          <Link
            href="https://github.com/yubliwarokkaid/infogempabumi"
            className="flex items-center text-center text-xs font-light text-slate-400 md:text-right md:text-sm"
          >
            Design with&nbsp;<span className="text-red-600">❤</span>
            &nbsp;by Yubli Audy Warokka™
          </Link>
        </div>
      </div>
    </footer>
  );
}
