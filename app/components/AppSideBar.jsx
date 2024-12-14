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
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/app/components/ui/sidebar";

const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
    },
    {
        title: "Interviews",
        url: "#",
        icon: LaptopMinimal,
    },
    {
        title: "Candidates",
        url: "#",
        icon: User,
    },
    {
        title: "Report",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent className='bg-primary text-white font-roboto'>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span className='text-lg'>
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
