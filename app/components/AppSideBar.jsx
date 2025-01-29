import {
    LayoutDashboard,
    User,
    LaptopMinimal,
    Search,
    Settings,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/app/components/ui/sidebar";
import { auth } from "@/auth";
import logo from "@/app/assets/logo-white.png";
import Image from "next/image";
const items = [
    {
        title: "Overview",
        url: "/dashboard/recruiter",
        icon: LayoutDashboard,
    },
    {
        title: "Schedule",
        url: "/schedule",
        icon: LaptopMinimal,
    },
    // {
    //     title: "Candidates",
    //     url: "#",
    //     icon: User,
    // },
    // {
    //     title: "Report",
    //     url: "#",
    //     icon: Search,
    // },
    // {
    //     title: "Settings",
    //     url: "#",
    //     icon: Settings,
    // },
];

const AppSidebar = async () => {
    const session = await auth();
    return (
        <Sidebar>
            <SidebarContent className='bg-primary text-white font-poppins'>
                <div className='flex items-center justify-center flex-col'>
                    <Image src={logo} alt='logo' width={90} height={30} />
                    <h1 className='text-[#a2a2a2]'>{session.user.name}</h1>
                </div>
                <SidebarGroup>
                    <SidebarGroupLabel className='text-gray-400 text-sm'>
                        Dashboard
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span className='text-base font-regular'>
                                                {item.title}
                                            </span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;
