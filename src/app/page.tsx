import LayoutComponent from "@/components/layout";
import HomePage from "./_home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bimantis",
  description:
    "We learnt to behonest and helpful in everything we do to support you",
  icons: {
    icon: "/assets/image/favicon.ico",
  },
  openGraph: {
    title: "Bimantis",
  },
};

export default function Home() {
  return (
    <LayoutComponent>
      <HomePage />
    </LayoutComponent>
  );
}
