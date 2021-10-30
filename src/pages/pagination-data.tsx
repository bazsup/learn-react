import useFetch from "../hooks/useFetch"

interface User {
    id: {
        name: string
        value: string
    }
    name: {
        title: string
        first: string
        last: string
    },
    picture: {
        thumbnail: string
    }
}
interface FetchUserResponse {
    results: User[]
}

export default function PaginationData() {
    const { data, isLoading } = useFetch<FetchUserResponse>('https://randomuser.me/api/?page=1')

    return (
        <div>
            {
                data?.results?.map((user) => (
                    <div key={user.id.value}>
                        {user.name.first}
                    </div>
                ))
            }
        </div>
    )
}
