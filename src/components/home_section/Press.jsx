"use client";

import { inThePressPageData } from "@/data/inThePressPage/inThePressPageContent";
import useIsMobileView from "@/hooks/useIsMobileView";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function InThePress() {
  const isMobileView = useIsMobileView();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div id="press" className="min-h-fit w-full py-8 px-4 xl:px-[200px] 2xlPlus:px-[300px] bg-white">
      <div className="mt-1 lg:mt-20 flex flex-col lg:flex-row">
        {/* Left Column - Heading */}
        <div className="flex flex-col lg:w-[29%] xl:p-6">
          <p className="text-black font-semibold text-[30px] lg:text-[60px] lg:leading-none">
            {inThePressPageData.title}
          </p>
          {/* <p className="mt-3 lg:mt-4 text-base break-words">
            {inThePressPageData.description}
          </p> */}
        </div>

        {/* Right Column - Scrollable Cards */}
        <div className="flex flex-col lg:w-[71%] xl:ps-20">
          <div className="overflow-x-auto whitespace-nowrap flex w-full scrollbar-none py-[1px]">
            <div className="relative w-full">
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

              <div
                ref={scrollContainerRef}
                className="overflow-x-auto bg-white whitespace-nowrap scrollbar-none"
              >
                <div className="inline-flex flex-row h-fit gap-4 xl:gap-6 px-1 py-1">
                  {inThePressPageData.articles.map((pressItem, index) => (
                    <div
                      key={index}
                      className="w-fit h-[480px] xl:h-[740px] flex flex-col bg-white border rounded-lg p-4"
                    >
                      <div className="w-[255px] lg:w-[380px] xl:w-[400px] aspect-square relative rounded-lg overflow-hidden shadow">
                        <Image
                          src={pressItem.imageUrl}
                          alt={pressItem.buttonText}
                          width={400}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      <p className="mt-3 text-black font-extrabold text-sm xl:text-xl break-words leading-none whitespace-normal">
                        {pressItem.title}
                      </p>

                      <p className="mt-3 text-black font-normal text-xs xl:text-base break-words whitespace-normal line-clamp-5">
                        {pressItem.description}
                      </p>

                      <div className="mt-auto xl:pt-5 w-fit">
                        <button
                          onClick={() => {
                            if (pressItem?.buttonLink?.trim()) {
                              window.open(pressItem.buttonLink, "_blank");
                            }
                          }}
                          className="px-5 py-2 bg-blue-600 text-white text-[9px] xl:text-sm font-bold rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2"
                        >
                          {pressItem.buttonText}
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
