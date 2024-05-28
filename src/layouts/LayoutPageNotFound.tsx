import { Poppins } from "next/font/google";
import Head from "next/head";

export interface LayoutPageNotFoundProps {
  children: React.ReactNode;
  title: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
});

export default function LayoutPageNotFound(props: LayoutPageNotFoundProps) {
  const { children, title } = props;

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
      <main className={poppins.className}>
        <div>{children}</div>
      </main>
    </>
  );
}
