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
        px-4
        sm:px-6
        md:px-8
        lg:px-24
        xl:px-32
        2xl:px-[360px]

        py-10
        lg:py-[68px]
      `}
    >
      <FirstSubBrandSection />
      <BrandSectionDivider />

      <SecondSubBrandSection />
      <BrandSectionDivider />

      <ThirdSubBrandSection />
      <BrandSectionDivider />

      <FourthSubBrandSection />
      <BrandSectionDivider />


      
    </div>
  );
}
