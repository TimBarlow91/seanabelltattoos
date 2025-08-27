import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/gallery", label: "Gallery" },
        { path: "/contact", label: "Contact" },
    ];

    // Close menu on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="bg-gradient-to-r from-black via-red-900 to-black shadow-[0_0_15px_rgba(255,0,0,0.7)] backdrop-blur-md">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                    {/* Desktop Links */}
                    <ul className="hidden md:flex justify-center gap-10 text-white text-lg md:text-xl w-full">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `transition duration-200 hover:text-red-500 ${isActive ? "underline underline-offset-4 text-red-500" : ""
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden relative z-50">
                        <button
                            ref={buttonRef}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Dropdown Menu */}
                        <div
                            ref={menuRef}
                            className={`absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-lg border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 flex flex-col space-y-1 transform transition-all duration-300 ease-in-out origin-top-right ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                                }`}
                        >
                            {navLinks.map((link, i) => (
                                <NavLink
                                    key={i}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-4 py-2 rounded-md transition-all duration-200 ${isActive ? "text-red-500 underline" : "text-white hover:text-red-500"
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
