import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center flex-grow relative bg-gradient-to-b from-black via-red-950 to-black pt-28">
                <div className="absolute inset-0 opacity-10 bg-[url('/tattoo-pattern.png')] bg-cover bg-center"></div>

                {/* Logo with 3D pop */}
                <motion.img
                    src="/logo.png"
                    alt="Sean Abell Tattoos Logo"
                    className="w-60 h-60 md:w-80 md:h-80 relative z-10 mb-0" // moved very close
                    style={{
                        filter: "drop-shadow(0 0 15px rgba(0,0,0,0.7)) drop-shadow(0 0 10px rgba(255,0,0,0.6))"
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: [0.95, 1.05, 1] }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        loop: Infinity,
                        repeatType: "mirror"
                    }}
                />

                {/* Curved Business Name with pulsing shadow */}
                <motion.svg
                    className="w-full h-36 md:h-48 relative z-10 -mt-14"
                    viewBox="0 0 500 150"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <defs>
                        <path
                            id="curve"
                            d="M 50 60 Q 250 160 450 60" // more pronounced smile
                            fill="transparent"
                        />
                    </defs>
                    <motion.text
                        fill="#FFD700" // gold color
                        fontFamily="Splash"
                        fontSize="46"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                            textShadow: `
                                4px 4px 10px rgba(255,0,0,0.85),
                                -4px -4px 10px rgba(0,0,0,0.95)
                            `
                        }}
                        animate={{
                            scale: [1, 1.03, 1], // subtle pop
                            textShadow: [
                                "4px 4px 10px rgba(255,0,0,0.85), -4px -4px 10px rgba(0,0,0,0.95)",
                                "6px 6px 14px rgba(255,0,0,0.9), -6px -6px 14px rgba(0,0,0,1)",
                                "4px 4px 10px rgba(255,0,0,0.85), -4px -4px 10px rgba(0,0,0,0.95)"
                            ]
                        }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    >
                        <textPath href="#curve" startOffset="50%">
                            Sean Abell Tattoos
                        </textPath>
                    </motion.text>
                </motion.svg>
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