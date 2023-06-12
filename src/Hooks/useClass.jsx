import { useQuery } from "@tanstack/react-query";





export const useClass = () => {
    const { data: classData = [], isLoading: loading , refetch} = useQuery({
        queryKey: ['classData'],
        queryFn: async () => {
            const res = await fetch('https://summar-school-server-shanto001971.vercel.app/class')
            return res.json();
        }

    });


    return [classData, loading,refetch]
}