import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            window.scrollTo(0, 0);
            return;
        }

        // Phase 1: brown slides up from bottom to cover the screen
        setPhase("cover");

        const revealTimer = setTimeout(() => {
            window.scrollTo(0, 0);
            // Phase 2: brown slides up off the top to reveal new page
            setPhase("reveal");
        }, 700);

        const doneTimer = setTimeout(() => {
            setPhase("idle");
        }, 1600);

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(doneTimer);
        };
    }, [location.pathname]);

    return (
        <>
            {/* Brown curtain */}
            <AnimatePresence>
                {phase === "cover" && (
                    <motion.div
                        key="curtain-cover"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "0%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        style={{ background: "var(--brand-dark)", zIndex: 9999 }}
                        className="fixed inset-0 pointer-events-none"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                                className="text-2xl font-bold tracking-widest"
                                style={{ color: "var(--brand-orange)", fontFamily: "var(--font-heading)" }}
                            >
                                MYB
                            </motion.span>
                        </div>
                    </motion.div>
                )}
                {phase === "reveal" && (
                    <motion.div
                        key="curtain-reveal"
                        initial={{ y: "0%" }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        style={{ background: "var(--brand-dark)", zIndex: 9999 }}
                        className="fixed inset-0 pointer-events-none"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                                initial={{ opacity: 1, scale: 1 }}
                                animate={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="text-2xl font-bold tracking-widest"
                                style={{ color: "var(--brand-orange)", fontFamily: "var(--font-heading)" }}
                            >
                                MYB
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content — always visible, no opacity flash */}
            <div key={location.pathname}>
                {children}
            </div>
        </>
    );
};

export default PageTransition;
