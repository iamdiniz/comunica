import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { DuvidasData } from './../interface/DuvidasData';

const API_URL = 'http://localhost:8080';

const postData = async (data: DuvidasData): AxiosPromise<unknown> => {
    const response = axios.post(API_URL + '/duvidas', data);
    return response;
}

export function useDuvidasDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['duvida-data'] })
        }
    })

    return mutate;
}