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
    host: "Max Hudson",
    title: "Mindful Growth in Everyday Life",
    tags: "Mental Health, Personal Development",
    time: "1 hr 24 mins",
    img: "/episode-1.png",
  },
  {
    num: "02",
    host: "Max Hudson",
    title: "Cool Side Hustles That Became Million-Dollar Successes",
    tags: "Personal Development",
    time: "90 mins",
    img: "/episode-2.png",
  },
  {
    num: "11",
    host: "Max Hudson",
    title: "The Dopamine Experiment",
    tags: "Science and Nature",
    time: "30 mins",
    img: "/episode-3.png",
  },
  {
    num: "03",
    host: "Ethan Carter",
    title: "The Art of Deep Work",
    tags: "Personal Development",
    time: "45 mins",
    img: "/episode-4.png",
  },
];

const CATEGORIES = [
  { name: "Technology", episodes: 378, icon: Monitor, wide: true },
  { name: "Comedy", episodes: 378, icon: Smile, wide: false },
  { name: "Design and Development", episodes: 378, icon: PenTool, wide: false },
  { name: "Health & Fitness", episodes: 158, icon: Heart, wide: false },
  { name: "Business", episodes: 402, icon: Briefcase, wide: false },
  { name: "Education", episodes: 694, icon: GraduationCap, wide: false },
];

const FEATURES = [
  {
    icon: Headphones,
    title: "Seamless Streaming",
    desc: "Enjoy your music anywhere, anytime! Whether at home, commuting, or relaxing in the park, let the tunes lift your spirits!",
  },
  {
    icon: Bell,
    title: "Episode Notifications",
    desc: "Stay updated with your favorite podcasts! Click subscribe for instant alerts on new episodes and enjoy your listening experience!",
  },
  {
    icon: Volume2,
    title: "High-Quality Audio",
    desc: "Get ready for awesome sound that totally amps up your music and podcasts! This setup makes every tune and episode unforgettable.",
  },
];

const TESTIMONIALS = [
  {
    text: "These podcasts are fantastic! They cover a variety of topics, making each episode exciting. Can't wait for the next one!",
    name: "Kristin Watson",
    role: "Marketing Specialist",
  },
  {
    text: "I love these podcasts! Each episode covers diverse topics, making them fun. Can't wait for the next one!",
    name: "Sarah Chen",
    role: "Expert Product Designer",
  },
  {
    text: "The audio quality and storytelling are absolutely top-notch. I'm completely hooked on every episode they release!",
    name: "James Rodriguez",
    role: "Content Creator",
  },
];

const HOSTS = [
  { name: "Max Hudson", role: "Documentary Maker", img: "/episode-3.png" },
  { name: "Ethan Carter", role: "Tech Analyst & Podcast Host", img: "/episode-4.png" },
  { name: "Mason Clarke", role: "Health & Wellness Coach", img: "/host-3.png" },
];

const PRICING = [
  {
    plan: "Individual Plan",
    desc: "Enjoy ad-free music and offline playlists with one easy account!",
    features: ["Basic audio quality", "Access to all free podcasts", "Create and save playlists"],
    price: "$0.00",
    featured: false,
  },
  {
    plan: "Professional Plan",
    desc: "Get rid of ads, download stuff offline, and manage your account like a pro!",
    features: ["Ad-free listening", "High-quality audio", "Early access to new episodes"],
    price: "$9.99",
    featured: true,
  },
  {
    plan: "Premium Plan",
    desc: "Get all the cool perks with just one account, like no ads and offline listening.",
    features: ["All advanced features", "Exclusive content and podcasts", "Access to live podcast events"],
    price: "$19.99",
    featured: false,
  },
];

