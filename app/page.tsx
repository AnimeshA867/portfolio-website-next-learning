import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]container mx-auto ">
      <NavBar />
      <div className="px-12 py-4 lg:py-auto">
        <HeroSection />
        <About />
      </div>
    </main>
  );
}
