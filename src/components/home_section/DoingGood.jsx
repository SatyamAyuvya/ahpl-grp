"use client";

import { doingGoodPageData, doingGoodSectionsData } from "@/data/doingGoodPage/doingGoodPageContent";
import useIsMobileView from "@/hooks/useIsMobileView";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function DoingGood() {
  const isMobileView = useIsMobileView();
  const scrollContainerRef = useRef(null);
  const scrollPositionsRef = useRef({});
  const [activeKey, setActiveKey] = useState(doingGoodSectionsData[0].key);
  const activeSection = doingGoodSectionsData.find((section) => section.key === activeKey);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const savedScrollLeft = scrollPositionsRef.current[activeKey] || 0;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: savedScrollLeft, behavior: "auto" });
    }
  }, [activeKey]);

  return (
    <div id="doing-good" className="min-h-fit w-full py-8 px-4 xl:px-[200px] 2xlPlus:px-[300px] bg-white">
      <div className="mt-1 lg:mt-20 flex flex-col lg:flex-row">
        {/* Left Section - Title and Description */}
        <div className="flex flex-col lg:w-[29%] xl:p-1 2xlPlus:px-7">
          <p className="text-black font-semibold text-[33px] lg:text-[60px] lg:leading-none">
            {doingGoodPageData.title}
          </p>
          <p className="mt-3 lg:mt-4 text-base break-words">
            {doingGoodPageData.description}
          </p>
        </div>

        {/* Right Section - Scrollable UI */}
        <div className="flex flex-col lg:w-[71%] mt-8 xl:mt-0 xl:ps-20 xl:p-2">
          {/* Top Buttons for Sections */}
          <div className="flex overflow-x-auto mt-1 xl:mt-0 gap-5 lg:gap-12 mb-4 scrollbar-none">
            {doingGoodSectionsData.map((section) => (
              <button
                key={section.key}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollPositionsRef.current[activeKey] = scrollContainerRef.current.scrollLeft;
                  }
                  setActiveKey(section.key);
                }}
                className={`min-w-fit py-3 px-4 text-sm lg:py-3 rounded-full transition-all duration-200 ${activeKey === section.key
                    ? "bg-black text-white font-extrabold lg:text-2xl"
                    : "text-gray-400 font-extrabold lg:text-2xl"
                  }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Horizontally Scrollable Content */}
          <div className="overflow-x-auto whitespace-nowrap scrollbar-none py-4 bg-white rounded">
            <div className="relative">
              {/* Left and Right Arrows - Only for Desktop */}
              {!isMobileView && (
                <div>
                  <button
                    onClick={scrollLeft}
                    className="absolute ml-3 left-0 top-1/2 -translate-y-1/2 z-10 bg-black shadow-md p-2 rounded-full"
                  >
                    <FaArrowLeftLong className="text-2xl text-white" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="absolute mr-3 right-0 top-1/2 -translate-y-1/2 z-10 bg-black shadow-md p-2 rounded-full"
                  >
                    <FaArrowRightLong className="text-2xl text-white" />
                  </button>
                </div>
              )}

              {/* Scrollable Cards Section */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto bg-white whitespace-nowrap scrollbar-none rounded"
              >
                <div className="flex gap-4 xl:gap-6 w-fit h-fit ms-1">
                  {activeSection.content.map((item, index) => (
                    <div key={index}>
                      {isMobileView ? (
                        // 🌐 Mobile UI Card
                        <div className="w-[255px] mx-auto">
                          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={item.imageUrl}
                              alt={item.buttonText}
                              width={400}
                              height={400}
                              className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-white p-2 m-2 rounded-xl">
                              <p className="text-black text-xs font-bold mb-2 break-words whitespace-normal line-clamp-3">
                                {item.description}
                              </p>
                              <div className="mt-auto pt-2">
                                <button
                                  onClick={() => window.open(item.buttonLink, "_blank")}
                                  className="px-4 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-full hover:bg-blue-700 transition flex items-center gap-2"
                                >
                                  {item.buttonText}
                                  <FaArrowRightLong className="text-white text-[10px]" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // 🖥️ Desktop UI Card
                        <div className="w-[400px] h-full bg-white rounded-lg border p-4 flex flex-col">
                          <div className="w-fit">
                            <Image
                              src={item.imageUrl}
                              alt={item.buttonText}
                              width={600}
                              height={600}
                              className="w-full h-auto object-cover rounded-lg"
                            />
                          </div>
                          <p className="mt-3 mb-4 text-black font-bold break-words whitespace-normal">
                            {item.description}
                          </p>
                          <div className="mt-auto flex items-center">
                            <button
                              onClick={() => window.open(item.buttonLink, "_blank")}
                              className="w-fit px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2"
                            >
                              {item.buttonText}
                              <FaArrowRightLong className="text-white text-sm" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
