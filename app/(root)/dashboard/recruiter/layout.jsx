import AppSidebar from "@/app/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";

const RecruiterLayout = ({ children }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
};

export default RecruiterLayout;
