import { motion } from "framer-motion";
import { Youtube, Headphones, Music, Instagram, Mail, ArrowRight, Mic, ChevronRight, Sun, Moon } from "lucide-react";
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
const SPOTIFY_LINK = "#"; // Replace with actual Spotify link
const APPLE_LINK = "#"; // Replace with actual Apple Podcasts link
const INSTAGRAM_LINK = "#"; // Replace with actual Instagram link

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
  { name: "YouTube", icon: Youtube, href: YOUTUBE_CHANNEL, color: "hover:text-red-500" },
  { name: "Spotify", icon: Headphones, href: SPOTIFY_LINK, color: "hover:text-green-500" },
  { name: "Apple Podcasts", icon: Music, href: APPLE_LINK, color: "hover:text-purple-400" },
  { name: "Instagram", icon: Instagram, href: INSTAGRAM_LINK, color: "hover:text-pink-500" },
];

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 hidden dark:block" />
              <Moon className="w-5 h-5 block dark:hidden" />
            </button>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Watch Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={banner} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <img src={logo} alt="Mind Your Bizniz Podcast logo" className="h-24 md:h-32 mx-auto mb-8 dark:invert" />
          </motion.div>
          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            MIND YOUR
            <br />
            <span className="text-gradient-gold">BIZNIZ</span>
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl block mt-2">PODCAST</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            Real conversations about business, creativity, growth, and the messy truth behind building something that matters.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-md font-heading font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Youtube className="w-5 h-5" /> Watch on YouTube
            </a>
            <a
              href={SPOTIFY_LINK}
              className="flex items-center gap-2 border border-foreground/20 px-8 py-4 rounded-md font-heading font-semibold text-lg hover:border-accent hover:text-accent transition-colors"
            >
              <Headphones className="w-5 h-5" /> Listen on Spotify
            </a>
          </motion.div>
          <motion.p
            className="text-sm text-muted-foreground font-heading tracking-widest uppercase"
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
          >
            Sharp insight · Honest conversation · No fluff
          </motion.p>
        </div>
      </section>

      {/* What This Podcast Is */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
              Business Talk With a Brain
              <br />
              <span className="text-gradient-gold">and a Backbone</span>
            </h2>
          </motion.div>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            Mind Your Bizniz is a podcast built for founders, creators, entrepreneurs, and people trying to build something real without losing themselves in the process. This is where strategy meets storytelling, business meets life, and practical lessons collide with honest conversations.
          </motion.p>
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {TOPICS.map((topic, i) => (
              <motion.div
                key={topic}
                variants={fadeUp}
                custom={i * 0.5}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground">{topic}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 border-t border-border bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="font-heading text-3xl md:text-5xl font-bold mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Watch or Listen
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-12"
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
                className={`flex flex-col items-center gap-3 p-8 rounded-lg bg-card border border-border hover:border-accent/40 transition-all group ${platform.color}`}
              >
                <platform.icon className="w-8 h-8 transition-colors" />
                <span className="font-heading font-semibold text-sm">{platform.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Episodes */}
      <section id="episodes" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.h2
            className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Recent <span className="text-gradient-gold">Episodes</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {EPISODES.map((ep, i) => (
              <motion.div
                key={ep.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-colors group"
              >
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <Mic className="w-12 h-12 text-accent/40 group-hover:text-accent transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">{ep.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{ep.hook}</p>
                  <a
                    href={YOUTUBE_CHANNEL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline"
                  >
                    Watch Episode <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-border bg-card/50">
        <div className="container mx-auto px-6 max-w-4xl">
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
      <section id="contact" className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
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
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-heading font-bold text-lg hover:opacity-90 transition-opacity"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          >
            <Mail className="w-5 h-5" /> Contact the Show
          </motion.a>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-24 border-t border-border bg-card/50">
        <div className="container mx-auto px-6 max-w-xl text-center">
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
              // TODO: Connect to email service
            }}
          >
            <input
              type="text"
              placeholder="First name"
              required
              className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-body"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-body"
            />
            <button
              type="submit"
              className="w-full bg-foreground text-background px-6 py-3 rounded-md font-heading font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Mind Your Bizniz" className="h-10 w-auto dark:invert" />
              <span className="font-heading font-bold tracking-wider">MIND YOUR BIZNIZ</span>
            </div>
            <div className="flex items-center gap-6">
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={SPOTIFY_LINK} className="text-muted-foreground hover:text-foreground transition-colors">
                <Headphones className="w-5 h-5" />
              </a>
              <a href={APPLE_LINK} className="text-muted-foreground hover:text-foreground transition-colors">
                <Music className="w-5 h-5" />
              </a>
              <a href={INSTAGRAM_LINK} className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
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
