import React from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps children in a scroll-triggered fade-up animation.
 * Usage: <ScrollReveal><YourComponent /></ScrollReveal>
 */
export const ScrollReveal = ({
    children,
    className = "",
    delay = 0,
    direction = "up", // "up", "left", "right", "none"
    duration = 0.6
}) => {
    const directions = {
        up: { y: 40, x: 0 },
        left: { y: 0, x: -40 },
        right: { y: 0, x: 40 },
        none: { y: 0, x: 0 },
    };

    const offset = directions[direction] || directions.up;

    return (
        <motion.div
            initial={{ opacity: 0, y: offset.y, x: offset.x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1] // Custom cubic-bezier for premium feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/**
 * Stagger container - wraps multiple ScrollReveal children with automatic delay.
 */
export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }) => {
    return (
        <div className={className}>
            {React.Children.map(children, (child, index) => (
                <ScrollReveal delay={index * staggerDelay}>
                    {child}
                </ScrollReveal>
            ))}
        </div>
    );
};
