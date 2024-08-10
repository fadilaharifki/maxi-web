import ContactUsModule from "@/modules/contact-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bimantis - Contact Us",
  description:
    "We learnt to behonest and helpful in everything we do to support you",
  icons: {
    icon: "/assets/image/favicon.ico",
  },
};

const ContactUsPage = () => {
  return <ContactUsModule />;
};

export default ContactUsPage;
