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
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const HONEYBOOK_PID = "64f18afafb99b50197686f91";
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
  { num: "01", host: "Jevoy Palmer", title: "Why I Started Mind Your Bizniz", tags: "Entrepreneurship", time: "38 mins", img: "/episode-1.png" },
  { num: "02", host: "Jevoy Palmer", title: "Building a Brand From Scratch", tags: "Branding & Strategy", time: "42 mins", img: "/episode-2.png" },
  { num: "03", host: "Jevoy Palmer", title: "The Creative Entrepreneur's Playbook", tags: "Creativity & Business", time: "30 mins", img: "/episode-3.png" },
  { num: "04", host: "Jevoy Palmer", title: "Systems Over Hustle", tags: "Growth & Mindset", time: "45 mins", img: "/episode-4.png" },
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
  { icon: Headphones, title: "Studio-Grade Audio", desc: "Every episode is recorded and mixed in our professional studio, ensuring crisp, cinematic sound quality." },
  { icon: Bell, title: "New Episodes Dropping", desc: "Subscribe to stay in the loop. Every new conversation is a chance to learn, grow, and get inspired." },
  { icon: Volume2, title: "Full Production Support", desc: "From filming to editing to final export — we offer tiered production packages so you can focus on your message." },
];

const TESTIMONIALS = [
  { text: "Jevoy brings an energy and authenticity to every conversation. Mind Your Bizniz is the podcast I didn't know I needed.", name: "Early Listener", role: "Entrepreneur" },
  { text: "The production quality is insane for a new podcast. You can tell there's real craft behind every episode.", name: "Community Member", role: "Creative Professional" },
  { text: "Real talk, real stories, real growth. This is the kind of content the world needs more of.", name: "Supporter", role: "Business Owner" },
];

const HOSTS = [
  { name: "Jevoy Palmer", role: "Host, Creative Strategist & Next Level CEO Cast", img: "/jevoy-portrait.jpg" },
];

const PRICING = [
  { plan: "Space Only", desc: "Book the studio, bring your vision, and walk away with raw files to edit on your own.", features: ["Studio rental access", "Professional equipment", "Raw file delivery"], price: "Contact", featured: false },
  { plan: "Production Partner", desc: "We film your session and our team handles editing, sound mixing, and color grading.", features: ["Everything in Space Only", "Professional editing", "Sound mixing & color grading"], price: "Contact", featured: true },
  { plan: "Full Service", desc: "We handle everything — filming, editing, sound, thumbnails, social cuts, and distribution-ready exports.", features: ["Everything in Production Partner", "Custom thumbnails & social cuts", "Distribution-ready exports"], price: "Contact", featured: false },
];

