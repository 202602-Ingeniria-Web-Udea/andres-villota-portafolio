import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrés Alejandro Villota | Portafolio",
  description:
    "Portafolio profesional de Andrés Alejandro Villota Villota, estudiante de Ingeniería de Sistemas enfocado en desarrollo de software, backend, cloud e IoT.",
  keywords: [
    "Andrés Villota",
    "Ingeniería de Sistemas",
    "Java",
    "Spring Boot",
    "Backend",
    "Cloud",
    "IoT",
    "Medellín",
  ],
  authors: [{ name: "Andrés Alejandro Villota Villota" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
