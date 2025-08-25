// Use fetch() to get data from a 
// public API (e.g., JSONPlaceholder) and display it in a list.

import { useState, useEffect } from 'react'

const Fetch = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users"
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network res was not ok')
                }
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setPost(data);
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])
    if (loading) return <p>Loading Post...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <>
            <h2>Data Fetch from Fetch API</h2>
            <uL>
                {post.map((data) => (
                    <li key={data.id}>
                        <h2>{data.id}</h2>
                        <h2>{data.name}</h2>
                    </li>
                ))}
            </uL>
        </>
    )

}

export default Fetch;