import LayoutComponent from "@/components/layout";
import HomePage from "./_home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bimantis",
  description:
    "We learnt to be honest and helpful in everything we do to support you",
  keywords: "bimantis, fruits",
  icons: {
    icon: "https://bimantis.com/favicon.ico",
  },
  openGraph: {
    title: "Bimantis",
    description:
      "We learnt to be honest and helpful in everything we do to support you",
    url: "https://www.bimantis.com",
    images: [
      {
        url: "https://bimantis.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Bimantis",
      },
    ],
    siteName: "Bimantis",
  },
};

export default function Home() {
  return (
    <LayoutComponent>
      <HomePage />
    </LayoutComponent>
  );
}
