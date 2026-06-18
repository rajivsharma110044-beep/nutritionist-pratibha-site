import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews"; // <-- Import the Reviews section
import ContactSection from "@/components/ContactSection"; 

export default function Home() {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <Reviews /> {/* <-- Place it here */}
      <ContactSection />
    </main>
  );
}