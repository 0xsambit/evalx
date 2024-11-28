"use client";

import { useEffect, useState } from "react";
import ScreenSizeDetect from "@/app/ScreenSizeDetect";

const ScreenSizeWrapper = ({ children }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isSmallScreen ? <ScreenSizeDetect /> : children;
};

export default ScreenSizeWrapper;
