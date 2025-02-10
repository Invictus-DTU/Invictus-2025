"use client";
import React from "react";
import Navbar from "./Navbar";
import Terrain from "./Terrain";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useStore } from "@/context/AppContext";
import Loading from "./Loading";
import { Bounce, ToastContainer } from "react-toastify";

const Main = ({ children }) => {
  const path = usePathname();
  const { loading } = useStore();

  return (
    <body
      className={cn(
        "bg w-screen h-screen flex flex-col overflow-hidden no-scrollbar",
        (path === "/events") | (path === "/team") | (path == "/workshops") &&
          "after:bg-[#00000033]"
      )}
    >
      <Navbar />
      {loading && <Loading />}
      {children}
      <Terrain />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </body>
  );
};

export default Main;
