import { SpeedInsights } from "@vercel/speed-insights/next";
import { Noto_Sans } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

export interface LayoutRootProps {
  children: React.ReactNode;
  title: string;
}

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
});

export default function LayoutRoot(props: LayoutRootProps) {
  const { children, title } = props;

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Informasi gempabumi sesuai data dari BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={noto.className}>
        <div>{children}</div>
        <SpeedInsights />
      </main>
    </>
  );
}
