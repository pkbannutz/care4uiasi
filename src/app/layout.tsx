import type { Metadata } from "next";
import { ModalProvider } from "@/context/ModalContext";
import LoadingScreenWrapper from "@/components/LoadingScreenWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Care4U - Îngrijiri Medicale la Domiciliu în Iași",
  description: "Servicii medicale profesionale la domiciliu în Iași. Asistent medical autorizat cu experiență, ofer confidențialitate, empatie și profesionalism.",
  keywords: "îngrijiri medicale, domiciliu, Iași, asistent medical, perfuzii, monitorizare vitală, analize",
  authors: [{ name: "Care4U" }],
  icons: {
    icon: "/images/icons/logo favicon.png",
    shortcut: "/images/icons/logo favicon.png",
    apple: "/images/icons/logo favicon.png",
  },
  openGraph: {
    title: "Care4U - Îngrijiri Medicale la Domiciliu în Iași",
    description: "Servicii medicale profesionale la domiciliu în Iași. Asistent medical autorizat cu experiență.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        <LoadingScreenWrapper>
          <ModalProvider>
            {children}
          </ModalProvider>
        </LoadingScreenWrapper>
      </body>
    </html>
  );
}
