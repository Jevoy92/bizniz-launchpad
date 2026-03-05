import { motion } from "framer-motion";
import { ArrowUpRight, Star, Film, Briefcase, Lightbulb, Target, Compass } from "lucide-react";

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

const VENTURES = [
    { name: "Palmer House Productions", desc: "Cinematic video production agency helping founders capture their story and knowledge through video.", href: "https://www.palmerhouseproductions.com", logo: "/logo-palmerhouse.png", img: "/logo-palmerhouse.png" },
    { name: "YourBoyJevoy", desc: "A creative laboratory where music, photography, short films, and reflective storytelling coexist without commercial constraints.", href: "https://www.yourboyjevoy.com", logo: "/logo-yourboyjevoy.svg", img: "/logo-yourboyjevoy.svg" },
    { name: "beSettld", desc: "Lifestyle support for seniors, disabled adults, and busy professionals — exploring how thoughtful systems can improve everyday life.", href: "https://besettld.com", logo: "/logo-besettld.svg", img: "/logo-besettld.svg" },
];

const PHILOSOPHY = [
    { text: "Identity is not static. People become what they repeatedly practice.", icon: Compass },
    { text: "Discipline is the bridge between intention and identity.", icon: Target },
    { text: "Story is the most powerful way to transmit ideas.", icon: Film },
    { text: "Systems create freedom. Chaos creates exhaustion.", icon: Briefcase },
    { text: "Creativity thrives under constraints because limitations force inventive thinking.", icon: Lightbulb },
    { text: "The most valuable work is often invisible while it is being built.", icon: Star },
];

const MILESTONES = [
    { year: "Kingston", text: "Born in Jamaica. A foundation built on resilience, faith, and resourcefulness." },
    { year: "Seattle", text: "Moved to the Pacific Northwest. Started the grind — running a moving company, learning the hustle." },
    { year: "Pivot", text: "Transitioned from moving company to filmmaker and entrepreneur. Founded Palmer House Productions." },
    { year: "Build", text: "Launched YourBoyJevoy creative lab and beSettld lifestyle support. Built systems, not just businesses." },
    { year: "Now", text: "Mind Your Bizniz podcast. Cast on Daymond John's Next Level CEO. The story is still being written." },
];

