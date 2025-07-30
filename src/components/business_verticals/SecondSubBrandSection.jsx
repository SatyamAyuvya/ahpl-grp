"use client";

import { useState } from "react";
import Image from "next/image";
import { secondSubBrandDetails } from "@/data/businessVerticalsPage/businessVerticalsPageContent";

export default function SecondSubBrandSection() {
    const [showMore, setShowMore] = useState(false);

    const truncateByWords = (text, wordCount) => {
        const words = text.split(" ");
        const truncated = words.slice(0, wordCount).join(" ");
        if (words.length <= wordCount) return truncated;
        const lastChar = truncated.trim().slice(-1);
        return lastChar === "." ? truncated + ".." : truncated + "...";
    };

    const shortText = truncateByWords(secondSubBrandDetails?.descriptionText, 25);

    return (
        <div className="flex flex-col">
            {/* Header */}
            <div className="flex flex-col items-center lg:flex-row lg:px-6 lg:py-0">
                <div className="relative ">
                    <Image
                        src={secondSubBrandDetails?.imageUrl}
                        alt="Business Verticals"
                        width={275}
                        height={160}
                        className="w-48 h-24 lg:w-[275px] lg:h-[160px] object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-1 justify-center mb-5">
                    <p className="text-sm mt-8 text-gray-700 sm:text-base lg:w-[80%] lg:px-0 lg:mt-0 lg:text-lg">
                        {/* ✅ Desktop and Tablet: always show full */}
                        <span className="hidden sm:inline">{secondSubBrandDetails?.descriptionText}</span>

                        {/* ✅ Mobile: show short or full based on toggle */}
                        <span className="inline sm:hidden">
                            {showMore ? secondSubBrandDetails?.descriptionText : shortText}
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-4 lg:gap-0 items-center justify-items-center px-4 mt-1">
                {secondSubBrandDetails?.subBrandLogos.map((logo, index) => (
                    <div
                        key={index}
                        onClick={() => window.open(logo.url, "_blank", "noopener,noreferrer")}
                        className="relative cursor-pointer flex justify-center "
                    >
                        <Image
                            src={logo.img}
                            alt={`Sub-brand logo ${index + 1}`}
                            width={112}
                            height={80}
                            className="w-28 h-10 lg:w-28 lg:h-20 object-contain"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}
