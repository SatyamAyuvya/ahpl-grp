"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Business Verticals", href: "#business-verticals" },
  // { label: "Investors", href: "#investors" },
  { label: "Doing Good", href: "#doing-good" },
  { label: "Awards & Accolades", href: "#awards" },
  { label: "In the Press", href: "#press" },
  { label: "Contact Us", href: "#contactUs" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  //   useLayoutEffect(() => {
  //   const scrollY = localStorage.getItem("scrollY");
  //   if (scrollY) {
  //     window.scrollTo({ top: parseInt(scrollY), behavior: "instant" });
  //   }
  // }, []);

  // useEffect(() => {
  //   const saveScrollPosition = () => {
  //     localStorage.setItem("scrollY", window.scrollY.toString());
  //   };

  //   window.addEventListener("beforeunload", saveScrollPosition);
  //   return () => window.removeEventListener("beforeunload", saveScrollPosition);
  // }, []);

  // 🧼 Remove hash on reload so it doesn't scroll
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // 🧭 Track scroll + active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      let currentSection = "";
      let minDistance = Infinity;

      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top);

          // Track the section closest to the top of viewport
          if (distanceFromTop < minDistance) {
            minDistance = distanceFromTop;
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // 🟡 Call once on initial mount to apply correct header background
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔽 Scroll to section on click (with header offset)
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    const headerHeight =
      document.getElementById("main-header")?.offsetHeight || 70;

    if (el) {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      history.replaceState(null, "", href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      id="main-header"
      className={`fixed top-0 z-50 w-full
        py-2
        sm:py-1
        xl:py-[9px]
        2xl:py-[11px]
        px-4
        md:px-4
        xl:px-[136px]
        2xl:px-[180px]
        2xlPlus:px-[366px]
        flex items-center justify-between
        transition-colors duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent md:bg-white/50 lg:bg-white/60"}
      `}
    >
      {/* Logo */}
      <div
        onClick={(e) => handleScrollToSection(e, "#home")}
        className="relative cursor-pointer"
      >
        <Image
          src="https://goodglamm.com/wp-content/uploads/2022/11/logo2x.png"
          alt="Logo"
          width={120}
          height={40}
          className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 2xl:w-26 2xl:h-10 object-contain"
          priority
        />
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex mr-14 space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href="#"
            onClick={(e) => handleScrollToSection(e, link.href)}
            className={`text-base lg:flex font-normal cursor-pointer transition 
              ${
                activeSection === link.href.replace("#", "")
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <div className="lg:hidden h-full flex items-center">
        <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <FiX size={24} /> : <CgMenuRight size={33} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black shadow-md flex flex-col items-center py-2 z-50 lg:hidden">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={link.label}
                href="#"
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`py-2 px-8 text-sm w-full text-start cursor-pointer transition 
                  ${
                    isActive
                      ? "bg-gray-200/20 text-white"
                      : "text-white hover:bg-gray-200/20"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
