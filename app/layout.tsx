import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tempo do Gueto — Os melhores cursos digitais do Brasil",
    template: "%s | Tempo do Gueto",
  },
  description:
    "Curadoria dos melhores cursos digitais da Hotmart com os menores preços, avaliações reais e conteúdo exclusivo para quem quer crescer online.",
  keywords: ["cursos online", "hotmart", "afiliados", "marketing digital", "renda extra"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tempodogueto.com.br",
    siteName: "Tempo do Gueto",
    title: "Tempo do Gueto — Os melhores cursos digitais do Brasil",
    description: "Curadoria dos melhores cursos digitais da Hotmart.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
