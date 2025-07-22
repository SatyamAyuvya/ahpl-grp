"use client";

import { useState } from "react";
import Image from "next/image";

export default function FourthSubBrandSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const description =
        "The Good Communities is one of the first and most unique initiatives by a beauty company to build large deep interest communities. These centre around inclusive beauty, positive parenting & sexuality, and holistic living. A proprietary tech stack, omni-channel touch-points and a strategic partnership with Meta power the Communities.";

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        const truncated = words.slice(0, wordLimit).join(" ");
        const lastChar = truncated.trim().slice(-1);
        return lastChar === "." ? truncated + ".." : truncated + "...";
    };

    const collapsedText = truncateText(description, 25);

    const fourthSubBrandLogos = [
        {
            img: "https://goodglamm.com/wp-content/uploads/2023/06/GLAMMFAM_Logo-1.png",
            url: "https://www.myglamm.com/community/feed",
        },
        {
            img: "https://goodglamm.com/wp-content/uploads/2023/06/MOMSTAR_Badge-Logo-1.png",
            url: "https://www.babychakra.com/community/feed",
        },
        {
            img: "https://goodglamm.com/wp-content/uploads/2023/06/Organic-Harvest_Logo-1.png",
            url: "https://www.organicharvest.in/community/feed",
        },
        {
            img: "https://goodglamm.com/wp-content/uploads/2023/06/Sirona-Circle_Logo-1.png",
            url: "https://thesirona.com/community/feed",
        },
    ];

    const communityProgramsData = [
        {
            imageUrl: "https://goodglamm.com/wp-content/uploads/2024/02/desktop_landing_bg-1-768x312.png",
            title: "The Mompreneur Program",
            description:
                "One of Asia's Largest Platforms to support and accelerate Mom Micro-Entrepreneurs. Created by The Moms Co. and backed by the Government of India's, Startup India initiative along with global companies like WhatsApp among others.",
        },
        {
            imageUrl: "https://goodglamm.com/wp-content/uploads/2024/02/homepage-wireframe-Dec2-2023-1-768x313.png",
            title: "Sirona Foundation",
            description:
                "On a mission to end period poverty in India & support every vulva owner's access to sustainable menstrual care. Harnessing data backed & impact oriented interventions to reach 1 million lives.",
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Logo + Description */}
            <div className="flex flex-col items-center lg:flex-row lg:px-6">
                <div className="relative w-80 h-28 lg:w-[275px] lg:h-[160px]">
                    <Image
                        src="https://goodglamm.com/wp-content/uploads/2023/06/the-Good-Community_Logo-1.png"
                        alt="Good Media Co Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-1 justify-center mb-5">
                    <p className="text-sm mt-8 text-gray-700 sm:text-base lg:w-[80%] lg:px-0 lg:mt-0 lg:text-lg">
                        {/* Desktop/Tablet: show full text */}
                        <span className="hidden sm:inline">{description}</span>

                        {/* Mobile: show toggle text */}
                        <span className="inline sm:hidden">
                            {isExpanded ? description : collapsedText}
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
                {fourthSubBrandLogos.map((brand, index) => (
                    <div
                        key={index}
                        onClick={() => window.open(brand.url, "_blank", "noopener,noreferrer")}
                        className="relative w-24 h-10 sm:w-32 sm:h-12 lg:w-28 lg:h-20 cursor-pointer"
                    >
                        <Image
                            src={brand.img}
                            alt={`Fourth Sub-brand Logo ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Community Programs Section */}
            <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-32 px-4 mt-10 items-stretch">
  {communityProgramsData.map((program, index) => (
    <div
      key={index}
      className="flex-1 flex flex-col bg-white rounded-lg overflow-hidden"
    >
      <div className="relative w-full h-60 mb-4">
        <Image
          src={program.imageUrl}
          alt={program.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="px-2 sm:px-0">
        <h3 className="text-xl font-bold my-2">{program.title}</h3>
        <p className="text-gray-600 text-[17px]">{program.description}</p>
      </div>
    </div>
  ))}
</div>


        </div>
    );
}
