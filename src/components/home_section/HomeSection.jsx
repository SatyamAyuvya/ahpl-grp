"use client";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div
      id="home"
      className={`
        relative w-full
        h-[99vh] lg:h-[90.7vh] 2xl:h-[100vh]
        p-4 sm:p-8
        flex items-center justify-center
      `}
    >
      {/* 🔽 Desktop Banner Image */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="https://goodglamm.com/wp-content/uploads/2024/03/g3-banner-website-2048x1047.png"
          alt="Desktop Banner"
          width={2048}
          height={1047}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* 🔽 Mobile Banner Image */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <Image
          src="https://goodglamm.com/wp-content/uploads/2024/03/mob-banner-new-610x1024.jpg"
          alt="Mobile Banner"
          width={610}
          height={1024}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
