"use client";

import BrandSectionDivider from "../business_verticals/BrandSectionDivider";
import FirstSubBrandSection from "../business_verticals/FirstSubBrandSection";
import FourthSubBrandSection from "../business_verticals/FourthSubBrandSection";
import SecondSubBrandSection from "../business_verticals/SecondSubBrandSection";
import ThirdSubBrandSection from "../business_verticals/ThirdSubBrandSection";

export default function BusinessVerticals() {
  return (
    <div
      id="business-verticals"
      className={`
        min-h-screen
        w-full 
        px-5
        sm:px-6
        md:px-8
        xl:px-36
        2xl:px-[165px]
        2xlPlus:px-[360px]

        pt-10
        pb-5
        lg:pt-[68px]
        lg:pb-[55px]
      `}
    >
      <FirstSubBrandSection />
      <BrandSectionDivider />

      <SecondSubBrandSection />
      <BrandSectionDivider />

      <ThirdSubBrandSection />
      <BrandSectionDivider />

      <FourthSubBrandSection />
      
    </div>
  );
}
