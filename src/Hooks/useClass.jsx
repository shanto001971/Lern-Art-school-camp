import { useQuery } from "@tanstack/react-query";





export const useClass = () => {
    const { data: classData = [], isLoading: loading , refetch} = useQuery({
        queryKey: ['classData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class')
            return res.json();
        }

    });


    return [classData, loading,refetch]
}