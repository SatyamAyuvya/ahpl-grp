import Awards from "@/components/home_section/Awards";
import BusinessVerticals from "@/components/home_section/BusinessVerticals";
import ContactUs from "@/components/home_section/ContactUs";
import DoingGood from "@/components/home_section/DoingGood";
import HomeSection from "@/components/home_section/HomeSection";
import Investors from "@/components/home_section/Investors";
import Press from "@/components/home_section/Press";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection />
      <BusinessVerticals/>
      <Investors />
      <DoingGood />
      <Awards />
      <Press />
      <ContactUs />
    </div>
  );
}
