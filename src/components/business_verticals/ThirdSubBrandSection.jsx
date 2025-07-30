"use client";

import { useState } from "react";
import Image from "next/image";
import { thirdSubBrandDetails } from "@/data/businessVerticalsPage/businessVerticalsPageContent";

export default function ThirdSubBrandSection() {
  const [showMore, setShowMore] = useState(false);

  const truncateByWords = (text, wordCount) => {
    const words = text.split(" ");
    const truncated = words.slice(0, wordCount).join(" ");
    if (words.length <= wordCount) return truncated;
    const lastChar = truncated.trim().slice(-1);
    return lastChar === "." ? truncated + ".." : truncated + "...";
  };

  const shortText = truncateByWords(thirdSubBrandDetails?.descriptionText, 25);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center lg:flex-row lg:px-6 lg:py-0">
        <div className="relative ">
          <Image
            src={`${thirdSubBrandDetails?.imageUrl}`}
            alt="Good Creator Co"
            width={275}
            height={160}
            className="w-48 h-24 lg:w-[275px] lg:h-[160px] object-contain"
            priority
          />
        </div>

        <div className="flex flex-1 justify-center mb-5">
          <p className="text-sm mt-8 text-gray-700 sm:text-base lg:w-[80%] lg:px-0 lg:mt-0 lg:text-lg">
            <span className="hidden sm:inline">{thirdSubBrandDetails?.descriptionText}</span>
            <span className="inline sm:hidden">
              {showMore ? thirdSubBrandDetails?.descriptionText : shortText}
              <button
                onClick={() => setShowMore(!showMore)}
                className="ml-1 text-blue-600 underline text-sm"
              >
                {showMore ? "Read Less" : "+Read More"}
              </button>
            </span>
          </p>
        </div>
      </div>

      {/* Sub-brand Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 px-4 mt-1 justify-items-center">
        {thirdSubBrandDetails?.subBrandLogos.map((logo, index) => {
          const isFirstLogo = index === 0;

          return (
            <div
              key={index}
              onClick={() =>
                window.open(logo.url, "_blank", "noopener,noreferrer")
              }
              className={`relative cursor-pointer flex items-center justify-center
                        ${
                          isFirstLogo
                            ? "col-span-2 sm:col-span-2 lg:col-span-1 lg:col-start-2 w-[70px] h-[70px] lg:w-[80px] lg:h-[80px]"
                            : "col-span-1 w-24 h-10 lg:w-28 lg:h-16"
                        }
              `}
              >
              <Image
                src={logo.img}
                alt={`Sub-brand logo ${index + 1}`}
                width={100}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
