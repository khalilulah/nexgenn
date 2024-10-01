// import Image from "next/image";
import Link from "next/link";
import HomePageHero from "@/components/HomePageHero";
import GeneralOverview from "@/components/GeneralOverview";
import ServicesRendered from "@/components/ServicesRendered";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="font-clashDisplay m-auto max-w-[1345px]">
      <HomePageHero />
      <GeneralOverview/>
      <ServicesRendered/> 
      <Footer/>
      {/* <p className='text-[25px] font-sans font-extrabold'>Home page</p>
    <Link href='/client'><button className="bg-white font-sans text-gray-700 rounded-md px-2">
      Go To client Page
      </button> </Link> */}
    </div>
  );
}
