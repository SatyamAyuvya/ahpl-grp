"use client";

import { useState } from "react";
import Image from "next/image";

export default function ThirdSubBrandSection() {
    const [showMore, setShowMore] = useState(false);

    const fullText =
        "Good Creator Co is one of Asia’s largest tech-enabled influencer platforms with over 1.5 million creators and influencers providing content creation, deep data analytics, offline events, brand endorsements, networking and entertainment industry opportunities to influencers at scale.";

    const truncateByWords = (text, wordCount) => {
        const words = text.split(" ");
        const truncated = words.slice(0, wordCount).join(" ");
        if (words.length <= wordCount) return truncated;
        const lastChar = truncated.trim().slice(-1);
        return lastChar === "." ? truncated + ".." : truncated + "...";
    };

    const shortText = truncateByWords(fullText, 25);

    const thirdSubBrandLogos = [
        {
            img: "https://goodglamm.com/wp-content/uploads/2023/06/good-creator-logo-2.png",
            url: "https://www.scoopwhoop.com/",
        },
        {
            img: "https://goodglamm.com/wp-content/uploads/2023/06/vidooly2x.png",
            url: "https://www.missmalini.com/",
        },
        {
            img: "https://goodglamm.com/wp-content/uploads/2023/06/miss-malini.png",
            url: "https://www.missmalini.com/",
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <div className="flex flex-col items-center lg:flex-row lg:px-6 lg:py-0">
                <div className="relative w-80 h-28 lg:w-[275px] lg:h-[160px]">
                    <Image
                        src="https://goodglamm.com/wp-content/uploads/2023/06/good-creator-logo-1.png"
                        alt="Good Creator Co"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-1 justify-center mb-5">
                    <p className="text-sm mt-8 text-gray-700 sm:text-base lg:w-[80%] lg:px-0 lg:mt-0 lg:text-lg">
                        <span className="hidden sm:inline">{fullText}</span>
                        <span className="inline sm:hidden">
                            {showMore ? fullText : shortText}
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

            {/* Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 items-center justify-items-center px-4 mt-1">
                {thirdSubBrandLogos.map((logo, index) => {
                    const baseClasses = "relative cursor-pointer object-contain";
                    const sizeClasses = "w-28 h-12 sm:w-32 sm:h-14 lg:w-28 lg:h-20";

                    let gridSpanClass = "";

                    if (index === 0) {
                        // Mobile: full width (2 columns), Desktop: start from column 2
                        gridSpanClass = "col-span-2 justify-self-center sm:col-span-2 lg:col-span-1 lg:col-start-2";
                    } else {
                        gridSpanClass = "col-span-1";
                    }

                    return (
                        <div
                            key={index}
                            onClick={() => window.open(logo.url, "_blank", "noopener,noreferrer")}
                            className={`${sizeClasses} ${gridSpanClass} ${baseClasses}`}
                        >
                            <Image
                                src={logo.img}
                                alt={`Sub-brand logo ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
