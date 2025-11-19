"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useWindowScroll } from "react-use";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/button";

import { cn } from "@/lib/utils";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

export const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play().catch(() => {});
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const navEl = navContainerRef.current;
    if (!navEl) return;

    const handleVisibility = () => {
      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navEl.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navEl.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navEl.classList.add("floating-nav");
      }
      setLastScrollY(currentScrollY);
    };

    const raf = requestAnimationFrame(handleVisibility);

    return () => cancelAnimationFrame(raf);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    const navEl = navContainerRef.current;
    if (!navEl) return;

    gsap.to(navEl, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <section
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Image src="/img/logo.png" width={40} height={40} alt="logo" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="h-full flex items-center">
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5 cursor-pointer"
              title={isAudioPlaying ? "Pause" : "Play"}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={cn("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </section>
  );
};
