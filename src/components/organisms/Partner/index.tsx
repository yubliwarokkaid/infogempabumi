import Image from "next/image";
import Link from "next/link";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function Partner() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-4 flex flex-wrap items-center justify-center">
          <h2 className="text-base font-medium tracking-wide text-slate-800 dark:text-slate-100">
            Thanks to Supported by:
          </h2>
        </div>
        <div className=" flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link
              href="https://data.bmkg.go.id/"
              target="_blank"
              className="grayscale-card"
              title="BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)"
            >
              <Image
                src="/icon/ic-bmkg.svg"
                width={40}
                height={40}
                alt="Data BMKG"
                className="h-8 w-8"
              />
            </Link>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="grayscale-card"
              title="Tailwind CSS"
            >
              <RiTailwindCssFill className="text-tailwind text-5xl" />
            </Link>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="grayscale-card"
              title="React JS Dev"
            >
              <RiReactjsFill className="text-react text-5xl" />
            </Link>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="grayscale-card"
              title="Next JS"
            >
              <SiNextdotjs className="text-next text-4xl dark:text-slate-100" />
            </Link>
            <Link
              href="https://react-icons.github.io/react-icons/"
              target="_blank"
              className="grayscale-card"
              title="React Icons"
            >
              <Image
                src="/icon/ic-react-icons.svg"
                width={40}
                height={40}
                alt="React icons"
                className="h-9 w-9"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
