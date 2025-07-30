"use client";

import { useState } from "react";
import Image from "next/image";
import useIsMobileView from "@/hooks/useIsMobileView";
import { fourthSubBrandDetails } from "@/data/businessVerticalsPage/businessVerticalsPageContent";

export default function FourthSubBrandSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobileView = useIsMobileView();

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    const truncated = words.slice(0, wordLimit).join(" ");
    const lastChar = truncated.trim().slice(-1);
    return lastChar === "." ? truncated + ".." : truncated + "...";
  };

  const collapsedText = truncateText(fourthSubBrandDetails?.descriptionText, 25);

  return (
    <div className="flex flex-col">
      {/* Logo + Description */}
      <div className="flex flex-col items-center lg:flex-row lg:px-6">
        <div className="relative">
          <Image
            src={`${fourthSubBrandDetails?.imageUrl}`}
            alt="Good Media Co Logo"
            width={275}
            height={160}
            className=" w-48 h-24 lg:w-[275px] lg:h-[160px] object-contain"
            priority
          />
        </div>

        <div className="flex flex-1 justify-center mb-5">
          <p className="text-sm mt-8 text-gray-700 sm:text-base lg:w-[80%] lg:px-0 lg:mt-0 lg:text-lg">
            {/* Desktop/Tablet: show full text */}
            <span className="hidden sm:inline">{fourthSubBrandDetails?.descriptionText}</span>

            {/* Mobile: show toggle text */}
            <span className="inline sm:hidden">
              {isExpanded ? fourthSubBrandDetails?.descriptionText : collapsedText}
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="ml-1 text-blue-600 underline text-sm"
              >
                {isExpanded ? "Read Less" : "+Read More"}
              </button>
            </span>
          </p>
        </div>
      </div>

      {/* Sub-brand logos */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5 lg:gap-0 items-center justify-items-center px-4 mt-1">
        {fourthSubBrandDetails?.fourthSubBrandLogos.map((subBrand, index) => (
          <div
            key={index}
            onClick={() =>
              window.open(subBrand.url, "_blank", "noopener,noreferrer")
            }
            className="rounded flex items-center justify-center overflow-hidden"
          >
            <Image
              src={subBrand?.imageUrl}
              alt={`Fourth Sub-brand Logo ${index + 1}`}
              width={100}
              height={100}
              className="w-28 xl:w-40 h-20 xl:h-[70px] object-contain"
              priority
            />
          </div>
        ))}
      </div>

      {/* Community Programs Section */}
      <div className="flex flex-col py-5 lg:flex-row gap-y-6 mt-8 lg:gap-24 lg:px-10 items-stretch">
        {fourthSubBrandDetails?.communityProgramsData.map((program, index) => (
          <div
            key={index}
            className="flex-1 w-full flex flex-col rounded-t-lg bg-white overflow-hidden"
          >
            <div className={`relative`}>
              <Image
                src={
                  isMobileView
                    ? program.imageUrlMobile
                    : program.imageUrlDesktop
                }
                alt={program.title}
                width={768}
                height={312}
                className="w-full h-[235px] md:w-full md:h-[360px] lg:w-full lg:h-52 object-center rounded-lg"
              />
            </div>

            <div className="px-2 sm:px-0">
              <h3 className="text-xl lg:text-2xl font-bold my-6">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-lg">
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
