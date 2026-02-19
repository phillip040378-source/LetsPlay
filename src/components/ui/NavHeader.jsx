import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavHeader() {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <div className="relative">
            <ul
                className="relative mx-auto flex w-fit rounded-full border border-slate-200 bg-white p-1 shadow-sm"
                onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            >
                <Tab setPosition={setPosition} to="/">Home</Tab>
                <Tab setPosition={setPosition} to="/blog">News & Activities</Tab>
                <Tab setPosition={setPosition} to="/staff">Meet the Team</Tab>
                <Tab setPosition={setPosition} href="https://letsplay.magicbooking.co.uk/" external>Book Now</Tab>

                <Cursor position={position} />
            </ul>
        </div>
    );
}

const Tab = ({ children, setPosition, to, href, external }) => {
    const ref = useRef(null);

    const content = (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;

                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                });
            }}
            className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium uppercase text-slate-800 mix-blend-multiply md:px-6 md:py-2 md:text-sm lg:text-base transition-colors hover:text-black"
        >
            {children}
        </li>
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        )
    }

    return (
        <Link to={to}>
            {content}
        </Link>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={position}
            className="absolute z-0 h-9 rounded-full bg-slate-200 md:h-10"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
    );
};

export default NavHeader;