/* ─── COMPONENT ───────────────────────── */

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!(window as any)._HB_) (window as any)._HB_ = {};
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

  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--brand-surface)" }}>

        {/* ───── HERO ───── */}
        <section
          id="home"
          className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
          style={{ background: "var(--brand-surface-accent)" }}
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate={!loading ? "visible" : "hidden"} className="relative z-10">
              <motion.h1
                variants={fadeUp}
                custom={0}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--brand-text-accent)" }}
              >
                Turn Ideas Into{" "}
                <span className="relative inline-block">
                  Episodes
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    style={{ height: "10px" }}
                  >
                    <motion.path
                      d="M2 8 C40 2, 60 12, 100 6 S160 2, 198 8"
                      stroke="var(--brand-orange)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={!loading ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.svg>
                </span>
                , Dreams Into Reality
              </motion.h1>
              <motion.p variants={fadeUp} custom={1} className="mt-5 text-base md:text-lg" style={{ color: "var(--brand-text-accent-secondary)" }}>
                Real conversations about entrepreneurship, creativity, and what it takes to build something from nothing. Hosted by Jevoy Palmer.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={1.5}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{ background: "rgba(212,132,90,0.15)", color: "var(--brand-orange)", border: "1px solid rgba(212,132,90,0.3)" }}
              >
                🎬 Coming Soon: Cast on Daymond John&apos;s Next Level CEO — Inside Success TV
              </motion.div>
              <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#episode"
                  className="brand-btn-primary"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(212,132,90,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Start Listening <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                </motion.a>
                <motion.a
                  href="#episode"
                  className="brand-btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Browse Episodes <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                </motion.a>
              </motion.div>
              <motion.div variants={fadeUp} custom={3} className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[var(--brand-surface-accent)] overflow-hidden"
                      initial={{ opacity: 0, x: -10 }}
                      animate={!loading ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                    >
                      <img src={`/episode-${i}.png`} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <span className="font-bold text-lg" style={{ color: "var(--brand-text-accent)", fontFamily: "var(--font-heading)" }}>Growing Fast</span>
                  <p className="text-sm" style={{ color: "var(--brand-text-accent-secondary)" }}>Engaged Community</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right – Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={!loading ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <motion.img
                  src="/hero-person.png"
                  alt="Podcast listener"
                  className="w-full max-w-md rounded-3xl object-cover"
                  animate={!loading ? { y: [0, -6, 0] } : {}}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                />
                {/* Floating player card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, x: -20 }}
                  animate={!loading ? { opacity: 1, y: [0, -8, 0], x: 0 } : {}}
                  transition={{ 
                    opacity: { delay: 1, duration: 0.6 },
                    x: { delay: 1, duration: 0.6 },
                    y: { delay: 1.6, duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute bottom-8 left-0 md:-left-8 rounded-2xl shadow-xl p-3 flex items-center gap-3 min-w-[260px]"
                  style={{ background: "var(--brand-surface-elevated)" }}
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="/episode-3.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: "var(--brand-text-primary)" }}>Mind Your Bizniz</p>
                    <p className="text-xs" style={{ color: "var(--brand-text-secondary)" }}>Now Playing</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs" style={{ color: "var(--brand-text-secondary)" }}>2:46</span>
                      <div className="flex-1 h-1 rounded-full" style={{ background: "var(--brand-border)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "var(--brand-orange)" }}
                          initial={{ width: "0%" }}
                          animate={!loading ? { width: "66%" } : {}}
                          transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-xs" style={{ color: "var(--brand-text-secondary)" }}>-1:22</span>
                    </div>
                  </div>
                </motion.div>

                {/* Episode count badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                  animate={!loading ? { opacity: 1, scale: 1, rotate: [0, 2, -2, 0], y: [0, -10, 0] } : {}}
                  transition={{ 
                    opacity: { delay: 1.2, duration: 0.5 },
                    scale: { delay: 1.2, duration: 0.5, type: "spring", stiffness: 200 },
                    rotate: { delay: 2, duration: 6, repeat: Infinity, ease: "easeInOut" },
                    y: { delay: 2, duration: 5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute top-8 right-0 md:-right-4 rounded-2xl shadow-xl p-3 flex items-center gap-3"
                  style={{ background: "var(--brand-surface-elevated)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(212,132,90,0.15)" }}>
                    <Mic size={18} style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <div>
                    <span className="font-bold text-lg" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>Fresh Content</span>
                    <p className="text-xs" style={{ color: "var(--brand-text-secondary)" }}>Episodes Weekly</p>
                  </div>
                </motion.div>

                {/* Decorative doodle */}
                <motion.svg
                  className="absolute -top-8 left-1/3 w-10 h-10" style={{ color: "var(--brand-text-accent-secondary)" }}
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={!loading ? { opacity: 1, rotate: [0, 15, -15, 0], y: [0, -6, 0] } : {}}
                  transition={{ 
                    opacity: { delay: 1.5, duration: 0.6 },
                    rotate: { delay: 2, duration: 8, repeat: Infinity, ease: "easeInOut" },
                    y: { delay: 2, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <path d="M10 30 Q20 10 30 30" /><path d="M15 28 Q22 12 28 28" />
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── EPISODES ───── */}
        <section id="episode" className="py-20 md:py-28" style={{ background: "var(--brand-surface)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center brand-section-heading"
              style={{ color: "var(--brand-text-primary)" }}
            >
              Discover the Latest{" "}
              <span className="brand-underline">Episodes</span>
              <br className="hidden sm:block" /> and Featured Highlights
            </motion.h2>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 grid sm:grid-cols-2 gap-6">
              {EPISODES.map((ep, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="brand-card-episode group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={ep.img} alt={ep.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--brand-text-secondary)" }}>
                      <Mic size={14} style={{ color: "var(--brand-orange)" }} />
                      <span>Episode {ep.num}</span>
                      <span className="font-medium" style={{ color: "var(--brand-text-primary)" }}>{ep.host}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{ep.title}</h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--brand-text-secondary)" }}>{ep.tags}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm" style={{ color: "var(--brand-text-secondary)" }}>
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

            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 text-center">
              <a href="#" className="brand-btn-primary">
                Browse More Episodes <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ───── ABOUT ───── */}
        <section id="aboutus" className="py-20 md:py-28" style={{ background: "var(--brand-surface-alt)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                  <img src="/jevoy-portrait.jpg" alt="Jevoy Palmer" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm">
                    The Story Behind the Mic
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--brand-orange)" }}>
                      <Play size={14} className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.p variants={fadeUp} custom={0} className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--brand-text-secondary)" }}>
                  The Story Behind the Mic
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="mt-3 text-3xl md:text-4xl font-bold brand-section-heading" style={{ color: "var(--brand-text-primary)" }}>
                  Jamaican-Born, Seattle-Based. Building Something Real.
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>
                  I&apos;m Jevoy Palmer — filmmaker, entrepreneur, and creative strategist. I run Palmer House Productions (cinematic video systems for founders), the YourBoyJevoy creative lab, and beSettld (lifestyle support for seniors and busy professionals). Accepted into Daymond John&apos;s Next Level CEO on Inside Success TV — coming soon.
                </motion.p>
                <motion.ul variants={fadeUp} custom={3} className="mt-6 space-y-3">
                  {["Cast on Daymond John's Next Level CEO", "Studio-grade production quality", "Real conversations, real growth"].map((item) => (
                    <li key={item} className="flex items-center gap-3" style={{ color: "var(--brand-text-primary)" }}>
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
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 rounded-2xl p-8" style={{ background: "var(--brand-surface-muted)" }}>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
                <span className="text-sm font-medium" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>Listen on</span>
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
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{s.val}</p>
                    <p className="text-sm mt-1" style={{ color: "var(--brand-text-secondary)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── CATEGORIES ───── */}
        <section className="py-20 md:py-28" style={{ background: "var(--brand-surface-accent)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-bold brand-section-heading" style={{ color: "var(--brand-text-accent)" }}>
                Discover Podcasts That
                <br /> Match Your <span className="brand-underline">Mood</span>!
              </motion.h2>
              <motion.a variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} href="#" className="brand-btn-primary whitespace-nowrap">
                Browse All Categories <span className="brand-icon-circle w-7 h-7 bg-white text-[var(--brand-text-primary)]"><ArrowUpRight size={16} /></span>
              </motion.a>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-5">
              {CATEGORIES.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div key={i} variants={fadeUp} custom={i} className={`rounded-[1.25rem] p-8 transition-all cursor-pointer ${cat.wide ? "sm:col-span-2" : ""}`} style={{ background: "var(--brand-surface-accent-card)", border: "1px solid var(--brand-border-accent)" }}>
                    <div className="flex items-start justify-between mb-10">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,132,90,0.15)" }}>
                        <Icon size={22} style={{ color: "var(--brand-orange)" }} />
                      </div>
                      <ArrowUpRight size={20} style={{ color: "var(--brand-text-accent-secondary)" }} />
                    </div>
                    <h3 className="font-bold text-lg" style={{ color: "var(--brand-text-accent)", fontFamily: "var(--font-heading)" }}>{cat.name}</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--brand-text-accent-secondary)" }}>{cat.episodes}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="w-7 h-7 rounded-full border-2 overflow-hidden" style={{ borderColor: "var(--brand-surface-accent-card)" }}>
                            <img src={`/episode-${j}.png`} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-sm" style={{ color: "var(--brand-text-accent-secondary)" }}>Growing Community</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ───── FEATURES ───── */}
        <section className="py-20 md:py-28" style={{ background: "var(--brand-surface)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl lg:text-5xl font-bold brand-section-heading" style={{ color: "var(--brand-text-primary)" }}>
                  Features That Enhance Your Listening{" "}
                  <span className="brand-underline">Experience</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="mt-5 text-base leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>
                  Hello there! Dive into these amazing features designed to elevate your listening experience to new heights!
                </motion.p>
                <motion.div variants={fadeUp} custom={2} className="mt-8">
                  <a href="#episode" className="brand-btn-outline-dark">
                    Browse Episodes <span className="brand-icon-circle w-7 h-7"><ArrowUpRight size={16} /></span>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto" style={{ background: "rgba(212,132,90,0.15)" }}>
                    <img src="/hero-person.png" alt="Features" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-4 left-0 rounded-full shadow-lg px-4 py-2 flex items-center gap-2 text-sm" style={{ background: "var(--brand-surface-elevated)" }}>
                    <div className="flex -space-x-1">
                      {[1, 2].map((j) => (
                        <div key={j} className="w-6 h-6 rounded-full overflow-hidden" style={{ border: "2px solid var(--brand-surface-elevated)" }}>
                          <img src={`/episode-${j}.png`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="font-semibold" style={{ color: "var(--brand-text-primary)" }}>Join the Community</span>
                  </div>
                  <div className="absolute top-8 right-0 rounded-full shadow-lg px-4 py-2 text-sm flex items-center gap-2" style={{ background: "var(--brand-surface-elevated)" }}>
                    <span style={{ color: "var(--brand-text-secondary)" }}>Available on</span>
                    {["🎵", "🎧", "🎙️", "📡"].map((e, i) => (
                      <span key={i} className="text-lg">{e}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature cards */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i} variants={fadeUp} custom={i} className="brand-card-feature group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(212,132,90,0.12)" }}>
                      <Icon size={22} style={{ color: "var(--brand-orange)" }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>{f.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ───── TESTIMONIALS ───── */}
        <section className="py-20 md:py-28" style={{ background: "var(--brand-surface-alt)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center brand-section-heading" style={{ color: "var(--brand-text-primary)" }}>
              Stories from Our Awesome Listeners
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-3 text-center text-base" style={{ color: "var(--brand-text-secondary)" }}>
              Our listeners share how they've connected with our stories and found value in every episode.
            </motion.p>

            <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div className="brand-testimonial-card">
                  <p className="text-lg leading-relaxed" style={{ color: "var(--brand-text-primary)" }}>
                    {TESTIMONIALS[testimonialIdx].text}
                  </p>
                  <div className="mt-6">
                    <p className="font-bold" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>
                      {TESTIMONIALS[testimonialIdx].name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--brand-text-secondary)" }}>
                      {TESTIMONIALS[testimonialIdx].role}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-48 h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img src="/episode-4.png" alt="Testimonial" className="w-full h-full object-cover" />
                </div>
              </div>

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
        <section id="host" className="py-20 md:py-28" style={{ background: "var(--brand-surface-accent)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center brand-section-heading" style={{ color: "var(--brand-text-accent)" }}>
              Meet Your <span className="brand-underline">Host</span>
              <br className="hidden sm:block" /> The Voice Behind the Mic
            </motion.h2>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 flex justify-center">
              {HOSTS.map((h, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="flex items-center gap-8 max-w-lg w-full rounded-3xl p-6" style={{ background: "var(--brand-surface-accent-card)", border: "1px solid var(--brand-border-accent)" }}>
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0" style={{ border: "3px solid var(--brand-orange)" }}>
                    <img src={h.img} alt={h.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" style={{ color: "var(--brand-text-accent)", fontFamily: "var(--font-heading)" }}>{h.name}</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--brand-text-accent-secondary)" }}>{h.role}</p>
                    <div className="flex gap-2 mt-4">
                      {[
                        { icon: Instagram, href: "https://www.instagram.com/yourboyjevoy/" },
                        { icon: Youtube, href: "https://www.youtube.com/channel/UCIooy5oeRT1FFYSWr9KbneA" },
                        { icon: Globe, href: "https://www.jevoypalmer.com" },
                      ].map((social, j) => (
                        <a key={j} href={social.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition cursor-pointer" style={{ border: "1px solid var(--brand-border-accent)", color: "var(--brand-text-accent-secondary)" }}>
                          <social.icon size={14} />
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
        <section id="pricing" className="py-20 md:py-28" style={{ background: "var(--brand-surface)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center brand-section-heading" style={{ color: "var(--brand-text-primary)" }}>
              Book Your <span className="brand-underline">Session</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-center text-base max-w-xl mx-auto" style={{ color: "var(--brand-text-secondary)" }}>
              Whether you bring your own edit or want the full treatment, we&apos;ve got a studio package that fits your vision.
            </motion.p>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING.map((p, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className={p.featured ? "brand-card-pricing-featured" : "brand-card-pricing"}>
                  {p.featured && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: "rgba(212,132,90,0.12)", color: "var(--brand-orange)" }}>
                      <Star size={12} /> Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{p.plan}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>{p.desc}</p>
                  <hr className="my-5" style={{ borderColor: "var(--brand-border)" }} />
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--brand-text-primary)" }}>
                        <Volume2 size={16} style={{ color: "var(--brand-orange)" }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <span className="text-3xl font-bold" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>{p.price}</span>
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 w-full inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition"
                    style={{
                      border: p.featured ? "2px solid var(--brand-orange)" : "1px solid var(--brand-border)",
                      color: "var(--brand-text-primary)",
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

        {/* ───── NEWSLETTER ───── */}
        <section id="newsletter" className="py-20 md:py-28" style={{ background: "var(--brand-surface-alt)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl lg:text-5xl font-bold brand-section-heading" style={{ color: "var(--brand-text-primary)" }}>
                  Stay in the Loop — Subscribe to the Newsletter!
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="mt-4 text-base leading-relaxed" style={{ color: "var(--brand-text-secondary)" }}>
                  Get updates on new episodes, behind-the-scenes content, and exclusive insights delivered straight to your inbox.
                </motion.p>
                <motion.div variants={fadeUp} custom={2} className="mt-8">
                  <div className="hb-p-64f18afafb99b50197686f91-3"></div>
                  <img height="1" width="1" style={{ display: "none" }} src="https://www.honeybook.com/p.png?pid=64f18afafb99b50197686f91" alt="" />
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto" style={{ background: "var(--brand-orange)" }}>
                    <img src="/jevoy-portrait.jpg" alt="Jevoy Palmer" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-[-16px] right-0 rounded-2xl shadow-xl p-4 flex items-center gap-4" style={{ background: "var(--brand-surface-elevated)" }}>
                    <div>
                      <p className="font-bold text-xl" style={{ color: "var(--brand-text-primary)", fontFamily: "var(--font-heading)" }}>Growing</p>
                      <p className="text-xs" style={{ color: "var(--brand-text-secondary)" }}>Loyal Listeners</p>
                    </div>
                    <div className="border-l pl-4" style={{ borderColor: "var(--brand-border)" }}>
                      <p className="text-xs" style={{ color: "var(--brand-text-secondary)" }}>Available on</p>
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

      </div>
    </>
  );
};


export default Index;
