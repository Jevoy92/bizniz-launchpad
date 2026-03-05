import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Headphones,
  Bell,
  Volume2,
  Mic,
  Play,
  Clock,
  ArrowRight,
  ArrowLeft,
  Monitor,
  Smile,
  PenTool,
  Heart,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Star,
  Menu,
  X,
} from "lucide-react";
import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";

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

/* ─── DATA ────────────────────────────── */

const EPISODES = [
  {
    num: "01",
    host: "Jevoy Palmer",
    title: "Why I Started Mind Your Bizniz",
    tags: "Entrepreneurship",
    time: "38 mins",
    img: "/episode-1.png",
  },
  {
    num: "02",
    host: "Jevoy Palmer",
    title: "Building a Brand From Scratch",
    tags: "Branding & Strategy",
    time: "42 mins",
    img: "/episode-2.png",
  },
  {
    num: "03",
    host: "Jevoy Palmer",
    title: "The Creative Entrepreneur's Playbook",
    tags: "Creativity & Business",
    time: "30 mins",
    img: "/episode-3.png",
  },
  {
    num: "04",
    host: "Jevoy Palmer",
    title: "Systems Over Hustle",
    tags: "Growth & Mindset",
    time: "45 mins",
    img: "/episode-4.png",
  },
];

const CATEGORIES = [
  { name: "Entrepreneurship", episodes: "Featured", icon: Monitor, wide: true },
  { name: "Creativity", episodes: "New", icon: PenTool, wide: false },
  { name: "Leadership", episodes: "Coming Soon", icon: Briefcase, wide: false },
  { name: "Mindset & Growth", episodes: "New", icon: Heart, wide: false },
  { name: "Branding", episodes: "Featured", icon: Smile, wide: false },
  { name: "Production & Film", episodes: "Coming Soon", icon: GraduationCap, wide: false },
];

const FEATURES = [
  {
    icon: Headphones,
    title: "Studio-Grade Audio",
    desc: "Every episode is recorded and mixed in our professional studio, ensuring crisp, cinematic sound quality.",
  },
  {
    icon: Bell,
    title: "New Episodes Dropping",
    desc: "Subscribe to stay in the loop. Every new conversation is a chance to learn, grow, and get inspired.",
  },
  {
    icon: Volume2,
    title: "Full Production Support",
    desc: "From filming to editing to final export — we offer tiered production packages so you can focus on your message.",
  },
];

const TESTIMONIALS = [
  {
    text: "Jevoy brings an energy and authenticity to every conversation. Mind Your Bizniz is the podcast I didn't know I needed.",
    name: "Early Listener",
    role: "Entrepreneur",
  },
  {
    text: "The production quality is insane for a new podcast. You can tell there's real craft behind every episode.",
    name: "Community Member",
    role: "Creative Professional",
  },
  {
    text: "Real talk, real stories, real growth. This is the kind of content the world needs more of.",
    name: "Supporter",
    role: "Business Owner",
  },
];

const HOSTS = [
  { name: "Jevoy Palmer", role: "Host, Creative Strategist & Next Level CEO Cast", img: "/jevoy-portrait.jpg" },
];

const PRICING = [
  {
    plan: "Space Only",
    desc: "Book the studio, bring your vision, and walk away with raw files to edit on your own.",
    features: ["Studio rental access", "Professional equipment", "Raw file delivery"],
    price: "Contact",
    featured: false,
  },
  {
    plan: "Production Partner",
    desc: "We film your session and our team handles editing, sound mixing, and color grading.",
    features: ["Everything in Space Only", "Professional editing", "Sound mixing & color grading"],
    price: "Contact",
    featured: true,
  },
  {
    plan: "Full Service",
    desc: "We handle everything — filming, editing, sound, thumbnails, social cuts, and distribution-ready exports.",
    features: ["Everything in Production Partner", "Custom thumbnails & social cuts", "Distribution-ready exports"],
    price: "Contact",
    featured: false,
  },
];

