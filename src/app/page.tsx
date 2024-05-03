import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { NavbarItems } from "@/components/Navbar/menuItems";

export default function Home() {
  return (
    <div>
      <Navbar items={NavbarItems} />
      <Hero />
    </div>
  );
}
