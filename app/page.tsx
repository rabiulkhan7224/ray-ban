import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const HomePage = () => {
  return (
  <div className="min-h-screen bg-[linear-gradient(66deg,_white,_#3e5464)]">
  {/* HEADER */}
  <header className="fixed top-0 left-0 w-full z-30">
    <nav className="flex items-center justify-between px-4 py-3 backdrop-blur-sm bg-[linear-gradient(66deg,_white,_#3e5464)]/60">
      {/* logo */}
      <img
        src="/ray-ban.svg"
        alt="Logo"
        className="w-16 h-16"
      />

      {/* menu button */}
      <Button className="menu-button">
        <MenuIcon />
      </Button>
    </nav>
  </header>

  <main className="pt-16">
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
    <section
      id="section-1"
      className="relative min-h-screen flex items-center bg-[url('/Display_XL.avif')] bg-cover bg-center"
    >
      {/* overlay for readability */}
      <div className="absolute inset-0 " />

      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white px-6 md:px-16">
        Section 1 Content
      </h2>
    </section>
  </main>
</div>

  );
};

export default HomePage;
