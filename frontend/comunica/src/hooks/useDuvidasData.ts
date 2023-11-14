import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { DuvidasData } from './../interface/DuvidasData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<DuvidasData[]> => {
    const response = axios.get(API_URL + '/duvidas');
    return response;
}

export function useDuvidasData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['duvidas-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}