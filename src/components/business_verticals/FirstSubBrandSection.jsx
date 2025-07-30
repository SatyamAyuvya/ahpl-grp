"use client";

import { useState } from "react";
import Image from "next/image";
import { firstSubBrandDetails, firstSubBrandProductsDetails } from "@/data/businessVerticalsPage/businessVerticalsPageContent";
import useIsMobileView from "@/hooks/useIsMobileView";

export default function FirstSubBrandSection() {
  const [showMore, setShowMore] = useState(false);
  const isMobileView = useIsMobileView();

  const truncateByWords = (text, wordCount) => {
    const words = text.split(" ");
    const truncated = words.slice(0, wordCount).join(" ");
    if (words.length <= wordCount) return truncated;
    const lastChar = truncated.trim().slice(-1);
    return lastChar === "." ? truncated + ".." : truncated + "...";
  };

  const shortText = truncateByWords(firstSubBrandDetails?.descriptionText, 22);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center lg:gap-5 py-4 lg:flex-row lg:px-6 lg:py-0">
        <div className="relative ">
          <Image
            src={firstSubBrandDetails?.imageUrl}
            alt=""
            width={300}
            height={190}
            className="w-48 h-24 lg:w-[300px] lg:h-[190px] object-contain"
            priority
          />
        </div>

        <div className="flex flex-1 justify-center">
          <p className="text-sm mt-8 text-gray-700 sm:text-base lg:w-[83%] lg:px-0 lg:mt-0 lg:text-lg">
            {/* ✅ Desktop and Tablet: always show full */}
            <span className="hidden sm:inline">
              {firstSubBrandDetails?.descriptionText}
            </span>

            {/* ✅ Mobile: show short or full based on toggle */}
            <span className="inline sm:hidden">
              {showMore ? firstSubBrandDetails?.descriptionText : shortText}
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

      {/* ✅ Sub-Brand Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mt-14 lg:px-10 gap-5 items-stretch">
        {firstSubBrandProductsDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full bg-white rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-60 mb-4">
              <Image
                src={
                  isMobileView
                    ? item.productImageMobile
                    : item.productImageDesktop
                }
                alt="Product"
                width={500}
                height={240}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="w-32 h-8 lg:w-40 lg:h-10 my-2 flex items-center">
              <Image
                src={
                  isMobileView
                    ? item.subBrandImageMobile
                    : item.subBrandImageDesktop
                }
                alt="Sub-brand"
                width={180}
                height={30}
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm lg:text-[17px] text-gray-600 my-4">
              {item.shortDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
