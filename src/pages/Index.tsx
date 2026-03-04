import { motion } from "framer-motion";
import { Youtube, Headphones, Music, Instagram, Mail, ArrowRight, Mic, ChevronRight, Sun, Moon, Play } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";
import banner from "@/assets/banner.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const YOUTUBE_CHANNEL = "https://www.youtube.com/channel/UCIooy5oeRT1FFYSWr9KbneA";
const SPOTIFY_LINK = "#";
const APPLE_LINK = "#";
const INSTAGRAM_LINK = "#";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Episodes", href: "#episodes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const TOPICS = [
  "Entrepreneurship and business growth",
  "Content, branding, and visibility",
  "Systems, habits, and execution",
  "Real-life lessons behind leadership",
  "Creativity, identity, and personal growth",
  "Honest conversations with founders, builders, and thinkers",
];

const EPISODES = [
  {
    title: "The Cost of Building While Becoming",
    hook: "What nobody tells you about growing a business while still figuring out who you are.",
  },
  {
    title: "Why Most Founders Stay Busy and Still Don't Grow",
    hook: "The trap of productivity without direction — and how to escape it.",
  },
  {
    title: "The Truth About Confidence, Content, and Consistency",
    hook: "Why showing up matters more than showing off.",
  },
];

const PLATFORMS = [
  { name: "YouTube", icon: Youtube, href: YOUTUBE_CHANNEL },
  { name: "Spotify", icon: Headphones, href: SPOTIFY_LINK },
  { name: "Apple Podcasts", icon: Music, href: APPLE_LINK },
  { name: "Instagram", icon: Instagram, href: INSTAGRAM_LINK },
];

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="Mind Your Bizniz" className="h-8 w-auto dark:invert" />
            <span className="font-heading font-bold text-sm tracking-wider hidden sm:inline">MYB PODCAST</span>
          </a>
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:inline"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 hidden dark:block" />
              <Moon className="w-5 h-5 block dark:hidden" />
            </button>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="px-4 sm:px-6 pt-6 pb-0">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_340px] gap-6">
            {/* Main hero card */}
            <motion.div
              className="relative bg-hero-warm rounded-3xl overflow-hidden min-h-[500px] md:min-h-[560px] flex flex-col justify-end p-8 md:p-12"
              initial="hidden" animate="visible" variants={fadeUp} custom={0}
            >
              {/* Banner image */}
              <div className="absolute inset-0">
                <img src={banner} alt="" className="w-full h-full object-cover opacity-60" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(43_55%_82%)] via-[hsl(43_55%_82%/0.6)] to-transparent dark:from-[hsl(43_30%_18%)] dark:via-[hsl(43_30%_18%/0.6)]" />
              </div>

              <div className="relative z-10">
                {/* Available on */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-heading font-semibold text-foreground/70 uppercase tracking-wider">Available on</span>
                  <div className="flex gap-2">
                    {PLATFORMS.map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-card transition-colors"
                      >
                        <p.icon className="w-4 h-4 text-foreground" />
                      </a>
                    ))}
                  </div>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-0">
                  Real talk for<br />
                  people building<br />
                  <span className="text-gradient-gold">something real</span>
                </h1>
              </div>

              {/* Mini player bar */}
              <motion.div
                className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-card/80 backdrop-blur-lg rounded-2xl p-3 pr-6 flex items-center gap-3 shadow-lg"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <Mic className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-foreground">Latest Episode</p>
                  <p className="text-xs text-muted-foreground">New every week</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar card */}
            <motion.div
              className="hidden lg:flex flex-col gap-6"
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
            >
              {/* Featured image card */}
              <div className="bg-card rounded-3xl overflow-hidden flex-1 flex flex-col">
                <div className="aspect-square bg-secondary rounded-3xl overflow-hidden flex items-center justify-center">
                  <img src={logo} alt="Mind Your Bizniz" className="w-24 h-24 dark:invert opacity-60" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-base mb-1">Mind Your Bizniz</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Business, creativity, mindset, and the real lessons behind building something meaningful.
                  </p>
                </div>
              </div>

              {/* Topic tags */}
              <div className="bg-card rounded-3xl p-5">
                <h4 className="font-heading font-semibold text-sm mb-3 text-muted-foreground">Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {["Business", "Branding", "Mindset", "Leadership", "Growth", "Creativity"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-xs font-heading font-medium"
                    >
                      ✦ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section id="episodes" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-2">
                Listen our<br />best episodes
              </h2>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mt-2 transition-colors"
              >
                View all <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
                Real conversations about business, creativity, growth, and the messy truth behind building something that matters.
              </p>
            </motion.div>

            <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0">
              {EPISODES.map((ep, i) => (
                <motion.div
                  key={ep.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-card rounded-2xl overflow-hidden min-w-[240px] max-w-[260px] flex-shrink-0 border border-border hover:shadow-lg transition-shadow group"
                >
                  <div className="p-5 flex flex-col h-full">
                    <span className="text-xs text-muted-foreground font-heading font-medium mb-1">Episode {i + 1}</span>
                    <h3 className="font-heading font-bold text-sm mb-2 leading-snug">{ep.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4 flex-1">{ep.hook}</p>
                    <a
                      href={YOUTUBE_CHANNEL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
                    >
                      <Play className="w-4 h-4 ml-0.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What This Podcast Is */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Business Talk With a Brain
              <br />
              <span className="text-gradient-gold">and a Backbone</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            Mind Your Bizniz is a podcast built for founders, creators, entrepreneurs, and people trying to build something real without losing themselves in the process. This is where strategy meets storytelling, business meets life, and practical lessons collide with honest conversations.
          </motion.p>
          <motion.div
            className="grid sm:grid-cols-2 gap-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {TOPICS.map((topic, i) => (
              <motion.div
                key={topic}
                variants={fadeUp}
                custom={i * 0.5}
                className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground text-sm">{topic}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6 bg-card/50">
        <div className="container mx-auto text-center">
          <motion.h2
            className="font-heading text-3xl md:text-5xl font-bold mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Watch or Listen
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            Choose your favorite platform and tap in.
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {PLATFORMS.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group"
              >
                <platform.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="font-heading font-semibold text-sm">{platform.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="font-heading text-3xl md:text-5xl font-bold mb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Why This <span className="text-gradient-gold">Exists</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            This podcast exists to explore the real side of building a business and a life. Not just the polished wins, but the tradeoffs, the blind spots, the pivots, the tension, and the growth that comes from choosing to keep going.
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          >
            Mind Your Bizniz is for people who want more than generic advice. It's for builders who care about clarity, truth, strategy, and becoming someone strong enough to carry what they're trying to create.
          </motion.p>
        </div>
      </section>

      {/* Guest / Sponsor CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="font-heading text-3xl md:text-5xl font-bold mb-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Want to Be a Guest
            <br />
            <span className="text-gradient-gold">or Collaborate?</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            Interested in being featured on the show, collaborating, or exploring sponsorship opportunities? Reach out and tell us who you are, what you do, and why the conversation would matter.
          </motion.p>
          <motion.a
            href="mailto:hello@mindyourbiznizpodcast.com"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-heading font-bold text-lg hover:opacity-90 transition-opacity"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          >
            <Mail className="w-5 h-5" /> Contact the Show
          </motion.a>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-xl text-center">
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Stay in the <span className="text-gradient-gold">Loop</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            Get new episodes, featured clips, and occasional insights delivered without the social-media circus.
          </motion.p>
          <motion.form
            className="flex flex-col gap-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="First name"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-body"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-body"
            />
            <button
              type="submit"
              className="w-full bg-foreground text-background px-6 py-3.5 rounded-xl font-heading font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Mind Your Bizniz" className="h-10 w-auto dark:invert" />
              <span className="font-heading font-bold tracking-wider">MIND YOUR BIZNIZ</span>
            </div>
            <div className="flex items-center gap-4">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <p.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mind Your Bizniz Podcast. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
