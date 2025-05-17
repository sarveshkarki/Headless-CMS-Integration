import { Button } from "@/components/ui/button";
import { Bolt, Phone } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bolt className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">ElectriPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="tel:+15551234567"
              className="hidden md:flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </Link>
            <Button>Get a Quote</Button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
