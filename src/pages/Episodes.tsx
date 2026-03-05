import { motion } from "framer-motion";
import { Play, Clock, ArrowUpRight, Search } from "lucide-react";
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
    visible: { transition: { staggerChildren: 0.08 } },
};

const CATEGORIES = ["All", "Entrepreneurship", "Creativity", "Mindset", "Storytelling", "Growth"];

const EPISODES = [
    { title: "The Art of Starting from Nothing", host: "Jevoy Palmer", duration: "34 min", category: "Entrepreneurship", desc: "What it really takes to build when you have nothing but vision and discipline.", img: "/img-podcast-studio.png", badge: "Featured" },
    { title: "Why Your Story is Your Superpower", host: "Jevoy Palmer", duration: "28 min", category: "Storytelling", desc: "How narrative structure can transform the way people see your brand and your work.", img: "/img-interview.png", badge: "New" },
    { title: "Systems That Set You Free", host: "Jevoy Palmer", duration: "31 min", category: "Growth", desc: "The frameworks I use to manage multiple businesses without burning out.", img: "/img-editing.png", badge: "" },
    { title: "Identity is a Practice, Not a Label", host: "Jevoy Palmer", duration: "26 min", category: "Mindset", desc: "You become what you repeatedly do. Here's how I rebuilt mine from scratch.", img: "/img-workspace.png", badge: "" },
    { title: "The Camera Changed My Life", host: "Jevoy Palmer", duration: "38 min", category: "Creativity", desc: "From moving company to film production — the pivotal moment that changed everything.", img: "/img-production.png", badge: "" },
    { title: "Building Palmer House Productions", host: "Jevoy Palmer", duration: "42 min", category: "Entrepreneurship", desc: "How I designed a video agency that builds content systems, not just marketing videos.", img: "/img-storytelling.png", badge: "" },
    { title: "Discipline is the Real Currency", host: "Jevoy Palmer", duration: "25 min", category: "Mindset", desc: "Money comes and goes. Discipline is the bridge between where you are and where you want to be.", img: "/img-podcast-studio.png", badge: "" },
    { title: "Creativity Under Constraints", host: "Jevoy Palmer", duration: "29 min", category: "Creativity", desc: "Why limitations aren't the enemy — they're the secret ingredient to inventive thinking.", img: "/img-interview.png", badge: "Coming Soon" },
];

const Episodes = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = EPISODES.filter((ep) => {
        const matchesCategory = activeCategory === "All" || ep.category === activeCategory;
        const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase()) || ep.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {/* ───── HERO ───── */}
            <section className="relative pt-28 pb-16 md:pt-40 md:pb-20" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.p variants={fadeUp} custom={0} initial="hidden" animate="visible" className="text-sm font-medium mb-4" style={{ color: "var(--brand-orange)" }}>
                        LISTEN & LEARN
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="visible" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        All <span className="brand-underline">Episodes</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible" className="mt-4 text-base md:text-lg max-w-2xl" style={{ color: "var(--brand-text-secondary)" }}>
                        Real conversations about entrepreneurship, creativity, and what it takes to build something from nothing.
                    </motion.p>
                </div>
            </section>

            {/* ───── FILTERS ───── */}
            <section className="py-10" style={{ background: "var(--brand-surface)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div className="relative w-full md:w-80">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--brand-text-secondary)" }} />
                            <input
                                type="text"
                                placeholder="Search episodes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-full text-sm border focus:outline-none focus:border-[var(--brand-orange)] transition"
                                style={{ borderColor: "var(--brand-border)", background: "var(--brand-surface-input)", color: "var(--brand-text-primary)" }}
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat
                                            ? "text-white"
                                            : ""
                                        }`}
                                    style={{
                                        background: activeCategory === cat ? "var(--brand-orange)" : "var(--brand-surface-card)",
                                        border: `1px solid ${activeCategory === cat ? "var(--brand-orange)" : "var(--brand-border)"}`,
                                        color: activeCategory === cat ? "white" : "var(--brand-text-secondary)",
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── EPISODE GRID ───── */}
            <section className="py-10 pb-20" style={{ background: "var(--brand-surface)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filtered.map((ep, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="group rounded-2xl overflow-hidden transition-transform hover:-translate-y-1"
                                style={{ background: "var(--brand-surface-card)", border: "1px solid var(--brand-border)" }}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img src={ep.img} alt={ep.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    {ep.badge && (
                                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: "var(--brand-orange)" }}>
                                            {ep.badge}
                                        </span>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100">
                                            <Play size={20} style={{ color: "var(--brand-dark)" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(212,132,90,0.1)", color: "var(--brand-orange)" }}>
                                            {ep.category}
                                        </span>
                                        <span className="text-xs flex items-center gap-1" style={{ color: "var(--brand-text-secondary)" }}>
                                            <Clock size={12} /> {ep.duration}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-base mb-2" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{ep.title}</h3>
                                    <p className="text-sm line-clamp-2" style={{ color: "var(--brand-text-secondary)" }}>{ep.desc}</p>
                                    <p className="mt-3 text-xs font-medium" style={{ color: "var(--brand-text-primary)" }}>By {ep.host}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-lg" style={{ color: "var(--brand-text-secondary)" }}>No episodes found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Episodes;
