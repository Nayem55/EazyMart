import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
    <footer className="px-24 pt-10 bg-primary text-white">
     <div className="flex justify-between footer">
      <div className="flex flex-col">
        <span className="footer-title">Services</span>
        <Link href="" className="hover:text-accent">Branding</Link>
        <Link href="" className="hover:text-accent">Design</Link>
        <Link href="" className="hover:text-accent">Marketing</Link>
        <Link href="" className="hover:text-accent">Advertisement</Link>
      </div>
      <div className="flex flex-col">
        <span className="footer-title">Company</span>
        <Link href="" className="hover:text-accent">About us</Link>
        <Link href="" className="hover:text-accent">Contact</Link>
        <Link href="" className="hover:text-accent">Jobs</Link>
        <Link href="" className="hover:text-accent">Press kit</Link>
      </div>
      <div className="flex flex-col">
        <span className="footer-title">Legal</span>
        <Link href="" className="hover:text-accent">Terms of use</Link>
        <Link href="" className="hover:text-accent">Privacy policy</Link>
        <Link href="" className="hover:text-accent">Cookie policy</Link>
      </div>
     </div>
      <div className="text-center pt-16 lg:p-16 mb-12 lg:mb-0">
        <p>Copyright © 2023 - All right reserved by eazymart Industries Ltd</p>
      </div>
    </footer>
  </div>

  );
};

export default Footer;
