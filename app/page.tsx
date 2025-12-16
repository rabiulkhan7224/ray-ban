"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Lenis from 'lenis'
import StackedSections from "@/components/StackedSections";
const HomePage = () => {


  return (
  <div className="min-h-screen bg-[linear-gradient(66deg,_white,_#3e5464)]">
  {/* HEADER */}
  <header className="fixed top-0 left-0 w-full z-30">
    <nav className="flex items-center justify-between px-4 py-3 bg-transparent ">
      {/* logo */}
      <Image
        src="/meta-ray-ban.png"
        alt="Logo"
        width={120}
        height={100}
        className=" object-cover"
      />

      {/* menu button */}
      <Button className="menu-button bg-white/30 hover:bg-white/50">
        <MenuIcon />
      </Button>
    </nav>
  </header>

  <main className="">
    {/* HERO */}
    <section className="relative h-screen overflow-hidden">
      <video
        src="/Hero_XL.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay text */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-6 md:px-16 max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4">
            Meta Ray-Ban <br /> Display
          </h1>
          <p className="text-sm md:text-lg text-white">
            In-lens display. On-wrist control.
          </p>
        </div>
      </div>

      {/* fade into next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#3e5464]/70" />
    </section>

    {/* SECTION 1 */}
    {/* <section
      id=""
      className="relative min-h-screen flex items-center bg-[url('/Display_XL.avif')] bg-cover bg-center"
    >
      
      <div className="absolute inset-0 items-center " />

       <div className="absolute inset-1 inset-y-3  flex items-center">
        <div className="px-6 md:px-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-2">
            AI glasses, <br />now with display
          </h1>
          <p className="text-sm md:text-lg text-white">
            Interact with information in a new way with the full-color, high-resolution 600x600 pixel visual display, built into the right lens of the glasses.
          </p>
        </div>
      </div>
    </section> */}

     <StackedSections />
  </main>
</div>

  );
};

export default HomePage;
