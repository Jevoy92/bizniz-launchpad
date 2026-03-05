import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const WORDS = ["Learn", "Grow", "Capture", "Create", "Inspire"];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");
    const [progress, setProgress] = useState(0);
    const [wordIdx, setWordIdx] = useState(0);

    useEffect(() => {
        // Animate progress from 0 to 100
        const duration = 2200;
        const start = performance.now();

        const tick = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - t, 3);
            setProgress(Math.round(eased * 100));

            if (t < 1) {
                requestAnimationFrame(tick);
            } else {
                setTimeout(() => setPhase("revealing"), 300);
            }
        };

        requestAnimationFrame(tick);
    }, []);

    // Cycle through words
    useEffect(() => {
        if (phase !== "loading") return;
        const interval = setInterval(() => {
            setWordIdx((prev) => (prev + 1) % WORDS.length);
        }, 500);
        return () => clearInterval(interval);
    }, [phase]);

    useEffect(() => {
        if (phase === "revealing") {
            const timer = setTimeout(() => {
                setPhase("done");
                onComplete();
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [phase, onComplete]);

    return (
        <AnimatePresence>
            {phase !== "done" && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{ background: "var(--brand-dark)" }}
                    initial={{ opacity: 1 }}
                    exit={{
                        clipPath: "circle(0% at 50% 50%)",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                    }}
                >
                    {/* Ambient glow */}
                    <motion.div
                        className="absolute w-[300px] h-[300px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(212,132,90,0.15) 0%, transparent 70%)",
                            filter: "blur(40px)",
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Logo icon */}
                    <motion.div
                        className="relative z-10 mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className="relative flex items-center justify-center"
                            animate={{
                                filter: [
                                    "drop-shadow(0 0 20px rgba(212,132,90,0.3))",
                                    "drop-shadow(0 0 50px rgba(212,132,90,0.6))",
                                    "drop-shadow(0 0 20px rgba(212,132,90,0.3))",
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(212,132,90,0.25) 0%, transparent 70%)", transform: "scale(2.5)" }} />
                            <img src="/logo-orange.png" alt="Logo" className="w-24 h-24 object-contain relative z-10" />
                        </motion.div>
                    </motion.div>

                    {/* Brand text */}
                    <motion.div
                        className="relative z-10 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h1
                            className="text-3xl md:text-4xl font-bold text-white tracking-tight flex gap-3"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            {"Mind Your Bizniz".split(" ").map((word, wordIdx) => (
                                <span key={wordIdx} className="inline-block whitespace-nowrap">
                                    {word.split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.5 + (wordIdx * 5 + i) * 0.05,
                                                duration: 0.5,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div
                        className="relative z-10 mt-10 w-48"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div
                            className="h-[2px] w-full rounded-full overflow-hidden"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    width: `${progress}%`,
                                    background: "linear-gradient(90deg, var(--brand-orange), var(--brand-orange-bright))",
                                }}
                            />
                        </div>
                        <motion.div
                            className="text-center mt-4 h-8 flex items-center justify-center overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={progress < 100 ? WORDS[wordIdx] : "ready"}
                                    className="text-sm tracking-[0.2em] uppercase font-medium"
                                    style={{ color: progress < 100 ? "var(--brand-orange)" : "#fff" }}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {progress < 100 ? WORDS[wordIdx] : "Ready"}
                                </motion.p>
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>

                    {/* Sound wave visualizer */}
                    <motion.div
                        className="absolute bottom-20 flex items-end gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 0.6 }}
                    >
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-[3px] rounded-full"
                                style={{ background: "var(--brand-orange)" }}
                                animate={{
                                    height: [
                                        `${8 + Math.random() * 12}px`,
                                        `${20 + Math.random() * 30}px`,
                                        `${8 + Math.random() * 12}px`,
                                    ],
                                }}
                                transition={{
                                    duration: 0.8 + Math.random() * 0.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.05,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
