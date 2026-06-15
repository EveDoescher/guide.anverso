import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anverso - Design Guide",
  description:
    "Sistema visual do Anverso: cores, tipografia, componentes e tom de voz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
