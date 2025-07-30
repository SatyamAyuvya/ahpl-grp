"use client";

import { useLayoutEffect, useState } from "react";

export default function PageLayoutWithScrollRestore({ children }) {
  const [isHydrated, setIsHydrated] = useState(false);

  // Set scroll restoration to manual as early as possible
  if (typeof window !== "undefined" && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  useLayoutEffect(() => {
    // Disable smooth scroll initially to prevent flicker
    document.documentElement.style.scrollBehavior = "auto";

    // Hide content to avoid flicker during scroll restore
    document.body.style.visibility = "hidden";

    // Scroll to saved position before painting
    const savedY = parseInt(localStorage.getItem("scrollY") || "0", 10);
    window.scrollTo(0, savedY);

    requestAnimationFrame(() => {
      // Show page content after scroll restore
      document.body.style.visibility = "visible";
      document.documentElement.style.scrollBehavior = "smooth";
      setIsHydrated(true);
    });
  }, []);

  useLayoutEffect(() => {
    const saveScroll = () => {
      localStorage.setItem("scrollY", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", saveScroll);
    window.addEventListener("pagehide", saveScroll);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") saveScroll();
    });

    return () => {
      window.removeEventListener("beforeunload", saveScroll);
      window.removeEventListener("pagehide", saveScroll);
    };
  }, []);

  // Loader UI
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl animate-fadeIn">
        Loading...
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}</style>
      </div>
    );
  }

  return children;
}
