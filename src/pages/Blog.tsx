import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

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

const POSTS = [
    {
        title: "Why Every Entrepreneur Needs a Podcast",
        date: "March 2025",
        read: "5 min read",
        category: "Entrepreneurship",
        desc: "A podcast isn't just content — it's a trust-building machine. Here's why every founder should start one, even if they think they have nothing to say.",
        img: "/img-podcast-studio.png",
        featured: true,
    },
    {
        title: "Cast on Daymond John's Next Level CEO — Here's What I Learned",
        date: "Coming Soon",
        read: "",
        category: "Growth",
        desc: "The journey to Inside Success TV, what it means for Mind Your Bizniz, and the lessons I'm taking into this next chapter.",
        img: "/img-production.png",
        featured: false,
    },
    {
        title: "How I Built a Production Studio From Nothing",
        date: "Coming Soon",
        read: "",
        category: "Business",
        desc: "From zero clients to a full cinematic production agency. The systems, the mistakes, and the discipline it took to build Palmer House Productions.",
        img: "/img-workspace.png",
        featured: false,
    },
    {
        title: "Lessons From My First 10 Conversations",
        date: "Coming Soon",
        read: "",
        category: "Podcast",
        desc: "What surprised me, what I got wrong, and what I'd tell anyone starting their first podcast after sitting behind the mic for 10 real conversations.",
        img: "/img-interview.png",
        featured: false,
    },
    {
        title: "Your Story is Your Most Valuable Business Asset",
        date: "Coming Soon",
        read: "",
        category: "Storytelling",
        desc: "Human cognition evolved to understand narratives. If you want people to remember your brand, stop selling and start telling stories.",
        img: "/img-storytelling.png",
        featured: false,
    },
    {
        title: "Creativity Thrives Under Constraints",
        date: "Coming Soon",
        read: "",
        category: "Creativity",
        desc: "Limitations aren't the enemy — they're the secret ingredient. How constraints forced me to think more inventively about every project I touch.",
        img: "/img-editing.png",
        featured: false,
    },
];

const Blog = () => {
    return (
        <>
            {/* ───── HERO ───── */}
            <section className="relative pt-28 pb-16 md:pt-40 md:pb-20" style={{ background: "var(--brand-dark)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <motion.p variants={fadeUp} custom={0} initial="hidden" animate="visible" className="text-sm font-medium mb-4" style={{ color: "var(--brand-orange)" }}>
                        THOUGHTS & INSIGHTS
                    </motion.p>
                    <motion.h1
                        variants={fadeUp} custom={1} initial="hidden" animate="visible"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        The <span className="brand-underline">Blog</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} initial="hidden" animate="visible" className="mt-4 text-base md:text-lg max-w-2xl" style={{ color: "var(--brand-text-gray)" }}>
                        Ideas on entrepreneurship, creativity, storytelling, and building things that matter.
                    </motion.p>
                </div>
            </section>

            {/* ───── FEATURED POST ───── */}
            <section className="py-10" style={{ background: "var(--brand-bg)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    {POSTS.filter(p => p.featured).map((post, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp} custom={0} initial="hidden" animate="visible"
                            className="grid md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden group"
                            style={{ background: "white", border: "1px solid var(--brand-border-light)" }}
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(212,132,90,0.1)", color: "var(--brand-orange)" }}>{post.category}</span>
                                    <span className="text-xs" style={{ color: "var(--brand-text-gray)" }}>{post.date}</span>
                                    {post.read && <span className="text-xs flex items-center gap-1" style={{ color: "var(--brand-text-gray)" }}><Clock size={12} /> {post.read}</span>}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>{post.title}</h2>
                                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--brand-text-gray)" }}>{post.desc}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer" style={{ color: "var(--brand-orange)" }}>
                                    Read More <ArrowUpRight size={16} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ───── ALL POSTS ───── */}
            <section className="py-10 pb-20" style={{ background: "var(--brand-bg)" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-xl font-bold mb-8" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>All Posts</h3>
                    <motion.div variants={stagger} initial="hidden" animate="visible" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {POSTS.filter(p => !p.featured).map((post, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="group rounded-2xl overflow-hidden transition-transform hover:-translate-y-1"
                                style={{ background: "white", border: "1px solid var(--brand-border-light)" }}
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: "rgba(212,132,90,0.1)", color: "var(--brand-orange)" }}>{post.category}</span>
                                        <span className="text-xs" style={{ color: "var(--brand-text-gray)" }}>{post.date}</span>
                                    </div>
                                    <h3 className="font-bold text-base mb-2" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>{post.title}</h3>
                                    <p className="text-sm line-clamp-3" style={{ color: "var(--brand-text-gray)" }}>{post.desc}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium cursor-pointer" style={{ color: "var(--brand-orange)" }}>
                                        Read More <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Blog;
