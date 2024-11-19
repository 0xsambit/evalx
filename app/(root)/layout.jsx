import Navbar from "@/app/components/Navbar";

const HomeLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default HomeLayout;
