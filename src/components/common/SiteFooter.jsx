"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// Data: Social media profiles
const SOCIAL_PROFILES = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/ahplgroup",
    icon: FaFacebookF,
    hoverClass: "hover:bg-blue-600",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/ahplgroup",
    icon: FaTwitter,
    hoverClass: "hover:bg-sky-500",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/ahplgroup",
    icon: FaInstagram,
    hoverClass: "hover:bg-pink-500",
  },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white px-6 xl:px-20">
      {/* Inner container */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 py-10 text-center">
        
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">AHPL Group</h2>
          <p className="mt-3 text-sm text-gray-400 max-w-md leading-relaxed">
            We design & build digital experiences that grow your brand with creativity and innovation.
          </p>
        </div>

        <div className="flex gap-4">
          {SOCIAL_PROFILES.map(({ platform, url, icon: Icon, hoverClass }) => (
            <Link
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${platform}`}
              className={`p-2 rounded-full bg-gray-800 transition-colors duration-200 focus:outline-none ${hoverClass}`}
            >
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-white">
        © {currentYear} AHPL Group. All rights reserved.
      </div>
    </footer>
  );
}
