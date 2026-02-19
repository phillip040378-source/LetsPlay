import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const FloatingNav = ({
    navItems,
    className,
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious();

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit md:max-w-4xl w-[90%] fixed top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-3 items-center justify-between md:justify-center gap-6 md:gap-8",
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link=${idx}`}
                        to={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex gap-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-medium text-sm md:text-base transition-colors"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block">{navItem.name}</span>
                    </Link>
                ))}
                <a
                    href="https://letsplay.magicbooking.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border text-sm font-bold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-2.5 rounded-full hover:bg-neutral-100 transition-colors shadow-sm"
                >
                    <span>Book Now</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </a>
            </motion.div>
        </AnimatePresence>
    );
};
