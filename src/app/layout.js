import { Geist, Geist_Mono } from "next/font/google";
import { localFont } from 'next/font/local';
import path from "path";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const againstFont = localFont({
  src: [
    {
      path: '../../public/fonts/Against.woff2', // Caminho relativo FIXO
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-against'
});

export const metadata = {
  title: "Visite o Ceará",
  description: "Descubra e conheça o Ceará: o melhor estado do nordeste.",
  icons: {
    icon: '/visite-favico.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${againstFont.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
