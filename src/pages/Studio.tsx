import { motion } from "framer-motion";
import { ArrowUpRight, Volume2, Film, Scissors, Monitor, Check, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const PACKAGES = [
    { name: "Space Only", price: "$150", period: "/hr", desc: "Book the studio, bring your vision, and walk away with raw files to edit on your own.", features: ["Studio rental access", "Professional equipment", "Raw file delivery", "Flexible scheduling", "Sound-treated room"], popular: false },
    { name: "Production Partner", price: "$450", period: "/hr", desc: "We film your session and our team handles editing, sound mixing, and color grading.", features: ["Everything in Space Only", "Professional filming", "Sound mixing & color grading", "2 rounds of revisions", "Delivery within 7 days"], popular: true },
    { name: "Full Service", price: "$750", period: "/hr", desc: "We handle everything — filming, editing, sound, thumbnails, social cuts, and distribution-ready exports.", features: ["Everything in Production Partner", "Custom thumbnails & social cuts", "Distribution-ready exports", "YouTube optimization", "Unlimited revisions"], popular: false },
    { name: "Online Appearance", price: "$200", period: "/hr", desc: "Record remotely with professional-grade quality. We handle the tech so you can focus on the conversation.", features: ["Remote recording setup", "Professional audio optimization", "Screen & camera capture", "Post-production editing", "Delivery within 5 days"], popular: false },
];

const PROCESS = [
    { step: "01", title: "Book Your Session", desc: "Choose your package and pick a time that works. We'll send you a prep guide so you arrive ready.", icon: Monitor },
    { step: "02", title: "Show Up & Record", desc: "Step into the studio. Our team handles the technical setup — all you have to do is talk.", icon: Volume2 },
    { step: "03", title: "We Edit & Polish", desc: "Our team handles post-production: editing, color grading, sound mixing, and more.", icon: Scissors },
    { step: "04", title: "Receive Your Content", desc: "Get your finished files — ready for YouTube, Spotify, social media, or anywhere you publish.", icon: Film },
];

const FAQS = [
    { q: "How long is a typical session?", a: "Sessions typically run 2-3 hours, including setup time. We recommend allowing extra time for comfort and flexibility." },
    { q: "Can I bring a guest?", a: "Absolutely! Our studio is set up for two-person conversations. We can accommodate up to 3 people total." },
    { q: "What equipment do you provide?", a: "We provide professional microphones, cameras, lighting, and a fully sound-treated recording space. Just bring yourself and your ideas." },
    { q: "How quickly will I receive my content?", a: "Space Only sessions deliver raw files same-day. Production Partner delivers within 7 business days. Full Service typically takes 10-14 business days." },
    { q: "Can I use the content for commercial purposes?", a: "Yes — you own 100% of the content created during your session. Use it however you like." },
];

const Studio = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* ───── HERO ───── */}
            <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium mb-4" style={{ color: "var(--brand-orange)" }}>
                            THE STUDIO
                        </motion.p>
                        <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            Book Your <span className="brand-underline">Session</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} custom={2} className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>
                            Whether you bring your own edit or want the full treatment, we&apos;ve got a studio package that fits your vision. Professional podcasting made simple.
                        </motion.p>
                        <motion.div variants={fadeUp} custom={3} className="mt-8">
                            <a href="#packages" className="brand-btn-primary">
                                View Packages <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible" className="rounded-3xl overflow-hidden" style={{ border: "2px solid rgba(212,132,90,0.2)" }}>
                        <img src="/img-podcast-studio.png" alt="Studio" className="w-full h-auto object-cover" />
                    </motion.div>
                </div>
            </section>

            {/* ───── PROCESS ───── */}
            <section className="py-20 md:py-28" style={{ background: "var(--brand-surface)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center brand-section-heading mb-4" style={{ color: "var(--brand-text-primary)" }}>
                        How It <span className="brand-underline">Works</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 text-base max-w-xl mx-auto" style={{ color: "var(--brand-text-secondary)" }}>
                        From booking to delivery, we make the entire process seamless so you can focus on what matters — the conversation.
                    </motion.p>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-4 gap-6">
                        {PROCESS.map((p, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className="text-center p-6 rounded-2xl" style={{ background: "var(--brand-surface-card)", border: "1px solid var(--brand-border)" }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(212,132,90,0.1)" }}>
                                    <p.icon size={24} style={{ color: "var(--brand-orange)" }} />
                                </div>
                                <span className="text-xs font-bold tracking-widest mb-2 block" style={{ color: "var(--brand-orange)" }}>STEP {p.step}</span>
                                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                                <p className="text-sm" style={{ color: "var(--brand-text-secondary)" }}>{p.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───── LOCATIONS ───── */}
            <section className="py-20 md:py-28" style={{ background: "var(--brand-surface-alt)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center brand-section-heading mb-4" style={{ color: "var(--brand-text-primary)" }}>
                        Our <span className="brand-underline">Locations</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 text-base max-w-xl mx-auto" style={{ color: "var(--brand-text-secondary)" }}>
                        Three studios across the Pacific Northwest — pick the one closest to you.
                    </motion.p>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { city: "Bellevue", state: "WA", detail: "Eastside convenience with premium amenities" },
                            { city: "Renton", state: "WA", detail: "South King County's creative hub" },
                            { city: "Portland", state: "OR", detail: "Serving the Rose City and beyond" },
                            { city: "Online", state: "Remote", detail: "Record from anywhere with pro-level quality" },
                        ].map((loc, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className="p-8 rounded-2xl text-center transition-transform hover:-translate-y-1" style={{ background: "var(--brand-surface-card)", border: "1px solid var(--brand-border)" }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(212,132,90,0.1)" }}>
                                    <MapPin size={24} style={{ color: "var(--brand-orange)" }} />
                                </div>
                                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{loc.city}, {loc.state}</h3>
                                <p className="text-sm" style={{ color: "var(--brand-text-secondary)" }}>{loc.detail}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───── PACKAGES ───── */}
            <section id="packages" className="py-20 md:py-28" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center text-white brand-section-heading mb-16">
                        Studio <span className="brand-underline">Packages</span>
                    </motion.h2>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PACKAGES.map((pkg, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className={`rounded-3xl p-8 transition-transform hover:-translate-y-1 ${pkg.popular ? "ring-2 ring-[var(--brand-orange)]" : ""}`} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--brand-border-dark)" }}>
                                {pkg.popular && (
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: "rgba(212,132,90,0.15)", color: "var(--brand-orange)", border: "1px solid rgba(212,132,90,0.3)" }}>
                                        ⭐ Most Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{pkg.name}</h3>
                                <p className="text-sm mb-6" style={{ color: "var(--brand-text-secondary)" }}>{pkg.desc}</p>
                                <div className="border-t border-white/10 pt-6 mb-6">
                                    <ul className="space-y-3">
                                        {pkg.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                                                <Check size={16} style={{ color: "var(--brand-orange)" }} /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>{pkg.price}<span className="text-base font-normal text-white/50">{pkg.period}</span></p>
                                <Link to="/contact" className={`w-full justify-center ${pkg.popular ? "brand-btn-primary" : "brand-btn-outline"}`}>
                                    Book a Session <span className="brand-icon-circle w-6 h-6"><ArrowUpRight size={14} /></span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───── FAQ ───── */}
            <section className="py-20 md:py-28" style={{ background: "var(--brand-surface)" }}>
                <div className="max-w-3xl mx-auto px-6">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center brand-section-heading mb-16" style={{ color: "var(--brand-text-primary)" }}>
                        Frequently Asked <span className="brand-underline">Questions</span>
                    </motion.h2>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className="rounded-2xl overflow-hidden" style={{ background: "var(--brand-surface-card)", border: "1px solid var(--brand-border)" }}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-left font-medium"
                                    style={{ color: "var(--brand-text-primary)" }}
                                >
                                    {faq.q}
                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}
                                        style={{ color: "var(--brand-orange)" }}
                                    />
                                </button>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="px-5 pb-5 text-sm leading-relaxed"
                                        style={{ color: "var(--brand-text-secondary)" }}
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Studio;
