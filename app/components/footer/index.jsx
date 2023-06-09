import React from "react";
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white footer bottom-0
    mb-0 static w-full
    "
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Product</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-300 hover:text-white">About</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white">Services</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-white">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <p className="text-gray-300">123 Street, City</p>
            <p className="text-gray-300">Country</p>
            <p className="text-gray-300">Phone: 123-456-7890</p>
            <p className="text-gray-300">Email: info@example.com</p>
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-300">
              Follow us on social media for updates and news:
            </p>
            <div className="flex space-x-4 mt-4">
              <BsLinkedin size={28} />
              <BsTwitter size={28} />
              <BsInstagram size={28} />
            </div>
          </div>
        </div>
        <hr className="border-neutral-800 opacity-90 my-8" />
        <div className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} Hostville. All rights reserved. -
          Built by Mukul Chugh and Bhavna Singh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
