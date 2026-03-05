import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Globe, Send, Instagram, Youtube, Palette, Video, Gift } from "lucide-react";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
    }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const SOCIALS = [
    { label: "Instagram", handle: "@yourboyjevoy", href: "https://www.instagram.com/yourboyjevoy/", icon: Instagram },
    { label: "YouTube", handle: "Mind Your Bizniz", href: "https://www.youtube.com/channel/UCIooy5oeRT1FFYSWr9KbneA", icon: Youtube },
    { label: "Patreon", handle: "yourboyjevoy", href: "https://www.patreon.com/yourboyjevoy", icon: Gift },
    { label: "Website", handle: "jevoypalmer.com", href: "https://www.jevoypalmer.com", icon: Globe },
    { label: "Palmer House", handle: "palmerhouseproductions.com", href: "https://www.palmerhouseproductions.com", icon: Video },
    { label: "YourBoyJevoy", handle: "yourboyjevoy.com", href: "https://www.yourboyjevoy.com", icon: Palette },
];

const SERVICE_OPTIONS = [
    "General Inquiry",
    "Guest on the Podcast",
    "Studio Booking — Space Only",
    "Studio Booking — Production Partner",
    "Studio Booking — Full Service",
    "Business Collaboration",
    "Other",
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, show a simple alert; can be connected to a backend later
        alert(`Thanks ${formData.name}! We'll be in touch soon.`);
        setFormData({ name: "", email: "", service: "", message: "" });
    };

    return (
        <>
            {/* ───── HERO ───── */}
            <section className="relative pt-28 pb-16 md:pt-40 md:pb-20" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.p variants={fadeUp} custom={0} initial="hidden" animate="visible" className="text-sm font-medium mb-4" style={{ color: "var(--brand-orange)" }}>
                        LET&apos;S CONNECT
                    </motion.p>
                    <motion.h1
                        variants={fadeUp} custom={1} initial="hidden" animate="visible"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Get in <span className="brand-underline">Touch</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible" className="mt-4 text-base md:text-lg max-w-2xl" style={{ color: "var(--brand-text-gray)" }}>
                        Whether you want to be a guest on the show, book a studio session, or just say what&apos;s up — I&apos;d love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* ───── FORM + INFO ───── */}
            <section className="py-16 md:py-24" style={{ background: "var(--brand-bg)" }}>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-bold mb-6" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>
                            Send a Message
                        </motion.h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <motion.div variants={fadeUp} custom={1}>
                                <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-dark)" }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl text-sm border focus:outline-none focus:border-[var(--brand-orange)] transition"
                                    style={{ borderColor: "var(--brand-border-light)", background: "white" }}
                                    placeholder="Your name"
                                />
                            </motion.div>
                            <motion.div variants={fadeUp} custom={2}>
                                <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-dark)" }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl text-sm border focus:outline-none focus:border-[var(--brand-orange)] transition"
                                    style={{ borderColor: "var(--brand-border-light)", background: "white" }}
                                    placeholder="you@example.com"
                                />
                            </motion.div>
                            <motion.div variants={fadeUp} custom={3}>
                                <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-dark)" }}>What are you interested in?</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl text-sm border focus:outline-none focus:border-[var(--brand-orange)] transition appearance-none"
                                    style={{ borderColor: "var(--brand-border-light)", background: "white", color: formData.service ? "var(--brand-text-dark)" : "var(--brand-text-gray)" }}
                                >
                                    <option value="">Select an option</option>
                                    {SERVICE_OPTIONS.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </motion.div>
                            <motion.div variants={fadeUp} custom={4}>
                                <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-dark)" }}>Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-5 py-3 rounded-xl text-sm border focus:outline-none focus:border-[var(--brand-orange)] transition resize-none"
                                    style={{ borderColor: "var(--brand-border-light)", background: "white" }}
                                    placeholder="Tell me what's on your mind..."
                                />
                            </motion.div>
                            <motion.div variants={fadeUp} custom={5}>
                                <button type="submit" className="brand-btn-primary w-full justify-center">
                                    Send Message <Send size={16} />
                                </button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Info + Socials */}
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-bold mb-6" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>
                            Other Ways to Connect
                        </motion.h2>

                        {/* Contact info */}
                        <motion.div variants={fadeUp} custom={1} className="space-y-4 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,132,90,0.1)" }}>
                                    <Mail size={20} style={{ color: "var(--brand-orange)" }} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium" style={{ color: "var(--brand-text-dark)" }}>Email</p>
                                    <a href="mailto:hello@mindyourbizniz.co" className="text-sm" style={{ color: "var(--brand-text-gray)" }}>hello@mindyourbizniz.co</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,132,90,0.1)" }}>
                                    <MapPin size={20} style={{ color: "var(--brand-orange)" }} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium" style={{ color: "var(--brand-text-dark)" }}>Location</p>
                                    <p className="text-sm" style={{ color: "var(--brand-text-gray)" }}>Seattle, Washington</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,132,90,0.1)" }}>
                                    <Globe size={20} style={{ color: "var(--brand-orange)" }} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium" style={{ color: "var(--brand-text-dark)" }}>Websites</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["jevoypalmer.com", "palmerhouseproductions.com", "yourboyjevoy.com"].map((site) => (
                                            <a key={site} href={`https://www.${site}`} target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: "var(--brand-orange)" }}>
                                                {site}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social grid */}
                        <motion.h3 variants={fadeUp} custom={2} className="text-lg font-bold mb-4" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>
                            Follow the Journey
                        </motion.h3>
                        <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
                            {SOCIALS.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={fadeUp}
                                    custom={i + 3}
                                    className="flex items-center gap-3 p-4 rounded-xl transition-transform hover:-translate-y-1"
                                    style={{ background: "white", border: "1px solid var(--brand-border-light)" }}
                                >
                                    <s.icon size={20} style={{ color: "var(--brand-orange)" }} />
                                    <div>
                                        <p className="text-sm font-medium" style={{ color: "var(--brand-text-dark)" }}>{s.label}</p>
                                        <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>{s.handle}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;
