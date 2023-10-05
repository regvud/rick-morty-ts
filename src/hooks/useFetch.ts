import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";

export const useFetch = <T>(url: Promise<AxiosResponse<T>>) => {
    const [fetchData, setFetchData] = useState<T>(null)

    useEffect(() => {
        url.then(({data}) => setFetchData(data))
    }, []);

    return fetchData
}