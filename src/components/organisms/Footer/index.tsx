import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-4">
      <div className="container mx-auto">
        <div className="flex justify-center lg:items-center lg:justify-between">
          <Link
            href="https://data.bmkg.go.id/gempabumi/"
            target="_blank"
            title="BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)"
            className="text-sm font-light tracking-widest text-slate-100"
          >
            Sumber Data: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)
          </Link>
          <Link
            href="https://instagram.com/yubliwarokka__"
            className="text-sm text-slate-500"
          >
            Design with <span className="text-red-600">❤</span> by Yubli Audy
            Warokka™
          </Link>
        </div>
      </div>
    </footer>
  );
}
