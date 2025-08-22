// Use fetch() to get data from a 
// public API (e.g., JSONPlaceholder) and display it in a list.

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [post, setPost] = useState([])
  const [loading, setLading] = useState(true)
  const [error, setError] = useState(null)

  const user = [
    {id: 1, Name: "Rohit", add: 10},
    {id: 2, Name: "Deepanshu", add: 11},
    {id: 3, Name: "Ashish", add: 12},
    {id: 4, Name: "Shivam", add: 13},
    {id: 5, Name: "Vivek", add: 14},
    {id: 6, Name: "Darmesh", add: 15},
  ]

  useEffect(()=>{
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    fetch(apiUrl)
    .then((res)=>{
      if(!res.ok){
        throw new Error("Network response was not ok")
      }
      return res.json()
    })
    .then((data)=>{
      // console.log(data)
      setPost(data);
      setLading(false)
    })
    .catch((err) => {
      setError(err);
      setLading(false)
    })

  }, [])
  if(loading) return <p>Loading post...</p>
  if(error) return <p>Error; {error}</p>

  return (
    <>
    <h2 className='hading'>API Handling</h2>
    <ul>
      {post.map((post)=>(
        <li key={post.id}>
 <h3>{post.id}</h3>
          <strong>{post.name}</strong>
          <p>{post.username}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
