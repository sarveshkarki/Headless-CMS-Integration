import { Bolt, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer
        id="contact"
        className="w-full border-t bg-slate-900 text-white py-12"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Bolt className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold">ElectriPro</span>
              </div>
              <p className="text-slate-300">
                Professional electrical services for residential and commercial
                properties. Licensed, insured, and committed to quality.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-slate-300 hover:text-white">
                  Home
                </Link>
                <Link href="#about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
                <Link
                  href="#services"
                  className="text-slate-300 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="#testimonials"
                  className="text-slate-300 hover:text-white"
                >
                  Testimonials
                </Link>
                <Link
                  href="#contact"
                  className="text-slate-300 hover:text-white"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-slate-300 hover:text-white">
                  Electrical Repairs
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Lighting Installation
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Panel Upgrades
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Home Rewiring
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Safety Inspections
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <div className="flex flex-col space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  <span>123 Main Street, Anytown, USA 12345</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <Link href="tel:+15551234567" className="hover:text-white">
                    (555) 123-4567
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <Link
                    href="mailto:info@electripro.com"
                    className="hover:text-white"
                  >
                    info@electripro.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span>Mon-Fri: 7am-7pm, Sat: 8am-5pm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} ElectriPro. All rights reserved.
              Licensed and Insured.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
