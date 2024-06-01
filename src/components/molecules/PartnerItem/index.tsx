import Image from "next/image";
import Link from "next/link";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function PartnerItem() {
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link
            href="https://data.bmkg.go.id/"
            target="_blank"
            className="grayscale-card group"
            title="BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)"
          >
            <Image
              src="/icon/ic-bmkg.svg"
              width={40}
              height={40}
              alt="Data BMKG"
              className="animate-spin-slow h-8 w-8"
            />
          </Link>
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="grayscale-card group"
            title="Tailwind CSS"
          >
            <RiTailwindCssFill className="animate-spin-slow text-5xl text-tailwind" />
          </Link>
          <Link
            href="https://react.dev/"
            target="_blank"
            className="grayscale-card group"
            title="React JS Dev"
          >
            <RiReactjsFill className="animate-spin-slow text-5xl text-react" />
          </Link>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="grayscale-card group"
            title="Next JS"
          >
            <SiNextdotjs className="animate-spin-slow text-4xl text-next dark:text-slate-100" />
          </Link>
          <Link
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            className="grayscale-card group"
            title="React Icons"
          >
            <Image
              src="/icon/ic-react-icons.svg"
              width={40}
              height={40}
              alt="React icons"
              className="animate-spin-slow h-9 w-9"
            />
          </Link>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Link
          href="https://wa.me/6285888212808?text=%20Halo,%20ada yang bisa%20saya%20for%20bantu?%20Tinggalkan pesan kamu disini."
          target="_blank"
          className="btn-whatsapp"
        >
          <Image
            src="/icon/ic-whatsapp.svg"
            width={100}
            height={100}
            alt="Whatsapp"
            className="h-5 w-5"
          />
          &nbsp;&nbsp;Contact via Whatsapp
        </Link>
      </div>
    </>
  );
}
