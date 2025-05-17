import type { Metadata } from "next";
import { Outfit,Ovo } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import DarkModeWrapper from "./components/DarkModeWrapper";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500",'600',"700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Anoop PK | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <DarkModeProvider>
          <DarkModeWrapper>
            {children}
          </DarkModeWrapper>
        </DarkModeProvider>
      </body>
    </html>
  );
}
