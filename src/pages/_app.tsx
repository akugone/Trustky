import { EthereumClient, modalConnectors } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Chain, WagmiConfig, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import SEO from "../../next-seo.config";

import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { PreviewWebsite } from "./PreviewWebsite";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider enableSystem={false}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>

      <PreviewWebsite />
    </>
  );
}

export default MyApp;
