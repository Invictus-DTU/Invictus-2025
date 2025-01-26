import "./globals.css";
import Terrain from "@/components/Terrain";
import Navbar from "@/components/Navbar";
import Head from "next/head";


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
      
      <body
        className={`bg w-screen h-screen flex flex-col overflow-auto`}
      >
        <Navbar/>
        {children}
        <Terrain />
      </body>
    </html>
  );
}
