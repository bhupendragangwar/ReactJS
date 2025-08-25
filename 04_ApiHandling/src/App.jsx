import Fetch from './fetchApi/Fetch'

import './App.css'

function App() {
  // const [post, setPost] = useState([])
  // const [loading, setLading] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(()=>{
  //   const apiUrl = "https://jsonplaceholder.typicode.com/users"
  //   fetch(apiUrl)
  //   .then((res)=>{
  //     if(!res.ok){
  //       throw new Error("Network response was not ok")
  //     }
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     // console.log(data)
  //     setPost(data);
  //     setLading(false)
  //   })
  //   .catch((err) => {
  //     setError(err);
  //     setLading(false)
  //   })

  // }, [])
  // if(loading) return <p>Loading post...</p>
  // if(error) return <p>Error; {error}</p>

  return (
    <>
    <h2 className='hading'>API Handling</h2>
    <Fetch />
    </>
  )
}

export default App
