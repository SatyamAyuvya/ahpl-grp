"use client";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="relative w-full h-[92vh] p-4 sm:p-8 flex items-center justify-center"
    >
      {/* Desktop Image */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="https://goodglamm.com/wp-content/uploads/2024/03/g3-banner-website-2048x1047.png"
          alt="Desktop Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <Image
          src="https://goodglamm.com/wp-content/uploads/2024/03/mob-banner-new-610x1024.jpg"
          alt="Mobile Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-black">Home Section</h2>
      </div>
    </div>
  );
}
