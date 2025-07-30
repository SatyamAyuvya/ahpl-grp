"use client";

import { awardsPageData } from "@/data/awardsPage/awardsPageContent";
import useIsMobileView from "@/hooks/useIsMobileView";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Awards() {
  const isMobileView = useIsMobileView();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div id="awards" className="min-h-fit w-full py-8 px-4 xl:px-[200px] 2xlPlus:px-[300px] bg-white">
      <div className="mt-1 lg:mt-20 flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="flex flex-col lg:w-[29%] xl:p-1">
          <p className="text-black font-semibold text-[30px] lg:text-[60px] lg:leading-none">
            {awardsPageData.title}
          </p>
          {/* <p className="mt-3 lg:mt-4 text-base break-words">
            {awardsPageData.description}
          </p> */}
        </div>

        {/* Right Column */}
        <div className="flex flex-col lg:w-[71%] xl:ps-20">
          {/* Scrollable Content */}
          <div className="overflow-x-auto whitespace-nowrap flex w-full scrollbar-none py-[1px] ">
            <div className="relative w-full">
              {/* Scroll Buttons - only visible on Desktop */}
              {!isMobileView && (
                <>
                  <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black shadow p-3 rounded-full ml-2"
                  >
                    <FaArrowLeftLong className="text-2xl text-white" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black shadow p-3 rounded-full mr-2"
                  >
                    <FaArrowRightLong className="text-2xl text-white" />
                  </button>
                </>
              )}

              {/* Scrollable Cards */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto bg-white whitespace-nowrap scrollbar-none"
              >
                <div className="inline-flex flex-row h-fit gap-4 xl:gap-6 px-1 py-1 ">
                  {awardsPageData.content.map((item, index) => (
                    <div
                      key={index}
                      className="w-fit h-[440px] xl:h-[640px] flex  flex-col bg-white border rounded-lg p-4 "
                    >
                      <div className="w-[255px] lg:w-[380px] xl:w-[400px] aspect-square relative rounded-lg overflow-hidden shadow">
                        <Image
                          src={item.imageUrl}
                          alt={item.buttonText}
                          width={400}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      <p className="mt-3 mb-4 text-black font-bold text-sm xl:text-xl break-words whitespace-normal line-clamp-3">
                        {item.description}
                      </p>

                      <div className="mt-auto pt-5 w-fit">
                        <button
                          onClick={() => {
                            if (item?.buttonLink?.trim()) {
                              window.open(item.buttonLink, "_blank");
                            }
                          }}
                          className="px-5 py-2 bg-blue-600 text-white text-[9px] xl:text-sm font-bold rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2"
                        >
                          {item.buttonText}
                          <FaArrowRightLong className="text-white text-[10px] xl:text-sm" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> {/* Row End */}
    </div>
  );
}
