/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#5a5a5a",
                    200: "#3b3b3b",
                    300: "#1f1f1f",
                    DEFAULT: "#161616",
                },
                secondary: {
                    100: "#a5a5a5",
                    200: "#cdcdcd",
                    DEFAULT: "#969696",
                },
                astral: "#346DA3",
                glacier: "#81A7C2",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            fontWeight: {
                thin: "100",
                light: "300",
                regular: "400",
                medium: "500",
                bold: "700",
                black: "900",
            },
            fontStyle: {
                italic: "italic",
                normal: "normal",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
