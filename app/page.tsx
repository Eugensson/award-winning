"use client";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });

import { About } from "@/components/about";
import { Story } from "@/components/story";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  );
};

export default Home;
