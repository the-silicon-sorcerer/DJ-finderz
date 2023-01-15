import { Inter } from "@next/font/google";
import Footer from "@/components/footer/footer.compoent";

import { PageContextProvider } from "@/contexts/pageContext/page.context";
import style from "./layout.module.css";
import "../globals.css";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log();
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
