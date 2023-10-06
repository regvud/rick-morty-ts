import React, {useEffect, useState} from "react";
import {AxiosResponse} from "axios";

export const useFetch = <T>(url: Promise<AxiosResponse<T>>, deps?: React.DependencyList) => {
    const [fetchData, setFetchData] = useState<T>(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        url.then(({data}) => setFetchData(data)).catch(e => setErrors(e))
    }, [deps]);


    return [fetchData, errors]
}