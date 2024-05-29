import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <Link
            href="https://data.bmkg.go.id/gempabumi/"
            target="_blank"
            title="BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)"
            className="text-center text-xs font-light tracking-widest text-slate-300 md:text-sm lg:text-left"
          >
            Sumber Data: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)
          </Link>
          <Link
            href="https://instagram.com/yubliwarokka__"
            className="text-center text-xs font-light text-slate-400 md:text-right md:text-sm"
          >
            Design with <span className="text-red-600">❤</span> by Yubli Audy
            Warokka™
          </Link>
        </div>
      </div>
    </footer>
  );
}