const About = () => {
    return (
        <>
            {/* ───── HERO ───── */}
            <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium mb-4" style={{ color: "var(--brand-orange)" }}>
                                THE STORY BEHIND THE MIC
                            </motion.p>
                            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                                Jamaican-Born,{" "}
                                <span className="brand-underline">Seattle-Based</span>.
                                <br />Building Something Real.
                            </motion.h1>
                            <motion.p variants={fadeUp} custom={2} className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>
                                I&apos;m Jevoy Palmer — filmmaker, entrepreneur, and creative strategist. From Kingston to Seattle, I&apos;ve built multiple ventures driven by a single belief: your story is your most valuable business asset.
                            </motion.p>
                            <motion.div variants={fadeUp} custom={2.5} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium" style={{ background: "rgba(212,132,90,0.15)", color: "var(--brand-orange)", border: "1px solid rgba(212,132,90,0.3)" }}>
                                🎬 Coming Soon: Cast on Daymond John&apos;s Next Level CEO — Inside Success TV
                            </motion.div>
                            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
                                <a href="https://www.jevoypalmer.com" target="_blank" rel="noopener noreferrer" className="brand-btn-primary">
                                    JevoyPalmer.com <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                                </a>
                                <a href="https://www.palmerhouseproductions.com" target="_blank" rel="noopener noreferrer" className="brand-btn-outline-on-dark">
                                    Palmer House <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                                </a>
                            </motion.div>
                        </div>
                        <motion.div variants={fadeUp} custom={2} className="relative">
                            <div className="rounded-3xl overflow-hidden" style={{ border: "2px solid rgba(212,132,90,0.3)" }}>
                                <img src="/jevoy-portrait.jpg" alt="Jevoy Palmer" className="w-full h-auto object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 rounded-2xl shadow-xl px-5 py-3" style={{ background: "var(--brand-surface-elevated)" }}>
                                <p className="text-sm font-bold" style={{ color: "var(--brand-text-primary)" }}>Filmmaker · Founder · Creator</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ───── JOURNEY TIMELINE ───── */}
            <section className="py-20 md:py-28" style={{ background: "var(--brand-surface)" }}>
                <div className="max-w-4xl mx-auto px-6">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center brand-section-heading mb-16" style={{ color: "var(--brand-text-primary)" }}>
                        The <span className="brand-underline">Journey</span> So Far
                    </motion.h2>

                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "var(--brand-orange)", opacity: 0.3 }} />

                        {MILESTONES.map((m, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-16 md:pl-0`}>
                                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-orange)" }}>{m.year}</span>
                                    <p className="mt-2 text-base" style={{ color: "var(--brand-text-secondary)" }}>{m.text}</p>
                                </div>
                                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4" style={{ background: "var(--brand-orange)", borderColor: "var(--brand-surface)", top: "4px" }} />
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───── VENTURES ───── */}
            <section className="py-20 md:py-28" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center text-white brand-section-heading mb-4">
                        The <span className="brand-underline">Ventures</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 text-base" style={{ color: "var(--brand-text-secondary)" }}>
                        Three businesses, one mission: help people tell their story and build something meaningful.
                    </motion.p>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
                        {VENTURES.map((v, i) => (
                            <motion.a key={i} href={v.href} target="_blank" rel="noopener noreferrer" variants={fadeUp} custom={i} className="group rounded-3xl overflow-hidden transition-transform hover:-translate-y-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--brand-border-dark)" }}>
                                <div className="h-48 overflow-hidden flex items-center justify-center rounded-2xl m-3" style={{ background: "linear-gradient(135deg, #f5e6d3, #e8d5c0)" }}>
                                    <img src={v.img} alt={v.name} className="w-28 h-28 object-contain" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img src={v.logo} alt={v.name + " logo"} className="w-7 h-7 object-contain" style={{ filter: "invert(1)" }} />
                                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>{v.name}</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>{v.desc}</p>
                                    <div className="mt-4 flex items-center gap-2 text-xs font-medium" style={{ color: "var(--brand-orange)" }}>
                                        Learn more <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───── PHILOSOPHY ───── */}
            <section className="py-20 md:py-28" style={{ background: "var(--brand-surface-alt)" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center brand-section-heading mb-4" style={{ color: "var(--brand-text-primary)" }}>
                        Core <span className="brand-underline">Beliefs</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 text-base" style={{ color: "var(--brand-text-secondary)" }}>
                        These ideas form the intellectual spine of everything I build.
                    </motion.p>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
                        {PHILOSOPHY.map((p, i) => (
                            <motion.div key={i} variants={fadeUp} custom={i} className="flex items-start gap-4 p-6 rounded-2xl" style={{ background: "var(--brand-surface-card)", border: "1px solid var(--brand-border)" }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,132,90,0.1)" }}>
                                    <p.icon size={20} style={{ color: "var(--brand-orange)" }} />
                                </div>
                                <p className="text-base leading-relaxed" style={{ color: "var(--brand-text-primary)" }}>
                                    &ldquo;{p.text}&rdquo;
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───── CTA ───── */}
            <section className="py-20" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white brand-section-heading mb-6">
                        Let&apos;s <span className="brand-underline">Connect</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-base mb-8" style={{ color: "var(--brand-text-secondary)" }}>
                        Whether you want to be a guest on Mind Your Bizniz, book a production session, or just connect — I&apos;d love to hear from you.
                    </motion.p>
                    <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center gap-4 flex-wrap">
                        <a href="/contact" className="brand-btn-primary">
                            Get in Touch <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;
