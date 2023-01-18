import { Inter } from "@next/font/google";
import { PageContextProvider } from "@/contexts/pageContext/page.context";

import Footer from "@/components/footer/footer.compoent";

import style from "./layout.module.css";
import "../globals.css";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <PageContextProvider>
          <main className={style.main}>
            {children}
            <Footer />
          </main>
        </PageContextProvider>
      </body>
    </html>
  );
}
