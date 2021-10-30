import { useEffect, useState } from 'react'
import axios from 'axios'

interface FetchResponse<T> {
    data?: T,
    isLoading: boolean,
    error?: Error
}

export const useFetch = <T>(url: string): FetchResponse<T> => {
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error>()
    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(({ data: apiData }) => {
                setData(apiData)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return {data, isLoading, error}
}

export default useFetch