const BLOGS = [
  {
    title: "Breaking Down the Headlines: Best Podcasts for Current Affairs",
    date: "January 26, 24",
    read: "20 mins read",
    img: "/episode-1.png",
  },
  {
    title: "The Ultimate Guide to Finding Your Perfect Podcast",
    date: "April 18, 2025",
    read: "10 mins read",
    img: "/episode-2.png",
  },
  {
    title: "Essential Podcast Apps and Tools for Every Listener",
    date: "April 8, 2025",
    read: "10 mins read",
    img: "/episode-3.png",
  },
  {
    title: "The Best Podcasts to Inspire, Educate, and Entertain",
    date: "March 13, 2025",
    read: "04 mins read",
    img: "/episode-4.png",
  },
];

/* ─── COMPONENT ───────────────────────── */

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingTab, setPricingTab] = useState<"monthly" | "annually">("monthly");
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
                <img src="/logo-white.png" alt="Logo" className="w-7 h-7 object-contain" />
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
                Subscribe <span className="brand-icon-circle w-6 h-6 text-xs"><ArrowUpRight size={14} /></span>
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
                Subscribe <ArrowUpRight size={14} />
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
                Check out some awesome podcasts packed with cool stories and insights. You might just find your new favorite!
              </motion.p>
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
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>20M+</span>
                  <p className="text-sm" style={{ color: "var(--brand-text-gray)" }}>Online Listeners</p>
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
                    <p className="text-sm font-semibold text-[var(--brand-text-dark)] truncate">The Curious Mind Podcast</p>
                    <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>Kristin Watson</p>
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
                    <span className="font-bold text-lg text-[var(--brand-text-dark)]" style={{ fontFamily: "var(--font-heading)" }}>150K</span>
                    <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>Episode Available</p>
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
                  <img src="/episode-3.png" alt="About us" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm">
                    Discover the Journey Behind Us
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
                  Discover the Journey Behind Us
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="mt-3 text-3xl md:text-4xl font-bold brand-section-heading"
                  style={{ color: "var(--brand-text-dark)" }}
                >
                  Discover the Passion Behind Our Podcast Journey
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-text-gray)" }}>
                  We&apos;re dedicated to uniting people through our engaging podcasts, where we share incredible stories and showcase a diverse range of voices.
                </motion.p>
                <motion.ul variants={fadeUp} custom={3} className="mt-6 space-y-3">
                  {["Personalized playlists", "Awesome audio streaming vibes!"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[var(--brand-text-dark)]">
                      <Star size={18} style={{ color: "var(--brand-orange)" }} /> {item}
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUp} custom={4} className="mt-8">
                  <a href="#" className="brand-btn-outline-dark">
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
                  { val: "150K+", label: "Episode released" },
                  { val: "12M+", label: "Online subscriber" },
                  { val: "20M+", label: "Worldwide Listeners" },
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
                    <p className="text-sm mt-1" style={{ color: "var(--brand-text-gray)" }}>{cat.episodes} Episode Available</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="w-7 h-7 rounded-full border-2 border-[var(--brand-dark-card)] overflow-hidden">
                            <img src={`/episode-${j}.png`} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm" style={{ color: "var(--brand-text-gray)" }}>20M+ Listeners</span>
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
                    <span className="font-semibold text-[var(--brand-text-dark)]">12M+ Subscriber</span>
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
              Meet Our <span className="brand-underline">Hosts</span> That Make
              <br className="hidden sm:block" /> Every Story Shine
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {HOSTS.map((h, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="brand-card-host group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden" style={{ border: "1px solid var(--brand-border-dark)" }}>
                    <img
                      src={h.img}
                      alt={h.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>{h.name}</h3>
                      <p className="text-sm" style={{ color: "var(--brand-text-gray)" }}>{h.role}</p>
                    </div>
                    <div className="flex gap-2">
                      {["𝕏", "📷", "🧵"].map((icon, j) => (
                        <div key={j} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition cursor-pointer text-xs">
                          {icon}
                        </div>
                      ))}
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
                Show Our All Hosts <span className="brand-icon-circle w-7 h-7 bg-white text-[var(--brand-text-dark)]"><ArrowUpRight size={16} /></span>
              </a>
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
              <span className="brand-underline">Upgrade</span> Your Listening Today
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
              Pick a plan that suits your vibe! Whether you&apos;re looking for free access or want to grab some cool premium perks, we&apos;ve got your back!
            </motion.p>

            {/* Toggle */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex items-center justify-center"
            >
              <div className="inline-flex rounded-full p-1" style={{ border: "1px solid var(--brand-border-light)" }}>
                <button
                  onClick={() => setPricingTab("monthly")}
                  className="px-6 py-2 rounded-full text-sm font-medium transition"
                  style={{
                    background: pricingTab === "monthly" ? "var(--brand-dark)" : "transparent",
                    color: pricingTab === "monthly" ? "white" : "var(--brand-text-gray)",
                  }}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setPricingTab("annually")}
                  className="px-6 py-2 rounded-full text-sm font-medium transition"
                  style={{
                    background: pricingTab === "annually" ? "var(--brand-dark)" : "transparent",
                    color: pricingTab === "annually" ? "white" : "var(--brand-text-gray)",
                  }}
                >
                  Annually
                </button>
              </div>
            </motion.div>

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
                    <span className="text-sm" style={{ color: "var(--brand-text-gray)" }}> /per month</span>
                  </p>
                  <a
                    href="#"
                    className="mt-6 w-full inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition"
                    style={{
                      border: p.featured ? "2px solid var(--brand-orange)" : "1px solid var(--brand-border-light)",
                      color: "var(--brand-text-dark)",
                      background: p.featured ? "rgba(212,132,90,0.05)" : "transparent",
                    }}
                  >
                    Start Listening with Subscribe
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
              Discover insights, tips, and the latest trends in the podcasting world. Stay informed and inspired with our curated articles.
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
                        <span>·</span>
                        <span>{b.read}</span>
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
                  Stay Updated and Subscribe to Our Newsletter!
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-text-gray)" }}>
                  Hey there! Join our newsletter for the latest updates, fun podcast recommendations, and some awesome content delivered straight to your inbox!
                </motion.p>
                <motion.div variants={fadeUp} custom={2} className="mt-8 flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-full text-sm border focus:outline-none focus:border-[var(--brand-orange)] transition"
                    style={{ borderColor: "var(--brand-border-light)", background: "white" }}
                  />
                  <button className="brand-btn-primary px-6">Subscribe</button>
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
                    <img src="/hero-person.png" alt="Newsletter" className="w-full h-full object-cover" />
                  </div>
                  {/* Floating stat */}
                  <div className="absolute bottom-[-16px] right-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">
                    <div>
                      <p className="font-bold text-xl" style={{ color: "var(--brand-text-dark)", fontFamily: "var(--font-heading)" }}>4,836</p>
                      <p className="text-xs" style={{ color: "var(--brand-text-gray)" }}>Total Listeners</p>
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
                    <img src="/logo-white.png" alt="Logo" className="w-7 h-7 object-contain" />
                  </div>
                  <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>Mind Your Bizniz</span>
                </div>
                <p className="text-sm" style={{ color: "var(--brand-text-gray)" }}>We&apos;re on social</p>
                <div className="flex gap-3 mt-3">
                  {["𝕏", "📷", "🧵", "📘"].map((icon, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition cursor-pointer text-sm">
                      {icon}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm" style={{ color: "var(--brand-text-gray)" }}>
                  <p>hello@mindyourbizniz.co</p>
                  <p>4886 Stroman Drive, South Stanton, California</p>
                </div>
              </div>

              {/* Links */}
              {[
                { title: "Company", links: ["About Us", "Our Host", "Newsletter", "Blog & Articles"] },
                { title: "Quick Links", links: ["Home", "Episodes", "Pricing Plan"] },
                { title: "Useful Links", links: ["Contact Us", "Privacy Policy", "Terms & Condition"] },
                { title: "Listen on", links: ["Google Podcasts", "Spotify", "Apple Podcasts", "RSS Feed"] },
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
              © Copyrights 2025 Mind Your Bizniz. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
