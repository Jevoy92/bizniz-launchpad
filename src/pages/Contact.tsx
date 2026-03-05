import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Globe, Instagram, Youtube, Palette, Video, Gift } from "lucide-react";
import { useEffect } from "react";

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

const HONEYBOOK_PID = "64f18afafb99b50197686f91";

const Contact = () => {
    useEffect(() => {
        // Load HoneyBook widget script
        if (!(window as any)._HB_) {
            (window as any)._HB_ = {};
        }
        (window as any)._HB_.pid = HONEYBOOK_PID;

        const existing = document.querySelector(`script[src*="honeybook.com"]`);
        if (!existing) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
            document.body.appendChild(script);
        }
    }, []);

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
                    {/* HoneyBook Form */}
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-bold mb-6" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>
                            Send a Message
                        </motion.h2>
                        <motion.div variants={fadeUp} custom={1}>
                            <div className="hb-p-64f18afafb99b50197686f91-3"></div>
                            <img height="1" width="1" style={{ display: "none" }} src="https://www.honeybook.com/p.png?pid=64f18afafb99b50197686f91" alt="" />
                        </motion.div>
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
