import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center flex-grow relative bg-gradient-to-b from-black via-red-950 to-black">
                <div className="absolute inset-0 opacity-10 bg-[url('/tattoo-pattern.png')] bg-cover bg-center"></div>

                <motion.img
                    src="/logo.png"
                    alt="Sean Abell Tattoos Logo"
                    className="w-40 h-40 mb-6 relative z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1
                    className="text-4xl md:text-6xl font-bold relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Sean Abell Tattoos
                </motion.h1>
            </section>

            {/* Quick Intro */}
            <section className="py-16 text-center bg-black">
                <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                    Custom tattoos by Sean Abell — where your story becomes art.
                </p>
                <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-black text-center px-4 sm:px-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Start Your Next Piece?
                </h2>
                <div className="flex gap-6 justify-center flex-wrap">
                    <Link
                        to="/contact"
                        className="px-6 py-3 rounded-2xl bg-red-600 shadow-lg transition transform hover:scale-105 hover:shadow-red-500/50"
                    >
                        Book Now
                    </Link>
                    <Link
                        to="/gallery"
                        className="px-6 py-3 rounded-2xl border border-red-600 hover:bg-red-600 transition"
                    >
                        View Gallery
                    </Link>
                </div>
            </section>
        </div>
    );
}