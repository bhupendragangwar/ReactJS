import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AxiosBtn = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = async () => {
        setLoading(true);
        setError("");
        setTimeout(async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(response.data); // response.data is your array
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }, 2000)
    };

    return (
        <div>
            <h2>Fetching Information From axios api</h2>
            <button onClick={handleClick}>Fetch Info on click btn</button>
            {loading && <p>Loading data...</p>}
            {error && <p>{error}</p>}
            {data.length > 0 &&
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>
                            <h2>{post.name}</h2>
                        </li>
                    ))}
                </ul>
            }

        </div>
    )
}

export default AxiosBtn
