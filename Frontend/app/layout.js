import "./globals.css";
import Terrain from "@/components/Terrain";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "INVICTUS'25",
  description: "The technical fest of DTU",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg w-screen h-screen flex flex-col`}
      >
        <Navbar/>
        {children}
        <Terrain />
      </body>
    </html>
  );
}