const BLOGS = [
  {
    title: "Why Every Entrepreneur Needs a Podcast",
    date: "March 2025",
    read: "5 min read",
    img: "/episode-1.png",
  },
  {
    title: "Cast on Daymond John's Next Level CEO — Here's What I Learned",
    date: "Coming Soon",
    read: "",
    img: "/episode-2.png",
  },
  {
    title: "How I Built a Production Studio From Nothing",
    date: "Coming Soon",
    read: "",
    img: "/episode-3.png",
  },
  {
    title: "Lessons From My First 10 Conversations",
    date: "Coming Soon",
    read: "",
    img: "/episode-4.png",
  },
];

/* ─── COMPONENT ───────────────────────── */

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--brand-light)" }}>
        {/* ───── NAVBAR ───── */}
        <nav
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
          style={{ background: "rgba(26,18,11,0.92)" }}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-white/10 group-hover:scale-110">
                <img src="/logo-orange.png" alt="Logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Mind Your Bizniz</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "Episode", "Host", "About us", "Contact", "Blog"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="text-sm text-white/70 hover:text-white transition">
                  {l}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="#newsletter" className="hidden md:inline-flex brand-btn-primary text-sm py-2 px-5">
                Get in Touch <span className="brand-icon-circle w-6 h-6 text-xs"><ArrowUpRight size={14} /></span>
              </a>
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden px-6 pb-6 pt-2"
              style={{ background: "rgba(26,18,11,0.98)" }}
            >
              {["Home", "Episode", "Host", "About us", "Contact", "Blog"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                  className="block py-3 text-white/80 hover:text-white border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a href="#newsletter" className="brand-btn-primary mt-4 justify-center w-full text-sm py-3">
                Get in Touch <ArrowUpRight size={14} />
              </a>
            </motion.div>
          )}
        </nav>

        {/* ───── HERO ───── */}
        <section
          id="home"
          className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
          style={{ background: "var(--brand-dark)" }}
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
              <motion.h1
                variants={fadeUp}
                custom={0}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Turn Ideas Into{" "}
                <span className="brand-underline">Episodes</span>, Dreams Into Reality
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="mt-5 text-base md:text-lg" style={{ color: "var(--brand-text-gray)" }}>
                Real conversations about entrepreneurship, creativity, and what it takes to build something from nothing. Hosted by Jevoy Palmer.
              </motion.p>
              {/* As Seen On Badge */}
              <motion.div variants={fadeUp} custom={1.5} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium" style={{ background: "rgba(212,132,90,0.15)", color: "var(--brand-orange)", border: "1px solid rgba(212,132,90,0.3)" }}>
                🎬 Coming Soon: Cast on Daymond John&apos;s Next Level CEO — Inside Success TV
              </motion.div>
              <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-wrap gap-4">
                <a href="#episode" className="brand-btn-primary">
                  Start Listening <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                </a>
                <a href="#episode" className="brand-btn-outline">
                  Browse Episodes <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                </a>
              </motion.div>
              <motion.div variants={fadeUp} custom={3} className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[var(--brand-dark)] overflow-hidden"
                    >
                      <img src={`/episode-${i}.png`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>Growing Fast</span>
                  <p className="text-sm" style={{ color: "var(--brand-text-gray)" }}>Engaged Community</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right – Hero image */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center"
            >
              <div className="relative">
                <img
                  src="/hero-person.png"
                  alt="Podcast listener"
                  className="w-full max-w-md rounded-3xl object-cover"
                />
                {/* Floating player card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-8 left-0 md:-left-8 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 min-w-[260px]"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="/episode-3.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--brand-text-dark)] truncate">Mind Your Bizniz</p>
                    <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>Now Playing</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs" style={{ color: "var(--brand-text-gray)" }}>2:46</span>
                      <div className="flex-1 h-1 bg-gray-200 rounded-full">
                        <div className="h-full w-2/3 rounded-full" style={{ background: "var(--brand-orange)" }} />
                      </div>
                      <span className="text-xs" style={{ color: "var(--brand-text-gray)" }}>-1:22</span>
                    </div>
                  </div>
                </motion.div>

                {/* Episode count badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute top-8 right-0 md:-right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(212,132,90,0.15)" }}>
                    <Mic size={18} style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <div>
                    <span className="font-bold text-lg text-[var(--brand-text-dark)]" style={{ fontFamily: "var(--font-heading)" }}>Fresh Content</span>
                    <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>Episodes Weekly</p>
                  </div>
                </motion.div>

                {/* Decorative doodle */}
                <svg className="absolute -top-8 left-1/3 w-10 h-10 text-white/60" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 30 Q20 10 30 30" /><path d="M15 28 Q22 12 28 28" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── EPISODES ───── */}
        <section id="episode" className="py-20 md:py-28" style={{ background: "var(--brand-light)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center brand-section-heading"
              style={{ color: "var(--brand-text-dark)" }}
            >
              Discover the Latest{" "}
              <span className="brand-underline">Episodes</span>
              <br className="hidden sm:block" /> and Featured Highlights
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 grid sm:grid-cols-2 gap-6"
            >
              {EPISODES.map((ep, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="brand-card-episode group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={ep.img}
                      alt={ep.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--brand-text-gray)" }}>
                      <Mic size={14} style={{ color: "var(--brand-orange)" }} />
                      <span>Episode {ep.num}</span>
                      <span className="font-medium text-[var(--brand-text-dark)]">{ep.host}</span>
                    </div>
                    <h3
                      className="mt-2 text-xl font-bold"
                      style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}
                    >
                      {ep.title}
                    </h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--brand-text-gray)" }}>{ep.tags}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "var(--brand-text-gray)" }}>
                        <Clock size={14} /> {ep.time}
                      </div>
                      <div className="brand-icon-circle-outline group-hover:border-[var(--brand-orange)] group-hover:text-[var(--brand-orange)]">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <a href="#" className="brand-btn-primary">
                Browse More Episodes <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ───── ABOUT ───── */}
        <section id="aboutus" className="py-20 md:py-28" style={{ background: "var(--brand-light)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                variants={fadeUp}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                  <img src="/jevoy-portrait.jpg" alt="Jevoy Palmer" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm">
                    The Story Behind the Mic
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--brand-orange)" }}>
                      <Play size={14} className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                {/* Doodle */}
                <svg className="absolute -top-6 -right-4 w-12 h-12 text-[var(--brand-text-dark)]/40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 35 Q20 5 35 35" /><path d="M10 32 Q20 8 30 32" />
                </svg>
              </motion.div>

              {/* Text */}
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.p variants={fadeUp} custom={0} className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--brand-text-gray)" }}>
                  The Story Behind the Mic
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="mt-3 text-3xl md:text-4xl font-bold brand-section-heading"
                  style={{ color: "var(--brand-text-dark)" }}
                >
                  Jamaican-Born, Seattle-Based. Building Something Real.
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-text-gray)" }}>
                  I&apos;m Jevoy Palmer — filmmaker, entrepreneur, and creative strategist. I run Palmer House Productions (cinematic video systems for founders), the YourBoyJevoy creative lab, and beSettld (lifestyle support for seniors and busy professionals). Accepted into Daymond John&apos;s Next Level CEO on Inside Success TV — coming soon.
                </motion.p>
                <motion.ul variants={fadeUp} custom={3} className="mt-6 space-y-3">
                  {["Cast on Daymond John's Next Level CEO", "Studio-grade production quality", "Real conversations, real growth"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[var(--brand-text-dark)]">
                      <Star size={18} style={{ color: "var(--brand-orange)" }} /> {item}
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUp} custom={4} className="mt-8">
                  <a href="https://www.jevoypalmer.com" target="_blank" rel="noopener noreferrer" className="brand-btn-outline-dark">
                    Learn More <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats bar */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 rounded-2xl p-8"
              style={{ background: "rgba(0,0,0,0.03)" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
                <span className="text-sm font-medium" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>Listen on</span>
                {["🎵", "🎧", "🎙️", "📡"].map((e, i) => (
                  <span key={i} className="text-2xl">{e}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { val: "Quality", label: "Episodes Released" },
                  { val: "Global", label: "Community" },
                  { val: "Worldwide", label: "Engaged Listeners" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>{s.val}</p>
                    <p className="text-sm mt-1" style={{ color: "var(--brand-text-gray)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── CATEGORIES ───── */}
        <section className="py-20 md:py-28" style={{ background: "var(--brand-dark)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <motion.h2
                variants={fadeUp}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white brand-section-heading"
              >
                Discover Podcasts That
                <br /> Match Your <span className="brand-underline">Mood</span>!
              </motion.h2>
              <motion.a
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                href="#"
                className="brand-btn-primary whitespace-nowrap"
              >
                Browse All Categories <span className="brand-icon-circle w-7 h-7 bg-white text-[var(--brand-text-dark)]"><ArrowUpRight size={16} /></span>
              </motion.a>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {CATEGORIES.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className={`brand-card-category ${cat.wide ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start justify-between mb-10">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,132,90,0.15)" }}>
                        <Icon size={22} style={{ color: "var(--brand-orange)" }} />
                      </div>
                      <ArrowUpRight size={20} style={{ color: "var(--brand-text-gray)" }} />
                    </div>
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>{cat.name}</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--brand-text-gray)" }}>{cat.episodes}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="w-7 h-7 rounded-full border-2 border-[var(--brand-dark-card)] overflow-hidden">
                            <img src={`/episode-${j}.png`} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm" style={{ color: "var(--brand-text-gray)" }}>Growing Community</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ───── FEATURES ───── */}
        <section className="py-20 md:py-28" style={{ background: "var(--brand-light)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2
                  variants={fadeUp}
                  custom={0}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold brand-section-heading"
                  style={{ color: "var(--brand-text-dark)" }}
                >
                  Features That Enhance Your Listening{" "}
                  <span className="brand-underline">Experience</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="mt-5 text-base leading-relaxed" style={{ color: "var(--brand-text-gray)" }}>
                  Hello there! Dive into these amazing features designed to elevate your listening experience to new heights!
                </motion.p>
                <motion.div variants={fadeUp} custom={2} className="mt-8">
                  <a href="#episode" className="brand-btn-outline-dark">
                    Browse Episodes <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto" style={{ background: "rgba(212,132,90,0.15)" }}>
                    <img src="/hero-person.png" alt="Features" className="w-full h-full object-cover" />
                  </div>
                  {/* Floating badges */}
                  <div className="absolute bottom-4 left-0 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 text-sm">
                    <div className="flex -space-x-1">
                      {[1, 2].map((j) => (
                        <div key={j} className="w-6 h-6 rounded-full overflow-hidden border border-white">
                          <img src={`/episode-${j}.png`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="font-semibold text-[var(--brand-text-dark)]">Join the Community</span>
                  </div>
                  <div className="absolute top-8 right-0 bg-white rounded-full shadow-lg px-4 py-2 text-sm flex items-center gap-2">
                    <span style={{ color: "var(--brand-text-gray)" }}>Available on</span>
                    {["🎵", "🎧", "🎙️", "📡"].map((e, i) => (
                      <span key={i} className="text-lg">{e}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i} variants={fadeUp} custom={i} className="brand-card-feature group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(212,132,90,0.12)" }}>
                      <Icon size={22} style={{ color: "var(--brand-orange)" }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--brand-text-gray)" }}>{f.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ───── TESTIMONIALS ───── */}
        <section className="py-20 md:py-28" style={{ background: "var(--brand-light)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center brand-section-heading"
              style={{ color: "var(--brand-text-dark)" }}
            >
              Stories from Our Awesome Listeners
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-3 text-center text-base"
              style={{ color: "var(--brand-text-gray)" }}
            >
              Our listeners share how they've connected with our stories and found value in every episode.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 max-w-3xl mx-auto"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div className="brand-testimonial-card">
                  <p className="text-lg leading-relaxed" style={{ color: "var(--brand-text-dark)" }}>
                    {TESTIMONIALS[testimonialIdx].text}
                  </p>
                  <div className="mt-6">
                    <p className="font-bold" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>
                      {TESTIMONIALS[testimonialIdx].name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--brand-text-gray)" }}>
                      {TESTIMONIALS[testimonialIdx].role}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-48 h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img src="/episode-4.png" alt="Testimonial" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setTestimonialIdx((testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="brand-icon-circle-outline"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--brand-orange)" }}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── HOSTS ───── */}
        <section id="host" className="py-20 md:py-28" style={{ background: "var(--brand-dark)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white brand-section-heading"
            >
              Meet Your <span className="brand-underline">Host</span>
              <br className="hidden sm:block" /> The Voice Behind the Mic
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 flex justify-center"
            >
              {HOSTS.map((h, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="flex items-center gap-8 max-w-lg w-full rounded-3xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--brand-border-dark)" }}>
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0" style={{ border: "3px solid var(--brand-orange)" }}>
                    <img
                      src={h.img}
                      alt={h.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>{h.name}</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--brand-text-gray)" }}>{h.role}</p>
                    <div className="flex gap-2 mt-4">
                      {[
                        { icon: "📷", href: "https://www.instagram.com/yourboyjevoy/" },
                        { icon: "🎬", href: "https://www.youtube.com/channel/UC05StWwLmKgw-XeaZGkWkSg/" },
                        { icon: "🌐", href: "https://www.jevoypalmer.com" },
                      ].map((social, j) => (
                        <a key={j} href={social.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition cursor-pointer text-xs">
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── PRICING ───── */}
        <section id="pricing" className="py-20 md:py-28" style={{ background: "var(--brand-light)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center brand-section-heading"
              style={{ color: "var(--brand-text-dark)" }}
            >
              Book Your <span className="brand-underline">Session</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 text-center text-base max-w-xl mx-auto"
              style={{ color: "var(--brand-text-gray)" }}
            >
              Whether you bring your own edit or want the full treatment, we&apos;ve got a studio package that fits your vision.
            </motion.p>

            {/* Cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {PRICING.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className={p.featured ? "brand-card-pricing-featured" : "brand-card-pricing"}
                >
                  {p.featured && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: "rgba(212,132,90,0.12)", color: "var(--brand-orange)" }}>
                      <Star size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>{p.plan}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--brand-text-gray)" }}>{p.desc}</p>
                  <hr className="my-5" style={{ borderColor: "var(--brand-border-light)" }} />
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--brand-text-dark)" }}>
                        <Volume2 size={16} style={{ color: "var(--brand-orange)" }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <span className="text-3xl font-bold" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>{p.price}</span>
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 w-full inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition"
                    style={{
                      border: p.featured ? "2px solid var(--brand-orange)" : "1px solid var(--brand-border-light)",
                      color: "var(--brand-text-dark)",
                      background: p.featured ? "rgba(212,132,90,0.05)" : "transparent",
                    }}
                  >
                    Book a Session
                    <span className="brand-icon-circle w-8 h-8"><ArrowUpRight size={16} /></span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── BLOGS ───── */}
        <section id="blog" className="py-20 md:py-28" style={{ background: "var(--brand-light)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center brand-section-heading"
              style={{ color: "var(--brand-text-dark)" }}
            >
              Stay <span className="brand-underline">Updated</span> with Our Blogs
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 text-center text-base max-w-xl mx-auto"
              style={{ color: "var(--brand-text-gray)" }}
            >
              Insights, stories, and lessons from the journey of building Mind Your Bizniz.
            </motion.p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 grid sm:grid-cols-2 gap-6"
            >
              {BLOGS.map((b, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="brand-card-blog group">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                    <img
                      src={b.img}
                      alt={b.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-xs text-white/80 mb-1">
                        <span>{b.date}</span>
                        {b.read && <><span>·</span><span>{b.read}</span></>}
                      </div>
                      <h3 className="text-white font-bold text-lg leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                        {b.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <a href="#" className="brand-btn-outline-dark">
                Browse More Blogs <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ───── NEWSLETTER ───── */}
        <section id="newsletter" className="py-20 md:py-28" style={{ background: "var(--brand-light)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2
                  variants={fadeUp}
                  custom={0}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold brand-section-heading"
                  style={{ color: "var(--brand-text-dark)" }}
                >
                  Stay in the Loop — Subscribe to the Newsletter!
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-text-gray)" }}>
                  Get updates on new episodes, behind-the-scenes content, and exclusive insights delivered straight to your inbox.
                </motion.p>
                <motion.div variants={fadeUp} custom={2} className="mt-8 flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-full text-sm border focus:outline-none focus:border-[var(--brand-orange)] transition"
                    style={{ borderColor: "var(--brand-border-light)", background: "white" }}
                  />
                  <button className="brand-btn-primary px-6">Join</button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto" style={{ background: "var(--brand-orange)" }}>
                    <img src="/jevoy-portrait.jpg" alt="Jevoy Palmer" className="w-full h-full object-cover" />
                  </div>
                  {/* Floating stat */}
                  <div className="absolute bottom-[-16px] right-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">
                    <div>
                      <p className="font-bold text-xl" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>Growing</p>
                      <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>Loyal Listeners</p>
                    </div>
                    <div className="border-l pl-4" style={{ borderColor: "var(--brand-border-light)" }}>
                      <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>Available on</p>
                      <div className="flex gap-1 mt-1">
                        {["🎵", "🎧", "🎙️", "📡"].map((e, i) => (
                          <span key={i} className="text-sm">{e}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── FOOTER ───── */}
        <footer style={{ background: "var(--brand-dark)" }} className="pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10">
                    <img src="/logo-orange.png" alt="Logo" className="w-7 h-7 object-contain" />
                  </div>
                  <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Mind Your Bizniz</span>
                </div>
                <p className="text-sm" style={{ color: "var(--brand-text-gray)" }}>Follow the journey</p>
                <div className="flex gap-3 mt-3">
                  {[
                    { icon: "📷", href: "https://www.instagram.com/yourboyjevoy/" },
                    { icon: "🎬", href: "https://www.youtube.com/channel/UC05StWwLmKgw-XeaZGkWkSg/" },
                    { icon: "🎨", href: "https://www.patreon.com/c/yourboyjevoy" },
                    { icon: "🌐", href: "https://www.jevoypalmer.com" },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition cursor-pointer text-sm">
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm" style={{ color: "var(--brand-text-gray)" }}>
                  <p>hello@mindyourbizniz.co</p>
                  <p>Seattle, Washington</p>
                </div>
              </div>

              {/* Links */}
              {[
                { title: "Company", links: ["About Jevoy", "Palmer House Productions", "Newsletter", "Blog"] },
                { title: "Quick Links", links: ["Home", "Episodes", "Studio Packages"] },
                { title: "Useful Links", links: ["Contact", "Privacy Policy", "Terms & Conditions"] },
                { title: "Listen on", links: ["Spotify", "Apple Podcasts", "YouTube", "RSS Feed"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: "var(--font-heading)" }}>{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm hover:text-[var(--brand-orange)] transition" style={{ color: "var(--brand-text-gray)" }}>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 text-center text-sm" style={{ borderColor: "rgba(255,255,255,0.08)", color: "var(--brand-text-gray)" }}>
              © 2025 Mind Your Bizniz. A Jevoy Palmer Production. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};


export default Index;

