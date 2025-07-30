"use client";
import { HomeSectionPageData } from "@/data/homePage/homePageContent";
import useIsMobileView from "@/hooks/useIsMobileView";
import Image from "next/image";


export default function HomeSection() {
  const isMobileView = useIsMobileView();

  const bannerImage = isMobileView
    ? HomeSectionPageData?.imageUrlMobile
    : HomeSectionPageData?.imageUrlDesktop;

  return (
    <div
      id="home"
      className={`
        relative w-full
        h-[99vh] md:h-[89vh] lg:h-[90vh] 2xl:h-[100vh]
        p-4 sm:p-8
        flex items-center justify-center bg-pink-200
      `}
    >
      {/* 🔽 Single responsive image container */}
      <div className={`absolute inset-0 z-0`}>
        <Image
          src={bannerImage}
          alt="Banner"
          width={2048}
          height={1047}
          className={`w-fit xl:w-full h-full ${isMobileView ? "mx-auto" : ""} object:contain lg:object-cover`}
          priority
        />
      </div>
    </div>
  );
}
