"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Business Verticals", href: "#business-verticals" },
  { label: "Investors", href: "#investors" },
  { label: "Doing Good", href: "#doing-good" },
  { label: "Awards & Accolades", href: "#awards" },
  { label: "In the Press", href: "#press" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Update header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect current visible section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top <= 80 && top + height > 80) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href); // prevent jump on reload
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full px-6 py-3 flex items-center justify-between transition-colors duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent lg:bg-white/60"}`}
    >
      {/* Logo */}
      <div className="relative w-16 h-8 sm:w-32 sm:h-10 lg:w-36 lg:h-12">
        <Image
          src="https://goodglamm.com/wp-content/uploads/2022/11/logo2x.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href="#"
            onClick={(e) => handleScrollToSection(e, link.href)}
            className="text-gray-800 hover:text-blue-600 text-sm font-medium transition cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <FiX size={24} /> : <CgMenuRight size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black shadow-md rounded-b-xl flex flex-col items-center py-4 z-50 lg:hidden">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={link.label}
                href="#"
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`py-2 px-4 text-white text-base font-medium w-full text-start cursor-pointer transition 
                hover:bg-gray-200/50 ${isActive ? "bg-gray-200/50 text-black" : ""}`}
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
