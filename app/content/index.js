import { LaptopMinimalCheck, LayoutDashboardIcon, User } from "lucide-react";
import logo from "@/app/content/logo";
export const CardContent = [
    {
        id: 1,
        title: "Real Time Coding",
        desc: "Conduct live coding interviews with real time collaboration and syntax highlighting",
        icon: <LaptopMinimalCheck size={50} />,
    },
    {
        id: 2,
        title: "Candidate Evaluation",
        desc: "Evaluate candidates efficiently with our inbuilt code evaluation system and comprehensive report",
        icon: <User size={50} />,
    },
    {
        id: 3,
        title: "Performance Analytics",
        desc: "Get detailed insights on candidate performance on ur analytics dashboard",
        icon: <LayoutDashboardIcon size={50} />,
    },
];

export const Testimonials = [
    {
        id: 1,
        name: "John Doe",
        tagline: " Great platform to conduct interviews",
        desc: "I have been using EvalX for a while now and I must say it is the best platform to conduct interviews. The platform is very user-friendly and easy to use. I would recommend this platform to everyone.",
    },
    {
        id: 2,
        name: "Jane Doe",
        tagline: " Great platform to conduct interviews",
        desc: "I have been using EvalX for a while now and I must say it is the best platform to conduct interviews. The platform is very user-friendly and easy to use. I would recommend this platform to everyone.",
    },
    {
        id: 3,
        name: "John Doe",
        tagline: " Great platform to conduct interviews",
        desc: "I have been using EvalX for a while now and I must say it is the best platform to conduct interviews. The platform is very user-friendly and easy to use. I would recommend this platform to everyone.",
    },
];

export const FAQ = [
    {
        id: 1,
        tagline: "Is EvalX suitable for remote interviews?",
        desc: "Absolutely! EvalX is built with remote interviews in mind, offering live coding, video calls, and real-time collaboration tools.",
    },
    {
        id: 2,
        tagline: "What integrations does EvalX support?",
        desc: "EvalX supports popular programming languages like Python, JavaScript, Java, C++, and more in its live coding environment.",
    },
    {
        id: 3,
        tagline: "How does EvalX help me evaluate candidates?",
        desc: "EvalX uses industry-standard encryption and secure authentication methods to protect user data and interview content.",
    },
    {
        id: 4,
        tagline: "Can I track candidate performance on EvalX?",
        desc: "Yes, EvalX provides detailed analytics on candidate performance, allowing you to track their progress and identify areas for improvement. You can use this data to make data-driven hiring decisions.",
    },
    {
        id: 5,
        tagline: "Is EvalX easy to use?",
        desc: "Yes, EvalX is designed to be user-friendly and intuitive. You can easily set up interviews, invite candidates, and evaluate their performance with just a few clicks. The platform also offers real-time collaboration tools to make the interview process seamless.",
    },
];
export { logo };
