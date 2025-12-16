import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* header */}
      <header>
        <nav
          className="flex items-center w-full bg-transparent fixed top-0 
        justify-between p-4 z-30
        "
        >
          {/* logo */}
          <div className="">
            <img
              src="/ray-ban.svg"
              alt="Logo"
              className="bg-blend-color"
              width={50}
              height={50}
            />
          </div>
          {/* menu button */}
          <Button className="menu-button">
            <MenuIcon />
          </Button>
        </nav>
      </header>

      <main>
        <section className="hero-section ">
          {/* video container */}
          <div className="video-container relative w-full h-full bg-black/90 ">
            <video
              src="/Hero_XL.mp4"
              autoPlay
              loop
              muted
              className="video-element"
            />
            {/* overlay text */}
            <div className="overlay-text absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-left">
              <h1 className="text-7xl font-semibold text-white mb-4">
                Meta Ray-Ban <br />
                Display
              </h1>
              <p className="text-lg text-white mb-8">
                In-lens display. On-wrist control.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
