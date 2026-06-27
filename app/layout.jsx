import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Srizen Infra | Premium Triplex Villas in Boduppal, Hyderabad",
  description:
    "A boutique collection of G+2 triplex villas in Boduppal, Hyderabad by Srizen Infra — private terraces, elevated design, and quiet luxury living.",
  keywords: [
    "triplex villas Boduppal",
    "Srizen Infra",
    "villas in Hyderabad",
    "premium villas Boduppal",
    "luxury triplex Hyderabad",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
