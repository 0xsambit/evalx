import AppSidebar from "@/app/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";

const RecruiterLayout = ({ children }) => {
    return (
        <SidebarProvider className='bg-primary text-white'>
            <AppSidebar />
            <main className='flex flex-col w-full min-h-screen'>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
};

export default RecruiterLayout;
