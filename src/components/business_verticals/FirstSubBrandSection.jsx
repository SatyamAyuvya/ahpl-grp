"use client";

import { useState } from "react";
import Image from "next/image";
import { firstSubBrandProductsDetails } from "@/data/firstSubBrandData";

export default function FirstSubBrandSection() {
    const [showMore, setShowMore] = useState(false);

    const fullText =
        "A portfolio of market leading DTC Beauty & Personal Care brands across make-up, skincare, mom and baby products, haircare and intimate hygiene. Each of our Brands are committed to not just inclusive beauty, responsible, effective and clean care but also to help each of our communities meet their individual aspirations through our Brands and supported by our Content, Creator and Community arms.";

    // 👇 Word count-based truncate (e.g., first 25 words)
    const truncateByWords = (text, wordCount) => {
        const words = text.split(" ");
        const truncated = words.slice(0, wordCount).join(" ");
        if (words.length <= wordCount) return truncated;
        const lastChar = truncated.trim().slice(-1);
        return lastChar === "." ? truncated + ".." : truncated + "...";
    };

    const shortText = truncateByWords(fullText, 22);

    return (
        <div className="flex flex-col">
            {/* Header */}
            <div className="flex flex-col items-center py-4 lg:flex-row lg:px-6 lg:py-0">
                <div className="relative w-80 h-28 lg:w-[275px] lg:h-[160px]">
                    <Image
                        src="https://goodglamm.com/wp-content/uploads/2023/06/good-brands-logo.png"
                        alt="Business Verticals"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-1 justify-center mb-5">
                    <p className="text-sm mt-8 text-gray-700 sm:text-base lg:w-[80%] lg:px-0 lg:mt-0 lg:text-lg">
                        {/* ✅ Desktop and Tablet: always show full */}
                        <span className="hidden sm:inline">{fullText}</span>

                        {/* ✅ Mobile: show short or full based on toggle */}
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

            {/* ✅ Sub-Brand Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mt-14 gap-5 items-stretch">
                {firstSubBrandProductsDetails.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col h-full bg-white rounded-lg overflow-hidden"
                    >
                        <div className="relative w-full h-60 mb-4">
                            <Image
                                src={item.productImage}
                                alt="Product"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <div className="w-32 h-8 lg:w-52 lg:h-10 my-2 flex items-center">
                            <Image
                                src={item.subBrandImage}
                                alt="Sub-brand"
                                width={180}
                                height={30}
                                className="object-contain"
                            />
                        </div>

                        <p className="text-[17px] text-gray-600 my-4">{item.shortDescription}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
