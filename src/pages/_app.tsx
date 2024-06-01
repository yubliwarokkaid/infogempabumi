import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }: AppProps) {
  nProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => nProgress.start());
  Router.events.on("routeChangeComplete", () => nProgress.done());
  Router.events.on("routeChangeError", () => nProgress.done());
  return <Component {...pageProps} />;
}
