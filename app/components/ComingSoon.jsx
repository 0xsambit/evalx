import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const ComingSoon = () => {
    return (
        <Card className='w-1/2 bg-[#0d0d0d] border border-gray-500 card'>
            <CardHeader>
                <CardTitle className='text-4xl text-center roboto-bold text-white'>
                    Coming Soon
                </CardTitle>
            </CardHeader>
        </Card>
    );
};

export default ComingSoon;
