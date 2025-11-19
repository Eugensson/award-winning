"use client";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });

import { Navbar } from "@/components/navbar";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
