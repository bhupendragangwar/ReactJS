import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Axios() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users"
        axios.get(apiUrl)
            .then((response) => {
                setTimeout(() => {
                    console.log('Information||||||||||||', response)
                    console.log('Array form||||||||||||', response.data)
                    setPost(Array.isArray(response.data) ? response.data : Object.values(response.data))
                    setLoading(false)
                }, 3000)

                // setPost(response.data)
                // setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Post Loading...</p>
    if (error) return <p>Error: {error}</p>
    return (
        <div>
            <h2>Fetching Information From axios api</h2>
            <ul>
                {post.map((post) => (
                    <li key={post.id}>
                        <h2>{post.username}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}