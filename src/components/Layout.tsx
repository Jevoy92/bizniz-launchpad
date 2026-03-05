import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
    children: ReactNode;
}

const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Episodes", path: "/episodes" },
    { label: "Studio", path: "/studio" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
];

const Layout = ({ children }: LayoutProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* ───── NAVBAR ───── */}
            <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(26,18,11,0.92)", backdropFilter: "blur(16px)" }}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo-orange.png" alt="Logo" className="w-10 h-10 object-contain transition-transform group-hover:scale-110" />
                        <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Mind Your Bizniz</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm transition-colors ${location.pathname === link.path
                                        ? "text-white font-semibold"
                                        : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to="/contact" className="hidden md:inline-flex brand-btn-primary text-sm py-2 px-5">
                            Get in Touch <span className="brand-icon-circle w-6 h-6 text-xs"><ArrowUpRight size={14} /></span>
                        </Link>
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                            className="md:hidden px-6 pb-6 pt-2"
                            style={{ background: "rgba(26,18,11,0.98)" }}
                        >
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-3 border-b border-white/10 ${location.pathname === link.path
                                            ? "text-white font-semibold"
                                            : "text-white/80 hover:text-white"
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link to="/contact" className="brand-btn-primary mt-4 justify-center w-full text-sm py-3" onClick={() => setMobileMenuOpen(false)}>
                                Get in Touch <ArrowUpRight size={14} />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

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
                                { icon: "📷", href: "https://www.instagram.com/yourboyjevoy/" },
                                { icon: "🎬", href: "https://www.youtube.com/channel/UCIooy5oeRT1FFYSWr9KbneA" },
                                { icon: "🎁", href: "https://www.patreon.com/yourboyjevoy" },
                                { icon: "🌐", href: "https://www.jevoypalmer.com" },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[var(--brand-orange)] hover:text-white transition"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                        <p className="text-white/40 text-xs">hello@mindyourbizniz.co</p>
                        <p className="text-white/40 text-xs">Seattle, Washington</p>
                    </div>

                    {[
                        {
                            title: "Company", links: [
                                { label: "About Jevoy", path: "/about" },
                                { label: "Palmer House Productions", href: "https://www.palmerhouseproductions.com" },
                                { label: "Blog", path: "/blog" },
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
                                { label: "Spotify", href: "#", disabled: true },
                                { label: "Apple Podcasts", href: "#", disabled: true },
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
