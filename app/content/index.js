import { Computer, LaptopMinimalCheck, LayoutDashboardIcon, PersonStandingIcon, User } from "lucide-react";

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
]