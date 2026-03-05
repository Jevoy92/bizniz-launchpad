import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X, Instagram, Youtube, Globe, Sun, Moon } from "lucide-react";
import { useState, useRef, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";

interface LayoutProps {
    children: ReactNode;
}

const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Episodes", path: "/episodes" },
    { label: "Studio", path: "/studio" },
    { label: "Contact", path: "/contact" },
];

const Layout = ({ children }: LayoutProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const location = useLocation();
    const { theme, setTheme } = useTheme();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest < 50) {
            setNavVisible(true);
        } else {
            setNavVisible(latest < previous);
        }
    });

    return (
        <>
            {/* ───── NAVBAR ───── */}
            <motion.nav
                className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
                style={{ x: "-50%" }}
                animate={{ y: navVisible ? 0 : -100, opacity: navVisible ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div
                    className="flex items-center justify-between h-14 px-4 md:px-5 rounded-full border"
                    style={{
                        background: "rgba(26,18,11,0.85)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        borderColor: "rgba(255,255,255,0.08)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                >
                    <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                        <img src="/logo-orange.png" alt="Logo" className="w-8 h-8 object-contain transition-transform group-hover:scale-110" />
                        <span className="text-white font-bold text-lg hidden sm:inline" style={{ fontFamily: "var(--font-heading)" }}>MYB</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 rounded-full px-1.5 py-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative text-sm px-4 py-1.5 rounded-full transition-all duration-300"
                                style={{
                                    color: location.pathname === link.path ? "white" : "rgba(255,255,255,0.6)",
                                    background: location.pathname === link.path ? "var(--brand-orange)" : "transparent",
                                    fontWeight: location.pathname === link.path ? 600 : 400,
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                        </button>
                        <Link to="/contact" className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium py-1.5 px-4 rounded-full text-white transition-all hover:scale-105" style={{ background: "var(--brand-orange)" }}>
                            Get in Touch <ArrowUpRight size={12} />
                        </Link>
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="md:hidden mt-2 rounded-2xl px-5 pb-5 pt-3 border"
                            style={{
                                background: "rgba(26,18,11,0.97)",
                                backdropFilter: "blur(20px)",
                                borderColor: "rgba(255,255,255,0.08)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                            }}
                        >
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block py-2.5 text-sm rounded-lg px-3 my-0.5 transition-all"
                                    style={{
                                        color: location.pathname === link.path ? "white" : "rgba(255,255,255,0.7)",
                                        background: location.pathname === link.path ? "var(--brand-orange)" : "transparent",
                                        fontWeight: location.pathname === link.path ? 600 : 400,
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link to="/contact" className="flex items-center justify-center gap-2 mt-3 w-full text-sm py-2.5 rounded-full text-white font-medium" style={{ background: "var(--brand-orange)" }} onClick={() => setMobileMenuOpen(false)}>
                                Get in Touch <ArrowUpRight size={14} />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* ───── PAGE CONTENT ───── */}
            <main>{children}</main>

            {/* ───── FOOTER ───── */}
            <footer style={{ background: "var(--brand-dark)", color: "white" }}>
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10">
                                <img src="/logo-orange.png" alt="Logo" className="w-7 h-7 object-contain" />
                            </div>
                            <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Mind Your Bizniz</span>
                        </div>
                        <p className="text-white/50 text-sm mb-4">Follow the journey</p>
                        <div className="flex gap-3 mb-4">
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/yourboyjevoy/" },
                                { icon: Youtube, href: "https://www.youtube.com/channel/UCIooy5oeRT1FFYSWr9KbneA" },
                                { icon: Globe, href: "https://www.jevoypalmer.com" },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[var(--brand-orange)] hover:text-white transition"
                                >
                                    <s.icon size={18} />
                                </a>
                            ))}
                        </div>
                        
                        <p className="text-white/40 text-xs">Seattle, Washington</p>
                    </div>

                    {[
                        {
                            title: "Company", links: [
                                { label: "About Jevoy", path: "/about" },
                                { label: "Palmer House Productions", href: "https://www.palmerhouseproductions.com" },
                                
                            ]
                        },
                        {
                            title: "Quick Links", links: [
                                { label: "Home", path: "/" },
                                { label: "Episodes", path: "/episodes" },
                                { label: "Studio Packages", path: "/studio" },
                            ]
                        },
                        {
                            title: "Useful Links", links: [
                                { label: "Contact", path: "/contact" },
                                { label: "Privacy Policy", path: "#" },
                                { label: "Terms & Conditions", path: "#" },
                            ]
                        },
                        {
                            title: "Listen on", links: [
                                { label: "YouTube", href: "https://www.youtube.com/channel/UCIooy5oeRT1FFYSWr9KbneA" },
                            ]
                        },
                    ].map((col) => (
                        <div key={col.title}>
                            <h4 className="font-bold mb-4 text-sm">{col.title}</h4>
                            <ul className="space-y-2 text-sm text-white/50">
                                {col.links.map((l: any) => (
                                    <li key={l.label}>
                                        {l.path ? (
                                            <Link to={l.path} className="hover:text-white transition">{l.label}</Link>
                                        ) : (
                                            <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{l.label}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-white/10 py-6 text-center text-white/30 text-xs">
                    © 2025 Mind Your Bizniz. A Jevoy Palmer Production. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Layout;
