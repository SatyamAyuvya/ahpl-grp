"use client";

import { investorsPageData } from "@/data/InvestorsPage/investorsPageContent";
import useIsMobileView from "@/hooks/useIsMobileView";
import Image from "next/image";

export default function Investors() {

  return (
    <div id="investors" className="min-h-fit w-full py-8 px-4 xl:py-6 xl:px-[190px] 2xlPlus:px-[300px]  bg-[#F7FFFE]">

      <div className="mt-7 lg:mt-20 lg:gap-2 flex flex-col lg:flex-row">

        <div className="flex flex-col lg:w-[29%] xl:p-2 2xlPlus:p-3">
          <p className="text-black font-semibold text-[33px] lg:text-[60px] lg:leading-none">
            {investorsPageData.title}
          </p>

          <p className="mt-1 lg:mt-4 text-base">
            {investorsPageData.description}
          </p>
        </div>

        <div className="flex flex-col lg:w-[71%]">
          <div className="grid grid-cols-3 justify-center items-center w-full h-fit gap-3 xl:gap-4 xl:p-6 xl:ms-10 xl:mb-16 mt-[50px] xl:mt-[0px]">
            {investorsPageData.images.map((img, index) => (
              <div
                key={index}
                className="border-[3px] border-[#E1F3EF] rounded-lg px-2 py-5 bg-white flex items-center justify-center h-[70px] xl:h-[100px]"
              >
                <Image
                  src={img.imageUrlDesktop }
                  width={150}
                  height={50}
                  alt={`Investor Logo ${index + 1}`}
                  className="w-auto h-fit object-contain"
                />
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
