import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setShowOverlay(true);
        const timer = setTimeout(() => setShowOverlay(false), 600);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            {/* Brown curtain overlay */}
            <AnimatePresence mode="wait">
                {showOverlay && (
                    <motion.div
                        key={location.pathname + "-overlay"}
                        initial={{ y: 0 }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                        style={{ background: "var(--brand-dark)", zIndex: 9999 }}
                        className="fixed inset-0 pointer-events-none"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                                initial={{ opacity: 1, scale: 1 }}
                                animate={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="text-2xl font-bold tracking-widest"
                                style={{ color: "var(--brand-orange)", fontFamily: "var(--font-heading)" }}
                            >
                                MYB
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content fades in after curtain */}
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;
