import "./globals.css";
import Head from "next/head";
import { AppProvider } from "@/context/AppContext";
import Main from "@/components/Main";

export const metadata = {
  title: "INVICTUS'25",
  description: "The technical fest of DTU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <AppProvider>
        <Main>
          {children}
        </Main>
      </AppProvider>
    </html>
  );
}
