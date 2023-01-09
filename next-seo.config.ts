import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://seetf.sg",
    siteName: "Social Engineering Experts",
    title: "Social Engineering Experts",
    description: "Social Engineering Experts is a Capture the Flag (CTF) competition team based in Singapore."
  },
  titleTemplate: "Social Engineering Experts | %s",
  twitter: {
    handle: "@seetf_sg",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    }
  ]
};

export default config;
