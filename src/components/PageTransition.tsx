import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
    const prevPath = useRef(location.pathname);

    useEffect(() => {
        // Skip on first mount (same path)
        if (prevPath.current === location.pathname) {
            return;
        }
        prevPath.current = location.pathname;

        // Phase 1: brown slides up from bottom to cover the screen
        setPhase("cover");

        const revealTimer = setTimeout(() => {
            window.scrollTo(0, 0);
            // Phase 2: brown slides up off the top to reveal new page
            setPhase("reveal");
        }, 600);

        const doneTimer = setTimeout(() => {
            setPhase("idle");
        }, 1400);

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(doneTimer);
        };
    }, [location.pathname]);

    return (
        <>
            {/* Brown curtain */}
            {(phase === "cover" || phase === "reveal") && (
                <motion.div
                    key={phase}
                    initial={{ y: phase === "cover" ? "-100%" : "0%" }}
                    animate={{ y: phase === "cover" ? "0%" : "100%" }}
                    transition={{ duration: phase === "cover" ? 0.45 : 0.6, ease: [0.76, 0, 0.24, 1] }}
                    style={{ background: "var(--brand-dark)", zIndex: 9999 }}
                    className="fixed inset-0 pointer-events-none"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                            initial={{ opacity: phase === "cover" ? 0 : 1, scale: 0.9 }}
                            animate={{ opacity: phase === "cover" ? 1 : 0, scale: phase === "cover" ? 1 : 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: phase === "cover" ? 0.15 : 0 }}
                            className="text-2xl font-bold tracking-widest"
                            style={{ color: "var(--brand-orange)", fontFamily: "var(--font-heading)" }}
                        >
                            MYB
                        </motion.span>
                    </div>
                </motion.div>
            )}

            {/* Page content */}
            <div>{children}</div>
        </>
    );
};

export default PageTransition;
