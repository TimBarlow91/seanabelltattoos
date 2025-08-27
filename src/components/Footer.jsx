import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-black via-red-900 to-black text-gray-300 pt-12 pb-6 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
                {/* Quick Links */}
                <div className="flex flex-col gap-2 text-sm md:text-base">
                    <Link to="/" className="hover:text-white transition">Home</Link>
                    <Link to="/about" className="hover:text-white transition">About</Link>
                    <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
                    <Link to="/contact" className="hover:text-white transition">Contact</Link>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <p className="text-sm text-gray-400">Connect with us:</p>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="group relative hover:text-white transition">
                            <FaFacebookF className="text-gray-300" />
                        </a>
                        <a href="#" className="group relative hover:text-white transition">
                            <FaInstagram className="text-gray-300" />
                        </a>
                        <a href="#" className="group relative hover:text-green-400 transition">
                            <FaWhatsapp className="text-gray-300" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-red-800 my-6 mx-auto w-full max-w-6xl" />

            <div className="text-xs text-gray-500 text-center">
                © 2025 Dark Fire Software Solutions. All rights reserved. - Developed by Tim Barlow
            </div>
        </footer>
    );
}