import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import Router from "next/router";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";

import { Inter, Poppins, Fira_Code, Montserrat } from "@next/font/google";

import SEO from "../../next-seo.config";
import GlobalStyles from "src/styles/GlobalStyles";
import CursorTrail from "src/components/CursorTrail";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const fira_code = Fira_Code({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [loading, setLoading] = useState(true);
  // similar to componentDidMount
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
          fontFamily: `${montserrat.style.fontFamily}, sans-serif`,
          fontFamilyMonospace: `${fira_code.style.fontFamily}, monospace`,
          headings: {
            fontFamily: `${fira_code.style.fontFamily}, monospace`,
          },
        }}
      >
        <GlobalStyles />
        {/* <CursorTrail /> */}
        {loading ? <div style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "10%",
          height: "10%",
        }}>
          <ReactLoading type="bubbles" height={'100%'} width={'100%'} />
        </div> : getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
};

export default App;
