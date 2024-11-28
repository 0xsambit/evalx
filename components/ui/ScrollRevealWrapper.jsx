"use client";
import { RevealWrapper } from "next-reveal";
const ScrollRevealWrapper = ({ children, options }) => {
    return <RevealWrapper {...options}>{children}</RevealWrapper>;
};

export default ScrollRevealWrapper;
